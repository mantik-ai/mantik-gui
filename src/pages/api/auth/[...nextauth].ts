import axios from 'axios'
import nextAuth from 'next-auth'
import credentialsProvider from 'next-auth/providers/credentials'
import { COGNITO_PROVIDER_ID } from '../../../common/constants'

export default nextAuth({
    providers: [
        credentialsProvider({
            id: COGNITO_PROVIDER_ID,
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
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
                console.log(res)
                return null

                // if (user) {
                //     return user
                // } else {
                //     return null
                // }
            },
        }),
    ],
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
    },
})
