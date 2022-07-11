import { createContext, useState } from 'React'

const SearchParamerterContext = createContext({})

interface SearchParameterProviderProps {
    children: React.ReactNode
}
export const SearchParameterProvider: React.FC<SearchParameterProviderProps> = (
    props
) => {
    const [searchString, setSearchString] = useState('')

    return (
        <SearchParamerterContext.Provider
            value={{ searchString, setSearchString }}
        >
            {props.children}
        </SearchParamerterContext.Provider>
    )
}
