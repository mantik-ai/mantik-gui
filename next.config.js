/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    publicRuntimeConfig: {
        apiBaseUrl: process.env.API_BASE_URL,
        debounceTimerSearchQuery: Number(
            process.env.DEBOUNCE_TIMER_SEARCH_QUERY
        ),
        mockDynamically: Boolean(process.env.MOCK_DYNAMICALLY),
        nextAuthUrl: process.env.NEXTAUTH_URL,
    },
}

module.exports = nextConfig
