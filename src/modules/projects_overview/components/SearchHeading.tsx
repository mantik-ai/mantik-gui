import { Box, Divider, Typography } from '@mui/material'
import { useTheme } from '@mui/system'
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
            <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
                <Typography variant="h4" gutterBottom>
                    {props.children}
                </Typography>
                <Spacing horizontal value={theme.spacing(2)}></Spacing>

                <Typography variant="body1">{props.description}</Typography>
            </Box>
            <Divider />
        </Box>
    )
}
