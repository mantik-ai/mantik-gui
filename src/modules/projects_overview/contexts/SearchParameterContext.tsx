import { AxiosResponse } from 'axios'
import getConfig from 'next/config'
import {
    createContext,
    Dispatch,
    SetStateAction,
    useEffect,
    useReducer,
    useState,
} from 'react'
import { QueryStatus } from 'react-query'
import useDebounce from '../../../common/hooks/useDebounce'
import {
    GetProjectsUserUserIdSearch200,
    Label,
    useGetLabelsScope,
    useGetProjectsUserUserIdSearch,
} from '../../../common/queries'

const { publicRuntimeConfig } = getConfig()

interface ProblemType {
    name: string
    active: boolean
}

type Action =
    | { type: 'setSearchString'; payload: string }
    | { type: 'decrement' }
type Dispatch = (action: Action) => void

export interface SearchParameters {
    searchString: string
    problemTypes: ProblemType[]
    projectsResultStatus: QueryStatus
    projectsResult:
        | AxiosResponse<GetProjectsUserUserIdSearch200, unknown>
        | undefined
}

const SearchParamerterContext = createContext<
    { state: SearchParameters; dispatch: Dispatch } | undefined
>(undefined)

const reducer: Dispatch = (action: Action, state: SearchParameters) => {}
interface SearchParameterProviderProps {
    children: React.ReactNode
}
const SearchParameterProvider: React.FC<SearchParameterProviderProps> = (
    props
) => {
    const [state, dispatch] = useReducer<Dispatch, SearchParameters>(reducer, {
        searchString: '',
        problemTypes,
    })

    const value = { state, dispatch }
    return (
        <SearchParamerterContext.Provider value={value}>
            {props.children}
        </SearchParamerterContext.Provider>
    )
}

export { SearchParameterProvider }
