import { Stack, useTheme } from '@mui/material'
import React, { useContext } from 'react'
import { DataStateIndicator } from '../../../common/components/DataStateIndicator'
import SearchParamerterContext from '../contexts/SearchParameterContext'
import { ProjectCard } from './ProjectCard'

export const ProjectList = () => {
    const theme = useTheme()
    const searchParameterContext = useContext(SearchParamerterContext)

    return (
        <DataStateIndicator
            status={searchParameterContext.projectsResultStatus!}
            text="Loading Projects..."
        >
            <Stack spacing={theme.spacing(2)}>
                {searchParameterContext.projectsResult?.data.projects?.map(
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
