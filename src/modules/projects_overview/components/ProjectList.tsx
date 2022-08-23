import { Stack, useTheme } from '@mui/material'
import React, { useContext } from 'react'
import { DataStateIndicator } from '../../../common/components/DataStateIndicator'
import { useGetProjectsUserUserIdSearch } from '../../../common/queries'
import SearchParamerterContext from '../contexts/SearchParameterContext'
import { ProjectEntry } from './ProjectEntry'

export const ProjectList = () => {
    const theme = useTheme()
    const searchParameterContext = useContext(SearchParamerterContext)
    const { data, status } = useGetProjectsUserUserIdSearch(500, {
        searchString: searchParameterContext.debouncedSearchString,
        labels: searchParameterContext.searchLabels,
    })

    return (
        <DataStateIndicator status={status} text="Loading Projects...">
            <Stack spacing={theme.spacing(2)}>
                {data?.data.projects?.map((project) => (
                    <ProjectEntry
                        key={project.projectId}
                        project={project}
                    ></ProjectEntry>
                ))}
            </Stack>
        </DataStateIndicator>
    )
}
