import { AxiosResponse } from 'axios'
import getConfig from 'next/config'
import {
    createContext,
    Dispatch,
    SetStateAction,
    useEffect,
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

export interface SearchParameters {
    searchString: string
    setSearchString: Dispatch<SetStateAction<string>>

    problemTypes: ProblemType[]
    setProblemType: (idx: number, value: boolean) => void

    setSearchLabels: Dispatch<SetStateAction<Label[]>>

    projectsResultStatus: QueryStatus
    projectsResult:
        | AxiosResponse<GetProjectsUserUserIdSearch200, unknown>
        | undefined
}
const SearchParamerterContext = createContext<Partial<SearchParameters>>({})

interface SearchParameterProviderProps {
    children: React.ReactNode
}
export const SearchParameterProvider: React.FC<SearchParameterProviderProps> = (
    props
) => {
    const [searchString, setSearchString] = useState('')
    const debouncedSearchString = useDebounce(
        searchString,
        Number(publicRuntimeConfig.debounceTimerSearchQuery)
    )

    const [searchLabels, setSearchLabels] = useState<Label[]>([])
    const [problemTypes, setProblemTypes] = useState<ProblemType[]>([])

    const { data: problemTypeLabel } = useGetLabelsScope('problem-type')
    useEffect(() => {
        if (problemTypeLabel) {
            setProblemTypes(
                problemTypeLabel.data.labels?.map((label) => {
                    return { name: label.name, active: false } as ProblemType
                }) ?? []
            )
        }
    }, [problemTypeLabel])

    const {
        data: projectsResult,
        status: projectsResultStatus,
        refetch,
    } = useGetProjectsUserUserIdSearch(500, {
        searchString: debouncedSearchString,
        labels: [
            ...searchLabels,
            ...problemTypes
                .filter((pt) => pt.active)
                .map((pt) => ({
                    scope: 'problem-type',
                    name: pt.name,
                })),
        ],
    })

    const setProblemType = (idx: number, value: boolean) => {
        problemTypes[idx].active = value
        setProblemTypes(problemTypes)
        refetch().catch((e) => console.log(e))
    }

    return (
        <SearchParamerterContext.Provider
            value={{
                searchString,
                setSearchString,
                problemTypes,
                setProblemType,
                setSearchLabels,
                projectsResult,
                projectsResultStatus,
            }}
        >
            {props.children}
        </SearchParamerterContext.Provider>
    )
}

export default SearchParamerterContext
