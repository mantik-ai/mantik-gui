import React from 'react'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import MainLayout from '../common/layouts/MainLayout'
import '../styles/global.css'
import { defaultTheme } from '../common/themes/default'

function MantikApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </ThemeProvider>
    )
}

export default MantikApp
