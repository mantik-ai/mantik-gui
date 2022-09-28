import React from 'react'
import type { NextPage } from 'next'
import { Box, useTheme } from '@mui/material'
import { SearchSideBar } from '../../modules/projects_overview/components/SearchSideBar'
import { ProjectList } from '../../modules/projects_overview/components/ProjectList'
import { PageHeading } from '../../modules/projects_overview/components/SearchHeading'
import { SearchParameterProvider } from '../../modules/projects_overview/contexts/SearchParameterContext'

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
                <PageHeading description="Search through all project accessible to you.">
                    Projects
                </PageHeading>
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
                            p: 4,
                            pr: 0,
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
