import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const Navbar = (props: {}) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton></IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    MantikAI
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
