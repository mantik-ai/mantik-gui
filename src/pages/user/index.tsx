import { Box, useTheme } from '@mui/material'
import React from 'react'
import { PageHeading } from '../../modules/projects_overview/components/SearchHeading'
import { UserSideBar } from '../../modules/user/UserSideBar'
import { NextPageWithNestedLayout } from '../_app'

const UserSettings: NextPageWithNestedLayout = () => {
    const theme = useTheme()
    return (
        <Box
            sx={{
                m: theme.spacing(4),
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <PageHeading description="Search through all project accessible to you.">
                User Settings
            </PageHeading>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                }}
            >
                <Box flex={1}>
                    <UserSideBar></UserSideBar>
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
                    <></>
                </Box>
            </Box>
        </Box>
    )
}

export default UserSettings
