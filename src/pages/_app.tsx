import React from 'react'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import MainLayout from '../common/layouts/MainLayout'
import '../styles/global.css'
import { defaultTheme } from '../common/themes/default'
import '@fontsource/Blinker/300.css'
import '@fontsource/Blinker/400.css'
import '@fontsource/Blinker/600.css'
import '@fontsource/Blinker/700.css'

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
