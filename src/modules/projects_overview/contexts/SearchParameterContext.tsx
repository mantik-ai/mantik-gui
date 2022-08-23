import getConfig from 'next/config'
import {
    createContext,
    Dispatch,
    SetStateAction,
    useEffect,
    useState,
} from 'react'
import useDebounce from '../../../common/hooks/useDebounce'
import { Label } from '../../../common/queries'

interface ProblemType {
    name: string
    active: boolean
}

export interface SearchParameters {
    searchString: string
    debouncedSearchString: string
    setSearchString: Dispatch<SetStateAction<string>>

    problemTypes: ProblemType[]
    setProblemType: (idx: number, value: boolean) => void

    searchLabels: Label[]
}
const SearchParamerterContext = createContext<Partial<SearchParameters>>({})

interface SearchParameterProviderProps {
    children: React.ReactNode
}

const { publicRuntimeConfig } = getConfig()
export const SearchParameterProvider: React.FC<SearchParameterProviderProps> = (
    props
) => {
    const [searchString, setSearchString] = useState('')

    const [searchLabels, setSearchLabels] = useState<Label[]>([])

    const debouncedSearchString = useDebounce(
        searchString,
        publicRuntimeConfig.debounceTimerSearchQuery
    )
    const [problemTypes, setProblemTypes] = useState<ProblemType[]>([])
    useEffect(() => {
        setProblemTypes([
            { name: 'Regression', active: false },
            { name: 'Classification', active: false },
        ])
    }, [])

    const setProblemType = (idx: number, value: boolean) => {
        problemTypes[idx].active = value
        if (value) {
            setSearchLabels([...searchLabels])
        }
        setProblemTypes((_) => [...problemTypes])
    }
    return (
        <SearchParamerterContext.Provider
            value={{
                searchString,
                debouncedSearchString,
                setSearchString,
                problemTypes,
                setProblemType,
                searchLabels,
            }}
        >
            {props.children}
        </SearchParamerterContext.Provider>
    )
}

export default SearchParamerterContext
