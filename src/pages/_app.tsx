import React from 'react'
import type { AppProps } from 'next/app'
import MainLayout from '../common/layouts/MainLayout'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
    )
}

export default MyApp
