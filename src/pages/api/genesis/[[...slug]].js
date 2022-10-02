import { getToken } from "next-auth/jwt";
import { ethers } from "ethers";
import AWS from "aws-sdk";
import prisma from "../../../lib/prisma";
import contractABI from "./abi-genesis.json";
// import { ethers } from "hardhat";
// const { ethers } = require("hardhat");

require("dotenv").config();

const s3 = new AWS.S3({
    region: "us-east-1",
    accessKeyId: process.env.NEXT_PUBLIC_AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_S3_ACCESS_KEY,
    signatureVersion: "v4",
});

const _collection = "genesis"; // const tokenId = slug[1];

export default async (req, res) => {
    const alchemyApiKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;
    const genesisContractAddress = process.env.GENESIS_CONTRACT_ADDRESS;
    const jwtToken = await getToken({ req });
    const { slug, page = 1, limit = 10 } = req.query;
    // const contractABI = require("./abi-genesis.json");
    // const { page = 1, limit = 10 } = req.query;

    if (req.method === "GET") {
        // Return nft by page
        if (String(slug) === String("all")) {
            try {
                const tokens = await prisma.NftToken.findMany({
                    skip: (page - 1) * limit,
                    take: limit * 1,
                    where: {
                        // owner: jwtToken.sub,
                        // AND: [{ collection: "genesis" }, { owner: jwtToken.sub }],
                        collection: _collection,
                        // eslint-disable-next-line prettier/prettier
                        contractAddress: genesisContractAddress,
                        // tokenId: slug[0],
                    },
                    orderBy: {
                        bdcTokenId: "asc",
                    },
                });

                //   const count = await prisma.NftToken.count();

                return res.status(200).json(tokens);
                // return res.status(200).json({
                //     // totalPages: Math.ceil(count / limit),
                //     currentPage: page,
                //     tokens,
                // });
            } catch (err) {
                return res.status(401).json({ message: `Error: ${err}` });
                // console.error(err.message);
            }
        }

        // Return a specific nft token (e.g. 888)
        if (slug) {
            // Find individual NFT token (check to see if slug is a number)
            if (slug.length === 1 && !Number.isNaN(+slug)) {
                // res.status(200).json({ tokenId: slug });
                // res.status(200);

                const token = await prisma.NftToken.findFirst({
                    where: {
                        // owner: jwtToken.sub,
                        // AND: [{ collection: "genesis" }, { owner: jwtToken.sub }],
                        collection: _collection,
                        tokenId: slug[0],
                    },
                });

                // Get the most up-to-date owner from the blockchain
                // eslint-disable-next-line prettier/prettier
                const provider = new ethers.providers.AlchemyProvider(null, alchemyApiKey);
                // eslint-disable-next-line prettier/prettier
                const contract = new ethers.Contract(genesisContractAddress, contractABI, provider);
                token.owner = await contract.ownerOf(slug[0]);

                // tokens.owner = "123";
                return res.status(200).json(token);
            }

            return res.status(401).json({ message: `Unauthorized` });
        }

        // Show NFT of current logged in user
        if (jwtToken) {
            const tokens = await prisma.NftToken.findMany({
                where: {
                    // owner: jwtToken.sub,
                    // AND: [{ collection: "genesis" }, { owner: jwtToken.sub }],
                    collection: _collection,
                    owner: jwtToken.sub,
                },
            });
            return res.status(200).json(tokens);
            // console.log("Tokens", JSON.stringify(tokens, null, 2));
            // console.log("JSON Web Token", JSON.stringify(jwtToken, null, 2));
        }
        // Not Signed in
        return res.status(401).json({ message: `Unauthorized` });
    }
    if (req.method === "POST") {
        if (jwtToken) {
            // Get the signed in address from jwt
            const sender = jwtToken.sub;

            // Set the NFT tokenId
            const { tokenId } = req.body;

            // Check to see if tokenId is a number
            if (!Number.isNaN(tokenId)) {
                const { message } = req.body;
                // console.log(`message: ${message}`);
                // console.log(`tokenId: ${tokenId}, ${typeof (tokenId)}`);

                // Get the ABI for the genesis contract
                try {
                    // Fetch the json file from ipfs
                    // eslint-disable-next-line prettier/prettier
                    const fetchResponse = await fetch(`http://ipfs.baddogscompany.com/tokens/genesis/${tokenId}.json`);
                    const tokenJson = await fetchResponse.json();
                    tokenJson.description = message;
                    // console.log("tokenJson:");
                    // console.log(tokenJson);

                    // Log the history

                    // Connect to the blockchain to query the contract via Alchemy
                    // eslint-disable-next-line prettier/prettier
                    const provider = new ethers.providers.AlchemyProvider(null, alchemyApiKey);
                    const contract = new ethers.Contract(
                        genesisContractAddress,
                        contractABI,
                        provider
                    );

                    // Find the owner of the token
                    const tokenOwner = await contract.ownerOf(tokenId);
                    // console.log(`tokenOwner is: ${tokenOwner}`);
                    // console.log(tokenOwner);

                    // Check to see if session owner is the same token owner on blockchain
                    if (sender === tokenOwner) {
                        // Update the token record and create history record as a transaction
                        const updateToken = await prisma.$transaction([
                            prisma.NftToken.updateMany({
                                where: {
                                    collection: _collection,
                                    // eslint-disable-next-line prettier/prettier
                                    contractAddress: genesisContractAddress,
                                    tokenId,
                                    // owner: jwtToken.sub,
                                },
                                data: {
                                    description: message.substring(0, 512),
                                },
                            }),
                            prisma.NftTokenHistory.create({
                                data: {
                                    collection: _collection,
                                    contractAddress: genesisContractAddress,
                                    tokenId,
                                    owner: tokenOwner,
                                    senderAddress: sender,
                                    description: message.substring(0, 512),
                                    file: tokenJson,
                                },
                            }),
                        ]);

                        // console.log(`updateToken: ${updateToken}`);

                        // TODO: Update json file in aws ipfs folder
                        const fileParams = {
                            Bucket: process.env.GENESIS_BUCKET_NAME,
                            Key: `tokens/genesis/${tokenId}.json`,
                            // Key: `${tokenId}.test.json`,
                            Body: JSON.stringify(tokenJson),
                            ContentType: "application/json",
                        };

                        // Uploading files to the bucket
                        s3.upload(fileParams, (err, data) => {
                            if (err) {
                                throw err;
                            }
                            // console.log(`File uploaded successfully. ${data.Location}`);
                        });

                        // Upload file to s3 using putObject method
                        // const result = await s3.putObject(fileParams).promise();
                        // const url = await s3.getSignedUrlPromise("putObject", fileParams);

                        return res.status(200).json(updateToken);
                    }
                } catch (err) {
                    // console.log(err);
                    // eslint-disable-next-line prettier/prettier
                    return res.status(403).json({ message: `Error: ${err}` });
                }
            } else {
                return res.status(401).json({ message: `Unauthorized` });
            }
        } else {
            // Not Signed in
            return res.status(401).json({ message: `Unauthorized` });
        }
    }
    if (req.method === "PUT") {
        return res.status(405).json({ message: `Method not allowed` });
    }
    if (req.method === "DELETE") {
        return res.status(405).json({ message: `Method not allowed` });
    }

    return res.status(401).json({ message: `Unauthorized` });
    // res.end();
};
