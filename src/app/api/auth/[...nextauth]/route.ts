import NextAuth, { NextAuthOptions } from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"

export const authOPtions:NextAuthOptions = {
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID ?? '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
        }),

        GitHub({
            clientId: process.env.AUTH_GITHUB_ID ?? '',
            clientSecret: process.env.AUTH_GITHUB_SECRET ?? ''
        })
    ]
}

const handler = NextAuth(authOPtions);
export {handler as GET, handler as POST};