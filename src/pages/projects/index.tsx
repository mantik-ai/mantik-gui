import React from 'react'
import type { NextPage } from 'next'
import { Box, useTheme } from '@mui/material'
import { SearchHeading } from '../../modules/projects_overview/components/SearchHeading'
import { SearchSideBar } from '../../modules/projects_overview/components/SearchSideBar'
import { SearchParameterProvider } from '../../modules/projects_overview/contexts/SearchParameterContext'
import { ProjectList } from '../../modules/projects_overview/components/ProjectList'

const Projects: NextPage = () => {
    const theme = useTheme()
    return (
        <SearchParameterProvider>
            <Box
                sx={{
                    m: theme.spacing(4),
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <SearchHeading description="Search through all project accessible to you.">
                    Project Overview
                </SearchHeading>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                    }}
                >
                    <Box flex={1}>
                        <SearchSideBar></SearchSideBar>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            padding: {
                                sx: theme.spacing(2),
                                md: theme.spacing(4),
                            },
                        }}
                        flex={3}
                        color={'blue'}
                    >
                        <ProjectList></ProjectList>
                    </Box>
                </Box>
            </Box>
        </SearchParameterProvider>
    )
}

export default Projects
