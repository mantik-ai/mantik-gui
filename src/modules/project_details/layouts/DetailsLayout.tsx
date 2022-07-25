import React from 'react'
import { Box, useTheme } from '@mui/material'
import { DetailsSideBar } from '../overview/components/DetailsSideBar'

interface DetailsLayoutProps {
    children: React.ReactNode
}
export const DetailsLayout = (props: DetailsLayoutProps) => {
    const theme = useTheme()
    return (
        <Box sx={{ display: 'flex', height: '100vh' }}>
            <DetailsSideBar></DetailsSideBar>
            <Box
                sx={{
                    flex: 4,
                    height: '100%',
                    p: theme.spacing(2),
                }}
            >
                {props.children}
            </Box>
        </Box>
    )
}
