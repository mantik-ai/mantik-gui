import React from 'react'
import { Box, useTheme } from '@mui/material'
import { PageHeading } from '../../projects_overview/components/SearchHeading'
import { UserSideBar } from '../UserSideBar'

interface UserSettingsLayoutProps {
    children: React.ReactNode
    title: string
}
export const UserSettingsLayout = (props: UserSettingsLayoutProps) => {
    const theme = useTheme()
    return (
        <Box
            sx={{
                m: theme.spacing(4),
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <PageHeading description="">{props.title}</PageHeading>
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
                    {props.children}
                </Box>
            </Box>
        </Box>
    )
}
