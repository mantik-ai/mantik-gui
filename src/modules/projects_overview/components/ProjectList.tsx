import {
    Box,
    CircularProgress,
    List,
    Typography,
    useTheme,
} from '@mui/material'
import React from 'react'
import { Spacing } from '../../../common/components/Spacing'
import { useGetProjectsUserUserId } from '../../../common/queries'
import { ProjectEntry } from './ProjectEntry'

interface ProjectListProps {}
export const ProjectList = (props: ProjectListProps) => {
    const theme = useTheme()
    const { data, error } = useGetProjectsUserUserId(500)

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
        <List>
            {data?.data.map((project) => (
                <Box key={project.projectId}>
                    <ProjectEntry project={project}></ProjectEntry>
                    <Spacing value={theme.spacing(2)} />
                </Box>
            ))}
        </List>
    )
}
