import { getToken } from "next-auth/jwt";
import prisma from "../../../lib/prisma";

export default async (req, res) => {
    const jwtToken = await getToken({ req });
    const { slug } = req.query;

    // PATH: report/{collection}
    // Body: message, owner, tokenId

    if (req.method == 'POST') {
        if (jwtToken) {

            // Get the signed in address from jwt
            const sender = jwtToken.sub;

            if (slug) {
                // Get the collection and NFT tokenId 
                // if (slug.length == 1 && !isNaN(+slug)) {
                if (slug.length == 1) {

                    const collection = slug[0];
                    // const tokenId = slug[1];
                    const tokenId = req.body.tokenId;

                    // Check to see if 2nd slug is a number
                    if (!isNaN(tokenId)) {

                        const message = req.body.message;
                        const owner = req.body.owner;

                        try {
                            const report = await prisma.NftTokenReport.create({
                                data: {
                                    collection: collection,
                                    tokenId: tokenId,
                                    owner: owner,
                                    message: message,
                                    senderAddress: sender
                                },
                            })

                            // return res.status(200).json({ report, status: 'API called sucessfully' });
                            return res.status(200).json(report);

                        } catch (err) {
                            console.log(err);
                            return res.status(403).json({ err: "Error occured." });
                        }

                    } else {
                        return res.status(401);
                    }
                } else {
                    return res.status(401);
                }
            }
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
