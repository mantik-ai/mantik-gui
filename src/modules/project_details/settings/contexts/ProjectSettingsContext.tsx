import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {
    ProjectSettings,
    useGetProjectsProjectId,
} from '../../../../common/queries'

const ProjectSettingsContext = createContext<ProjectSettings>({})

interface ProjectSettingsProviderProps {
    children: React.ReactNode
}

export const ProjectSettingsProvider: React.FC<ProjectSettingsProviderProps> = (
    props
) => {
    const [projectSettings, setProjectSettings] = useState<
        ProjectSettings | undefined
    >()

    const router = useRouter()
    const { id } = router.query
    const { data, status } = useGetProjectsProjectId(id as string)

    useEffect(() => {
        setProjectSettings(data?.data)
    }, [data])

    return (
        <ProjectSettingsContext.Provider
            value={{
                ...projectSettings,
            }}
        >
            {props.children}
        </ProjectSettingsContext.Provider>
    )
}

export default ProjectSettingsContext
