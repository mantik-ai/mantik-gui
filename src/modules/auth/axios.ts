import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.NEXTAUTH_URL ?? process.env.VERCEL_URL,
})

export default instance
