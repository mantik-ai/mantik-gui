import { Box, CircularProgress, Paper, Typography } from '@mui/material'
import React from 'react'

interface DataStateIndicatorProps {
    status: 'error' | 'loading' | 'idle' | 'success'
    usePaper?: boolean
    text: string
    children: React.ReactNode
}
export const DataStateIndicator = (props: DataStateIndicatorProps) => {
    const content = (
        <>
            {props.status === 'error' ? (
                <Typography variant="body1">Error</Typography>
            ) : (
                <>
                    <Typography variant="body1">{props.text}</Typography>
                    <CircularProgress />
                </>
            )}
        </>
    )

    const styling = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    }

    if (props.status !== 'success') {
        return (
            <>
                {props.usePaper ? (
                    <Paper sx={styling}>{content}</Paper>
                ) : (
                    <Box sx={styling}>{content}</Box>
                )}
            </>
        )
    }
    return <>{props.children}</>
}
