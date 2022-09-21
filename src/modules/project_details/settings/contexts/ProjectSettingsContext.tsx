import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {
    Label,
    Project,
    ProjectMembersItem,
    ProjectUserGroupsItem,
    useGetProjectsProjectId,
    User,
} from '../../../../common/queries'

export interface ProjectSettingsParameters {
    settings?: Project
    setName: (x: string) => void
    setSummary: (x: string) => void
    setLabels: (x: Label[]) => void
    setIsPublic: (x: boolean) => void
    setUserGroups: (x: ProjectUserGroupsItem[]) => void
    setOwner: (x: User) => void
    setMembers: (x: ProjectMembersItem[]) => void
}

const ProjectSettingsContext = createContext<
    Partial<ProjectSettingsParameters>
>({})

interface ProjectSettingsProviderProps {
    children: React.ReactNode
}

export const ProjectSettingsProvider: React.FC<ProjectSettingsProviderProps> = (
    props
) => {
    const [settings, setSettings] = useState<Project | undefined>()

    const router = useRouter()
    const { id } = router.query
    const { data } = useGetProjectsProjectId(id as string, {
        query: { staleTime: Infinity, cacheTime: Infinity },
    })

    useEffect(() => {
        setSettings(data?.data)
    }, [data])

    const setName = (x: string) => {
        if (settings) {
            settings.name = x
            setSettings(settings)
        }
    }

    const setSummary = (x: string) => {
        if (settings) {
            settings.executiveSummary = x
            setSettings(settings)
        }
    }

    const setLabels = (x: Label[]) => {
        if (settings) {
            settings.labels = x
            setSettings(settings)
        }
    }

    const setIsPublic = (x: boolean) => {
        if (settings) {
            settings.public = x
            setSettings(settings)
        }
    }

    const setOwner = (x: User) => {
        if (settings) {
            settings.owner = x
            setSettings(settings)
        }
    }

    const setUserGroups = (x: ProjectUserGroupsItem[]) => {
        if (settings) {
            settings.userGroups = x
            setSettings(settings)
        }
    }

    const setMembers = (x: ProjectMembersItem[]) => {
        if (settings) {
            settings.members = x
            setSettings(settings)
        }
    }

    return (
        <ProjectSettingsContext.Provider
            value={{
                settings,
                setName,
                setSummary,
                setLabels,
                setIsPublic,
                setOwner,
                setUserGroups,
                setMembers,
            }}
        >
            {props.children}
        </ProjectSettingsContext.Provider>
    )
}

export default ProjectSettingsContext
