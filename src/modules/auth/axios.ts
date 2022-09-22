import axios from 'axios'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
const instance = axios.create({
    baseURL:
        publicRuntimeConfig.nextAuthUrl ?? `https://${process.env.VERCEL_URL}`,
})

export default instance
