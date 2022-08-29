import axios from 'axios'
import nextAuth from 'next-auth'
import credentialsProvider from 'next-auth/providers/credentials'
import getConfig from 'next/config'
import { COGNITO_PROVIDER_ID } from '../../../common/constants'

const { publicRuntimeConfig } = getConfig()

export default nextAuth({
    providers: [
        credentialsProvider({
            id: COGNITO_PROVIDER_ID,
            name: 'Credentials',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'text',
                },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials, _) {
                // Add logic here to look up the user from the credentials supplied
                const res = await axios.post(
                    `${process.env.NEXTAUTH_URL}/api/login`,
                    {
                        username: credentials?.email,
                        password: credentials?.password,
                    },
                    {
                        headers: {
                            accept: '*/*',
                            'Content-Type': 'application/json',
                        },
                    }
                )

                if (res.status !== 200) return null
                const dataSent = JSON.parse(res.config.data as string)

                const cognitoTokens = res.data as Record<string, unknown>
                cognitoTokens.name = dataSent.username
                return cognitoTokens
            },
        }),
    ],
    secret: String(publicRuntimeConfig.nextAuthSecret),
    pages: {
        signIn: '/login',
    },
    callbacks: {
        async jwt({ token, user, account }) {
            if (account && user) {
                return {
                    ...token,
                    name: user.name,
                    accessToken: user.AccessToken,
                    refreshToken: user.RefreshToken,
                    accessTokenExpires: user.ExpiresIn,
                }
            }

            return token
        },
        async session({ session, token }) {
            // session.user?.name = token.accessToken
            session.user.name = token.name
            session.user.accessToken = token.accessToken
            session.user.refreshToken = token.refreshToken
            session.user.accessTokenExpires = token.accessTokenExpires
            return session
        },
    },
    debug: process.env.NODE_ENV === 'development',
})
