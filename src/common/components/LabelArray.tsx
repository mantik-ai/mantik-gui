import { Box, Chip, ListItem, Paper, useTheme } from '@mui/material'
import React from 'react'
import { Label } from '../queries'

interface LabelArrayProps {
    labels: Label[]
}
export const LabelArray = (props: LabelArrayProps) => {
    const theme = useTheme()
    return (
        <Paper
            sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                maxWidth: '33vw',
                p: 0.5,
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
        </Paper>
    )
}
