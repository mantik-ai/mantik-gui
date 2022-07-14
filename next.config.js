/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    publicRuntimeConfig: {
        // Will be available on both server and client
        apiBaseUrl: process.env.API_BASE_URL,
    },
}

module.exports = nextConfig
