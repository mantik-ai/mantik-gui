import nextAuth from 'next-auth'
import cognitoProvider from 'next-auth/providers/cognito'
import githubProvider from 'next-auth/providers/github'
import googleProvider from 'next-auth/providers/google'
import appleProvider from 'next-auth/providers/apple'
import {
    COGNITO_PROVIDER_ID,
    APPLE_PROVIDER_ID,
    GITHUB_PROVIDER_ID,
    GOOGLE_PROVIDER_ID,
} from '../../../shared/constants'
import { assertEnv } from '../../../shared/helpers'

export default nextAuth({
    providers: [
        cognitoProvider({
            id: COGNITO_PROVIDER_ID,
            clientId: assertEnv(process.env.COGNITO_CLIENT_ID),
            clientSecret: assertEnv(process.env.COGNITO_CLIENT_SECRET),
            domain: process.env.COGNITO_DOMAIN,
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
    jwt: {
        encryption: true,
    },
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
        redirect: async () => Promise.resolve('/projects'),
        async signIn({ account, profile }) {
            switch (account.provider) {
                case COGNITO_PROVIDER_ID:
                    console.log(profile)
                    return ''
                case GOOGLE_PROVIDER_ID:
                    return profile.email_verified
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
