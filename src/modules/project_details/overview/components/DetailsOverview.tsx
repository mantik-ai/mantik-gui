import { Box, Paper, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'

interface DetailsOverviewProps {}
export const DetailsOverview = (props: DetailsOverviewProps) => {
    const router = useRouter()
    const { id } = router.query

    return (
        <Paper sx={{ height: '100%', width: '100%' }}>
            <Box
                display="flex"
                height="100%"
                flexDirection="column"
                justifyContent="center"
            >
                <Typography align="center">ProjectID: {id}</Typography>
            </Box>
        </Paper>
    )
}
