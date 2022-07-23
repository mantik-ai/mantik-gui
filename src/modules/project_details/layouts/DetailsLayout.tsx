import { Box, useTheme } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import { DetailsSideBar } from '../components/DetailsSideBar'

interface DetailsLayoutProps {
    children: React.ReactNode
}
export const DetailsLayout = (props: DetailsLayoutProps) => {
    const theme = useTheme()
    const router = useRouter()
    const { id } = router.query
    return (
        <Box sx={{ display: 'flex', height: '100vh' }}>
            <DetailsSideBar
                id={typeof id === 'string' ? id : ''}
            ></DetailsSideBar>

            <Box sx={{ display: 'flex', flex: 4, p: theme.spacing(2) }}>
                {props.children}
            </Box>
        </Box>
    )
}
