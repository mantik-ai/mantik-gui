import {
    Box,
    CircularProgress,
    Stack,
    Typography,
    useTheme,
} from '@mui/material'
import React, { useContext } from 'react'
import { Spacing } from '../../../common/components/Spacing'
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

    if (!data) {
        return (
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                {error ? (
                    <Typography variant="body1">Error</Typography>
                ) : (
                    <>
                        <Typography variant="body1">
                            Loading projects...
                        </Typography>
                        <Spacing value={theme.spacing(4)}></Spacing>
                        <CircularProgress />
                    </>
                )}
            </Box>
        )
    }

    return (
        <Stack spacing={theme.spacing(2)}>
            {data?.data.map((project) => (
                <ProjectEntry
                    key={project.projectId}
                    project={project}
                ></ProjectEntry>
            ))}
        </Stack>
    )
}
