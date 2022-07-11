import React from 'react'
import type { AppProps } from 'next/app'
import MainLayout from '../common/layouts/MainLayout'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { CssBaseline, ThemeProvider } from '@mui/material'
import '../styles/global.css'
import { defaultTheme } from '../common/themes/default'

function MantikApp({ Component, pageProps }: AppProps) {
    const [queryClient] = React.useState(() => new QueryClient())
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={defaultTheme}>
                <CssBaseline />
                <MainLayout>
                    <Component {...pageProps} />
                </MainLayout>
                <ReactQueryDevtools initialIsOpen={false} />
            </ThemeProvider>
        </QueryClientProvider>
    )
}

export default MantikApp
