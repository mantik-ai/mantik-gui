import { Add } from '@mui/icons-material'
import { Button, Paper, Toolbar, Typography, useTheme } from '@mui/material'
import React from 'react'

interface DetailsRunsTableToolbarProps {
    openDialog: () => void
}
export const DetailsRunsTableToolbar = (
    props: DetailsRunsTableToolbarProps
) => {
    const theme = useTheme()
    return (
        <Paper sx={{ p: theme.spacing(1) }}>
            <Toolbar>
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    Runs
                </Typography>
                <Button variant="text" onClick={() => props.openDialog()}>
                    <Add></Add>Add
                </Button>
            </Toolbar>
        </Paper>
    )
}
