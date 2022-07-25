import React from 'react'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { SessionProvider } from 'next-auth/react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import MainLayout from '../common/layouts/MainLayout'
import '../styles/global.css'
import { defaultTheme } from '../common/themes/default'
import '@fontsource/blinker/300.css'
import '@fontsource/blinker/400.css'
import '@fontsource/blinker/600.css'
import '@fontsource/blinker/700.css'

function MantikApp({
    Component,
    pageProps: { session, ...pageProps },
}: AppProps) {
    const [queryClient] = React.useState(() => new QueryClient())
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={defaultTheme}>
                <SessionProvider session={session}>
                    <CssBaseline />
                    <MainLayout>
                        <Component {...pageProps} />
                    </MainLayout>
                    <ReactQueryDevtools initialIsOpen={false} />
                </SessionProvider>
            </ThemeProvider>
        </QueryClientProvider>
    )
}

export default MantikApp
