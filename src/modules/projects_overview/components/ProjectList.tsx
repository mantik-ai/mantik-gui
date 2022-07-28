import { Stack, useTheme } from '@mui/material'
import React, { useContext } from 'react'
import { DataStateIndicator } from '../../../common/components/DataStateIndicator'
import { useGetProjectsUserUserIdSearch } from '../../../common/queries'
import SearchParamerterContext from '../contexts/SearchParameterContext'
import { ProjectEntry } from './ProjectEntry'

interface ProjectListProps {}
export const ProjectList = (props: ProjectListProps) => {
    const theme = useTheme()
    const searchParameterContext = useContext(SearchParamerterContext)
    const { data, error } = useGetProjectsUserUserIdSearch(500, {
        searchString: searchParameterContext.debouncedSearchString,
    })

    return (
        <DataStateIndicator
            data={data}
            error={error}
            text="Loading Projects..."
        >
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
