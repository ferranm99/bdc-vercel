import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getCsrfToken } from "next-auth/react";
import { SiweMessage } from "siwe";

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default async function auth(req, res) {
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
                    const siwe = new SiweMessage(
                        JSON.parse(credentials?.message || "{}")
                    );
                    const nextAuthUrl = new URL(process.env.NEXTAUTH_URL ?? "");
                    if (siwe.domain !== nextAuthUrl.host) {
                        return null;
                    }

                    if (siwe.nonce !== (await getCsrfToken({ req }))) {
                        return null;
                    }

                    await siwe.validate(credentials?.signature || "");
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
