import React from 'react'
import { Box, Chip, useTheme } from '@mui/material'
import { Label } from '../queries'

interface LabelArrayProps {
    labels?: Label[]
}
export const LabelArray = (props: LabelArrayProps) => {
    const theme = useTheme()
    if (!props.labels) return null

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                p: theme.spacing(0.5),
            }}
            component="ul"
        >
            {props.labels.map((label) => {
                return (
                    <Box
                        p={theme.spacing(0.5)}
                        key={`${label.scope}-${label.name}`}
                    >
                        <Chip label={label.name} />
                    </Box>
                )
            })}
        </Box>
    )
}
