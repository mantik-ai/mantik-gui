import { Public } from '@mui/icons-material'
import { Stack, Typography, useTheme } from '@mui/material'
import React, { useContext } from 'react'
import { DataStateIndicator } from '../../../common/components/DataStateIndicator'
import { Spacing } from '../../../common/components/Spacing'
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
                <Stack
                    direction="row"
                    justifyContent="center"
                    color={theme.palette.text.primary}
                >
                    <Stack justifyContent="center">
                        <Public></Public>
                    </Stack>
                    <Spacing horizontal value={theme.spacing(0.5)}></Spacing>
                    <Typography variant="h6">
                        Search through all project accessible to you.
                    </Typography>
                </Stack>
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
