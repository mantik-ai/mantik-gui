import { Paper, Toolbar, Typography, useTheme } from '@mui/material'
import React from 'react'
import { useRouter } from 'next/router'
import { useGetProjectsProjectId } from '../queries'

export const DetailsToolbar = ({ title = '', tool = <></> }) => {
    const theme = useTheme()
    const router = useRouter()
    const { id } = router.query
    const { data } = useGetProjectsProjectId(id as string)

    return (
        <Paper sx={{ p: theme.spacing(1) }}>
            <Toolbar>
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    {data?.data.name} - <b>{title}</b>
                </Typography>
                {tool}
            </Toolbar>
        </Paper>
    )
}
