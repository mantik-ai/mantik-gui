import { Box, Divider, Typography, useTheme } from '@mui/material'
import React from 'react'
import { Spacing } from '../../../common/components/Spacing'

interface PageHeadingProps {
    children: React.ReactNode
    description: string
}
export const PageHeading = (props: PageHeadingProps) => {
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
                }}
            >
                <Typography variant="h2" fontWeight={600} gutterBottom>
                    {props.children}
                </Typography>
                <Spacing horizontal value={theme.spacing(2)}></Spacing>
            </Box>
            <Divider />
        </Box>
    )
}
