import { getToken } from "next-auth/jwt";
import prisma from "../../../lib/prisma";

export default async (req, res) => {
    const jwtToken = await getToken({ req });
    const { slug, page = 1, limit = 10 } = req.query;
    // const { page = 1, limit = 10 } = req.query;

    if (req.method === "GET") {
        // Return nft by page
        if (String(slug) === String("all")) {
            try {
                const tokens = await prisma.NftToken.findMany({
                    skip: ((page - 1) * limit),
                    take: (limit * 1),
                    where: {
                        // owner: jwtToken.sub,
                        // AND: [{ collection: "genesis" }, { owner: jwtToken.sub }],
                        collection: "genesis",
                        contractAddress: "0x934910077F5185F1E62f821c167b38A864156688",
                        // tokenId: slug[0],
                    },
                    orderBy: {
                        bdcTokenId: 'asc',
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
        if (String(slug) !== String("all")) {
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
    if (req.method === "PUT") {
        return res.status(401);
    }
    if (req.method === "DELETE") {
        return res.status(401);
    }

    return res.status(401);

    // res.end();
};
