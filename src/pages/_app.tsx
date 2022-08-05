import React, { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { SessionProvider } from 'next-auth/react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import axios from 'axios'
import getConfig from 'next/config'
import MainLayout from '../common/layouts/MainLayout'
import '../styles/global.css'
import { defaultTheme } from '../common/themes/default'
import '@fontsource/blinker/300.css'
import '@fontsource/blinker/400.css'
import '@fontsource/blinker/600.css'
import '@fontsource/blinker/700.css'

export type NextPageWithNestedLayout = NextPage & {
    getNestedLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithNestedLayout = AppProps & {
    Component: NextPageWithNestedLayout
}

const { publicRuntimeConfig } = getConfig()
axios.defaults.baseURL = publicRuntimeConfig.apiBaseUrl
console.log('dsfadfs')
console.log(process.env.NODE_ENV)

if (publicRuntimeConfig.mockDynamically) {
    axios.defaults.headers.common.dynamic = true
    axios.defaults.headers.common.Prefer = 'code=200, dynamic=true'
}

function MantikApp({
    Component,
    pageProps: { session, ...pageProps },
}: AppPropsWithNestedLayout) {
    const [queryClient] = React.useState(() => new QueryClient())
    const getNestedLayout = Component.getNestedLayout ?? ((page) => page)
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={defaultTheme}>
                <SessionProvider session={session}>
                    <CssBaseline />
                    <MainLayout>
                        {getNestedLayout(<Component {...pageProps} />)}
                    </MainLayout>
                    <ReactQueryDevtools initialIsOpen={false} />
                </SessionProvider>
            </ThemeProvider>
        </QueryClientProvider>
    )
}

export default MantikApp
