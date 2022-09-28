import { Stack, useTheme } from '@mui/material'
import React from 'react'
import { DataStateIndicator } from '../../../common/components/DataStateIndicator'
import { useSearchParameterContext } from '../contexts/SearchParameterContext'
import { ProjectCard } from './ProjectCard'

export const ProjectList = () => {
    const theme = useTheme()
    const searchParameterContext = useSearchParameterContext()

    return (
        <DataStateIndicator
            status={searchParameterContext.state.projectsQueryStatus}
            text="Loading Projects..."
        >
            <Stack spacing={theme.spacing(2)}>
                {searchParameterContext.state.projectsQuery?.data.projects?.map(
                    (project) => (
                        <ProjectCard
                            key={project.projectId}
                            project={project}
                        ></ProjectCard>
                    )
                )}
            </Stack>
        </DataStateIndicator>
    )
}
