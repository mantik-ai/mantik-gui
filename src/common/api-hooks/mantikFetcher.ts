import { MantikContext } from './mantikContext'

const baseUrl = 'https://api.server.test/v1'

export type ErrorWrapper<TError> =
    | TError
    | { status: 'unknown'; payload: string }

export type MantikFetcherOptions<TBody, THeaders, TQueryParams, TPathParams> = {
    url: string
    method: string
    body?: TBody
    headers?: THeaders
    queryParams?: TQueryParams
    pathParams?: TPathParams
} & MantikContext['fetcherOptions']

export async function mantikFetch<
    TData,
    TError,
    TBody extends {} | undefined | null,
    THeaders extends {},
    TQueryParams extends {},
    TPathParams extends {}
>({
    url,
    method,
    body,
    headers,
    pathParams,
    queryParams,
}: MantikFetcherOptions<
    TBody,
    THeaders,
    TQueryParams,
    TPathParams
>): Promise<TData> {
    try {
        const response = await window.fetch(
            `${baseUrl}${resolveUrl(url, queryParams, pathParams)}`,
            {
                method: method.toUpperCase(),
                body: body ? JSON.stringify(body) : undefined,
                headers: {
                    'Content-Type': 'application/json',
                    ...headers,
                },
            }
        )
        if (!response.ok) {
            let error: ErrorWrapper<TError>
            try {
                error = await response.json()
            } catch (e) {
                error = {
                    status: 'unknown' as const,
                    payload:
                        e instanceof Error
                            ? `Unexpected error (${e.message})`
                            : 'Unexpected error',
                }
            }

            throw error
        }

        return await response.json()
    } catch (e) {
        throw {
            status: 'unknown' as const,
            payload:
                e instanceof Error
                    ? `Network error (${e.message})`
                    : 'Network error',
        }
    }
}

const resolveUrl = (
    url: string,
    queryParams: Record<string, string> = {},
    pathParams: Record<string, string> = {}
) => {
    let query = new URLSearchParams(queryParams).toString()
    if (query) query = `?${query}`
    return (
        url.replace(/\{\w*\}/g, (key) => pathParams[key.slice(1, -1)]) + query
    )
}
