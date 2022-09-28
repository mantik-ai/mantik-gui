import { AxiosResponse } from 'axios'
import getConfig from 'next/config'
import { createContext, useContext, useEffect, useReducer } from 'react'
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
    | { type: 'setProblemType'; payload: { idx: number; value: boolean } }
    | { type: 'setAllProblemTypes'; payload: Label[] }
    | {
          type: 'setSearchLabels'
          payload: Label[]
      }
    | {
          type: 'setProjectsQueryResult'
          payload: AxiosResponse<GetProjectsUserUserIdSearch200, unknown>
      }
    | {
          type: 'setProjectsQueryStatus'
          payload: QueryStatus
      }
type Dispatch = (action: Action) => void

export interface SearchParameters {
    searchString: string
    searchLabels: Label[]
    problemTypes: ProblemType[]
    projectsQueryStatus?: QueryStatus
    projectsQuery?: AxiosResponse<GetProjectsUserUserIdSearch200, unknown>
}

const SearchParamerterContext = createContext<
    { state: SearchParameters; dispatch: Dispatch } | undefined
>(undefined)

const reducer = (state: SearchParameters, action: Action): SearchParameters => {
    switch (action.type) {
        case 'setSearchString':
            return { ...state, searchString: action.payload }
        case 'setAllProblemTypes':
            return {
                ...state,
                problemTypes: action.payload.map(
                    (l) => ({ name: l.name, active: false } as ProblemType)
                ),
            }
        case 'setProblemType':
            state.problemTypes[action.payload.idx].active = action.payload.value
            return { ...state }
        case 'setSearchLabels':
            return { ...state, searchLabels: action.payload }
        case 'setProjectsQueryStatus':
            return { ...state, projectsQueryStatus: action.payload }
        case 'setProjectsQueryResult':
            return { ...state, projectsQuery: action.payload }
    }
}
interface SearchParameterProviderProps {
    children: React.ReactNode
}
const SearchParameterProvider: React.FC<SearchParameterProviderProps> = (
    props
) => {
    const [state, dispatch] = useReducer(reducer, {
        searchString: '',
        problemTypes: [],
        searchLabels: [],
    })
    const debouncedSearchString = useDebounce(
        state.searchString,
        Number(publicRuntimeConfig.debounceTimerSearchQuery)
    )

    const { data: projectsResult, status: projectsResultStatus } =
        useGetProjectsUserUserIdSearch('c9de9883-5efc-4b4d-b156-9fe5acce8975', {
            searchString: debouncedSearchString,
            labels: [
                ...state.searchLabels,
                ...state.problemTypes
                    .filter((pt) => pt.active)
                    .map((pt) => ({
                        scope: 'problem-type',
                        name: pt.name,
                    })),
            ],
        }) //TODO: set userid programmatically
    const { data: problemTypeLabel } = useGetLabelsScope('problem-type')
    useEffect(() => {
        if (problemTypeLabel && problemTypeLabel.data.labels) {
            dispatch({
                type: 'setAllProblemTypes',
                payload: problemTypeLabel.data.labels,
            })
        }
    }, [problemTypeLabel])

    useEffect(() => {
        if (projectsResult) {
            dispatch({
                type: 'setProjectsQueryResult',
                payload: projectsResult,
            })
        }
    }, [projectsResult])
    useEffect(() => {
        dispatch({
            type: 'setProjectsQueryStatus',
            payload: projectsResultStatus,
        })
    }, [projectsResultStatus])

    const value = { state, dispatch }
    return (
        <SearchParamerterContext.Provider value={value}>
            {props.children}
        </SearchParamerterContext.Provider>
    )
}

function useSearchParameterContext() {
    const context = useContext(SearchParamerterContext)
    if (context === undefined) {
        throw new Error('useCount must be used within a CountProvider')
    }
    return context
}

export { SearchParameterProvider, useSearchParameterContext }
