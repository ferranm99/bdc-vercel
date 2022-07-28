import { getToken } from "next-auth/jwt";
// import prisma from "../../lib/prisma";

export default async (req, res) => {
    const jwtToken = await getToken({ req });

    if (jwtToken) {
        const tokens = await prisma.NftToken.findMany({
            where: {
                // owner: jwtToken.sub,
                AND: [
                    { collection: "genesis" },
                    { owner: jwtToken.sub },
                ]
            }
        });
        // res.status(200).json(tokens);
        console.log("Tokens", JSON.stringify(tokens, null, 2));
        console.log("JSON Web Token", JSON.stringify(jwtToken, null, 2));
    } else {
        // Not Signed in
        res.status(401);
    }
    res.end();
}
