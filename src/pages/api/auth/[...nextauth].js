import NextAuth from "next-auth";
// import { PrismaClient } from "@prisma/client";
import CredentialsProvider from "next-auth/providers/credentials";
import { getCsrfToken } from "next-auth/react";
import { SiweMessage } from "siwe";
import prisma from "../../../lib/prisma";

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default async function auth(req, res) {
    // const prisma = new PrismaClient();

    const providers = [
        CredentialsProvider({
            name: "Ethereum",
            credentials: {
                message: {
                    label: "Message",
                    type: "text",
                    placeholder: "0x0",
                },
                signature: {
                    label: "Signature",
                    type: "text",
                    placeholder: "0x0",
                },
            },
            async authorize(credentials) {
                try {
                    // console.log(`credential.message: ${credentials.message}`);
                    // Sample credential.message
                    // credential.message: {"domain":"localhost:3000","address":"0x5E6C8309e0B1B7d2BF064AbFF405C52A088982a4","statement":"Sign in with Ethereum to localhost:3000","uri":"http://localhost:3000","version":"1","chainId":1,"nonce":"4c730cc55b6cd499ae3cd67252faaf0c60cd451466763cb49d7e8de6d4052009","issuedAt":"2022-07-22T12:23:23.088Z"}
                    const siwe = new SiweMessage(
                        JSON.parse(credentials?.message || "{}")
                    );
                    const nextAuthUrl = new URL(process.env.NEXTAUTH_URL ?? "");
                    if (siwe.domain !== nextAuthUrl.host) {
                        console.log("siwe.domain <> netAuthUrl.host");
                        return null;
                    }

                    if (siwe.nonce !== (await getCsrfToken({ req }))) {
                        return null;
                    }

                    await siwe.validate(credentials?.signature || "");
                    const user = await prisma.User.findFirst({
                        where: {
                            ethAddress: siwe.address,
                        },
                    });

                    // if (user !== null) { } else {
                    if (user === null) {
                        await prisma.user.create({
                            data: {
                                ethAddress: siwe.address,
                                status: "A",
                            },
                        });
                    }

                    console.log(`MongoDB User: ${JSON.stringify(user)}`);

                    return {
                        id: siwe.address,
                    };
                } catch (e) {
                    // eslint-disable-next-line no-console
                    console.error(e);
                    return null;
                }
            },
        }),
    ];

    const isDefaultSigninPage =
        req.method === "GET" && req.query.nextauth.includes("signin");

    // Hides Sign-In with Ethereum from default sign page
    if (isDefaultSigninPage) {
        providers.pop();
    }

    // return await NextAuth(req, res, {
    return NextAuth(req, res, {
        // https://next-auth.js.org/configuration/providers/oauth
        providers,
        session: {
            strategy: "jwt",
        },
        secret: process.env.NEXTAUTH_SECRET,
        callbacks: {
            async session({ session, token }) {
                // eslint-disable-next-line no-param-reassign
                session.address = token.sub;
                // eslint-disable-next-line no-param-reassign
                session.user.name = token.sub;
                return session;
            },
        },
    });
}
