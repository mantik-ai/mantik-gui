import React from 'react'
import type { NextPage } from 'next'
import { Box, useTheme } from '@mui/material'
import { SearchHeading } from '../../modules/projects_overview/components/SearchHeading'
import { SearchSideBar } from '../../modules/projects_overview/components/SearchSideBar'

const Projects: NextPage = () => {
    const theme = useTheme()
    return (
        <Box
            sx={{
                m: theme.spacing(4),
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <SearchHeading>Projects</SearchHeading>
            <Box sx={{ display: 'flex' }}>
                <Box flex={1}>
                    <SearchSideBar></SearchSideBar>
                </Box>
                <Box display="flex" flex={3} color={'blue'}></Box>
            </Box>
        </Box>
    )
}

export default Projects
