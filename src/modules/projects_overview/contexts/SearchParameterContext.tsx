import {
    createContext,
    Dispatch,
    SetStateAction,
    useEffect,
    useState,
} from 'react'

interface ProblemType {
    name: string
    active: boolean
}
export enum SortType {
    ALPHABETICAL,
    TEST,
}

export interface SearchParameters {
    sortType: SortType
    setSortType: Dispatch<SetStateAction<SortType>>

    searchString: string
    setSearchString: Dispatch<SetStateAction<string>>

    problemTypes: ProblemType[]
    setProblemType: (idx: number, value: boolean) => void
}

const SearchParamerterContext = createContext<Partial<SearchParameters>>({})

interface SearchParameterProviderProps {
    children: React.ReactNode
}
export const SearchParameterProvider: React.FC<SearchParameterProviderProps> = (
    props
) => {
    const [sortType, setSortType] = useState(SortType.ALPHABETICAL)
    const [searchString, setSearchString] = useState('')
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
