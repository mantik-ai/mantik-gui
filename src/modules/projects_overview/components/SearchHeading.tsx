import { Box, Divider, Typography, useTheme } from '@mui/material'
import React from 'react'
import { Spacing } from '../../../common/components/Spacing'

interface SearchHeadingProps {
    children: React.ReactNode
    description: string
}
export const SearchHeading = (props: SearchHeadingProps) => {
    const theme = useTheme()
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'baseline',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'center',
                }}
            >
                <Typography variant="h2" gutterBottom>
                    {props.children}
                </Typography>
                <Spacing horizontal value={theme.spacing(2)}></Spacing>
                <Typography variant="h5">{props.description}</Typography>
            </Box>
            <Divider />
        </Box>
    )
}
