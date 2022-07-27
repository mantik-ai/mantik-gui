import nextAuth from 'next-auth'
import cognitoProvider from 'next-auth/providers/cognito'
import githubProvider from 'next-auth/providers/github'
import googleProvider from 'next-auth/providers/google'
import appleProvider from 'next-auth/providers/apple'
import {
    APPLE_PROVIDER_ID,
    COGNITO_PROVIDER_ID,
    GITHUB_PROVIDER_ID,
    GOOGLE_PROVIDER_ID,
} from '../../../common/constants'
import { assertEnv } from '../../../common/helpers'
export default nextAuth({
    providers: [
        cognitoProvider({
            id: COGNITO_PROVIDER_ID,
            clientId: assertEnv(process.env.COGNITO_CLIENT_ID),
            clientSecret: assertEnv(process.env.COGNITO_CLIENT_SECRET),
            // domain: assertEnv(process.env.COGNITO_DOMAIN),
        }),
        githubProvider({
            id: GITHUB_PROVIDER_ID,
            clientId: assertEnv(process.env.GITHUB_ID),
            clientSecret: assertEnv(process.env.GITHUB_SECRET),
        }),
        googleProvider({
            id: GOOGLE_PROVIDER_ID,
            clientId: assertEnv(process.env.GOOGLE_CLIENT_ID),
            clientSecret: assertEnv(process.env.GOOGLE_CLIENT_SECRET),
            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code',
                },
            },
        }),
        appleProvider({
            id: APPLE_PROVIDER_ID,
            clientId: assertEnv(process.env.APPLE_ID),
            clientSecret: assertEnv(process.env.APPLE_SECRET),
        }),
    ],
    secret: process.env.SECRET,
    callbacks: {
        async jwt({ token, account }) {
            // Persist the OAuth access_token to the token right after signin
            if (account) {
                token.accessToken = account.access_token
            }
            return token
        },
        async session({ token, session }) {
            // Send properties to the client, like an access_token from a provider.
            session.accessToken = token.accessToken
            return session
        },
        redirect: () => '/projects',
        async signIn({ account, profile }): Promise<string | boolean> {
            switch (account.provider) {
                case COGNITO_PROVIDER_ID:
                    console.log(profile)
                    return ''
                case GOOGLE_PROVIDER_ID:
                    return profile.email_verified as boolean
                case APPLE_PROVIDER_ID:
                    return ''
                case GITHUB_PROVIDER_ID:
                    return ''
                default:
                    return true
            }
        },
    },
})
