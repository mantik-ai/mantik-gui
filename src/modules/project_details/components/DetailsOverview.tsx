import { Box, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'

interface DetailsOverviewProps {}
export const DetailsOverview = (props: DetailsOverviewProps) => {
    const router = useRouter()
    const { id } = router.query

    return (
        <Box>
            <Typography align="center">{id}</Typography>
        </Box>
    )
}
