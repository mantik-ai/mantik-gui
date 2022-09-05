/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    publicRuntimeConfig: {
        apiBaseUrl: process.env.API_BASE_URL,
        debounceTimerSearchQuery: Number(
            process.env.DEBOUNCE_TIMER_SEARCH_QUERY
        ),
        mockDynamically: Boolean(process.env.MOCK_DYNAMICALLY),
        nextAuthSecret: process.env.NEXTAUTH_SECRET,
        cognitoUserPoolId: process.env.COGNITO_USER_POOL_ID,
        cognitoRegion: process.env.COGNITO_REGION,
        cognitoClientId: process.env.COGNITO_CLIENT_ID,
        cognitoClientSecret: process.env.COGNITO_CLIENT_SECRET,
    },
}

module.exports = nextConfig
