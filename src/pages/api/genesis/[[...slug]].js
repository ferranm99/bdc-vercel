import { getToken } from "next-auth/jwt";
import prisma from "../../../lib/prisma";
import { ethers } from "ethers";
// import { ethers } from "hardhat";
// const { ethers } = require("hardhat");
import contractABI from "./abi-genesis.json";

export default async (req, res) => {
    require('dotenv').config();
    const alchemyApiKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;
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
                        collection: "genesis",
                        contractAddress:
                            "0x934910077F5185F1E62f821c167b38A864156688",
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
                return res.json(err);
                // console.error(err.message);
            }
        }

        // Return a specific nft token (e.g. 888)
        if (slug) {
            // Find individual NFT token (check to see if slug is a number)
            if (slug.length === 1 && !Number.isNaN(+slug)) {
                // res.status(200).json({ tokenId: slug });
                // res.status(200);

                const tokens = await prisma.NftToken.findFirst({
                    where: {
                        // owner: jwtToken.sub,
                        // AND: [{ collection: "genesis" }, { owner: jwtToken.sub }],
                        collection: "genesis",
                        tokenId: slug[0],
                    },
                });
                return res.status(200).json(tokens);
            }

            return res.status(401);
        }

        // Show NFT of current logged in user
        if (jwtToken) {
            const tokens = await prisma.NftToken.findMany({
                where: {
                    // owner: jwtToken.sub,
                    // AND: [{ collection: "genesis" }, { owner: jwtToken.sub }],
                    collection: "genesis",
                    owner: jwtToken.sub,
                },
            });
            return res.status(200).json(tokens);
            // console.log("Tokens", JSON.stringify(tokens, null, 2));
            // console.log("JSON Web Token", JSON.stringify(jwtToken, null, 2));
        }
        // Not Signed in
        return res.status(401);
    }
    if (req.method === "POST") {
        if (jwtToken) {
            // Get the signed in address from jwt
            const sender = jwtToken.sub;

            // Set the collection and NFT tokenId
            const _collection = "genesis"; // const tokenId = slug[1];
            const _contractAddress = "0x934910077F5185F1E62f821c167b38A864156688";
            const { tokenId } = req.body;

            // Check to see if tokenId is a number
            if (!Number.isNaN(tokenId)) {
                const { message } = req.body;
                // console.log(`message: ${message}`);
                // console.log(`tokenId: ${tokenId}, ${typeof (tokenId)}`);

                // TODO: Check to see if session owner is the same token owner on blockchain

                // Get the ABI for the genesis contract
                // const contractAddress = "0x6f3f635A9762B47954229Ea479b4541eAF402A6A";
                const contractAddress = "0x934910077F5185F1E62f821c167b38A864156688";

                try {
                    // const provider = new ethers.providers.AlchemyProvider(network = "mainnet", apiKey = NEXT_PUBLIC_ALCHEMY_API_KEY);
                    const provider = new ethers.providers.AlchemyProvider(null, alchemyApiKey);
                    const contract = new ethers.Contract(contractAddress, contractABI, provider);

                    // Find the owner of the token
                    // const tokenOwner = await genesisContract.methods.ownerOf(Number(tokenId)).call();
                    // const tokenOwner = await genesisContract.methods.name().call();

                    const tokenOwner = await contract.ownerOf(tokenId);
                    console.log(`tokenOwner is: ${tokenOwner}`);
                    console.log(tokenOwner);


                    // Update the token records in the database
                    const updateToken = await prisma.NftToken.updateMany({
                        where: {
                            collection: _collection,
                            contractAddress: _contractAddress,
                            tokenId: tokenId,
                            // owner: jwtToken.sub,
                        },
                        data: {
                            description: message.substring(0, 512),
                        },
                    });

                    console.log(`updateToken: ${updateToken}`);

                    // TODO: Update json file in ipfs folder

                    return res.status(200).json(updateToken);
                } catch (err) {
                    console.log(err);
                    return res
                        .status(403)
                        .json({ err: "Error occured." });
                }
            } else {
                return res.status(401);
            }

        } else {
            // Not Signed in
            return res.status(401);
        }
    }
    if (req.method === "PUT") {
        return res.status(401);
    }
    if (req.method === "DELETE") {
        return res.status(401);
    }

    return res.status(401);

    // res.end();
};
