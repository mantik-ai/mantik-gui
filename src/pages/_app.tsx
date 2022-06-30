import React from 'react'
import type { AppProps } from 'next/app'
import MainLayout from '../common/layouts/MainLayout'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

function MyApp({ Component, pageProps }: AppProps) {
    const [queryClient] = React.useState(() => new QueryClient())
    return (
        <QueryClientProvider client={queryClient}>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}

export default MyApp
