import { getToken } from "next-auth/jwt";
import prisma from "../../../lib/prisma";

export default async (req, res) => {
    const jwtToken = await getToken({ req });
    const { slug } = req.query;

    if (req.method == 'GET') {
        if (slug) {
            // Find individual NFT token (check to see if slug is a number)
            if (slug.length == 1 && !isNaN(+slug)) {
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
            } else {
                return res.status(401);
            }
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
        } else {
            // Not Signed in
            return res.status(401);
        }
    }
    if (req.method == 'PUT') {
        return res.status(401);
    }
    if (req.method == 'DELETE') {
        return res.status(401);
    }
    else {
        return res.status(401);
    }
    // res.end();
};
