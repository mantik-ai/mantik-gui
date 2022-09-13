import * as React from 'react'

type Action = { type: 'increment' } | { type: 'decrement' }
type Dispatch = (action: Action) => void
type State = {
    projectName: string
    projectDescription: string
}
type ProjectSettingsProviderProps = { children: React.ReactNode }

const ProjectSettingsContext = React.createContext<
    { state: State; dispatch: Dispatch } | undefined
>(undefined)

function ProjectSettings(state: State, action: Action) {
    switch (action.type) {
        case 'increment': {
            return { count: state.count + 1 }
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

function ProjectSettingsProvider({ children }: ProjectSettingsProviderProps) {
    const [state, dispatch] = React.useReducer(ProjectSettings, { count: 0 })
    const value = { state, dispatch }
    return (
        <ProjectSettingsContext.Provider value={value}>
            {children}
        </ProjectSettingsContext.Provider>
    )
}

function useProjectSettings() {
    const context = React.useContext(ProjectSettingsContext)
    if (context === undefined) {
        throw new Error(
            'useProjectSettings must be used within a ProjectSettingsProvider'
        )
    }
    return context
}

export { ProjectSettingsProvider, useProjectSettings }
