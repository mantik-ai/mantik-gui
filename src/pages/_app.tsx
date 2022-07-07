import React from 'react'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import MainLayout from '../common/layouts/MainLayout'
import '../styles/global.css'
import { defaultTheme } from '../common/themes/default'
import '@fontsource/blinker/300.css'
import '@fontsource/blinker/400.css'
import '@fontsource/blinker/600.css'
import '@fontsource/blinker/700.css'

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
