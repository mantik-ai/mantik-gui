import getConfig from 'next/config'
import {
    createContext,
    Dispatch,
    SetStateAction,
    useEffect,
    useState,
} from 'react'
import useDebounce from '../../../common/hooks/useDebounce'

interface ProblemType {
    name: string
    active: boolean
}
export enum SortType {
    ALPHABETICAL,
    BY_POPULARITY,
}

export interface SearchParameters {
    sortType: SortType
    setSortType: Dispatch<SetStateAction<SortType>>

    searchString: string
    debouncedSearchString: string
    setSearchString: Dispatch<SetStateAction<string>>

    problemTypes: ProblemType[]
    setProblemType: (idx: number, value: boolean) => void
}
const SearchParamerterContext = createContext<Partial<SearchParameters>>({})

interface SearchParameterProviderProps {
    children: React.ReactNode
}

const { publicRuntimeConfig } = getConfig()
export const SearchParameterProvider: React.FC<SearchParameterProviderProps> = (
    props
) => {
    const [sortType, setSortType] = useState(SortType.ALPHABETICAL)
    const [searchString, setSearchString] = useState('')

    const debouncedSearchString = useDebounce(
        searchString,
        publicRuntimeConfig.debounceTimerSearchQuery
    )
    const [problemTypes, setProblemTypes] = useState<ProblemType[]>([])
    useEffect(() => {
        setSortType(SortType.ALPHABETICAL)
        setProblemTypes([
            { name: 'Regression', active: false },
            { name: 'Classification', active: false },
        ])
    }, [])

    const setProblemType = (idx: number, value: boolean) => {
        problemTypes[idx].active = value
        setProblemTypes((_) => [...problemTypes])
    }
    return (
        <SearchParamerterContext.Provider
            value={{
                sortType,
                setSortType,
                searchString,
                debouncedSearchString,
                setSearchString,
                problemTypes,
                setProblemType,
            }}
        >
            {props.children}
        </SearchParamerterContext.Provider>
    )
}

export default SearchParamerterContext
