import { Adjust } from '@mui/icons-material'
import {
    Box,
    Divider,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Paper,
    useTheme,
} from '@mui/material'
import React from 'react'
import { Route } from '../../../common/types/route'

interface DetailsSideBarProps {
    id: string
}
export const DetailsSideBar = (props: DetailsSideBarProps) => {
    const routes: Route[] = [
        { name: 'Overview', path: props.id, icon: <Adjust /> },
        { name: 'Runs', path: props.id, icon: <Adjust /> },
    ]
    const bottomRoutes: Route[] = [
        { name: 'Overview', path: props.id, icon: <Adjust /> },
        { name: 'Runs', path: props.id, icon: <Adjust /> },
    ]
    const theme = useTheme()
    return (
        <Box
            sx={{
                flex: 1,
                p: theme.spacing(2),
            }}
        >
            <Paper
                sx={{
                    height: '100%',
                }}
            >
                <List
                    sx={{
                        height: '100%',
                    }}
                >
                    {routes.map((route) => (
                        <ListItemButton key={route.name}>
                            <ListItemIcon>{route.icon}</ListItemIcon>
                            <ListItemText>{route.name}</ListItemText>
                        </ListItemButton>
                    ))}
                    <Divider />
                    {bottomRoutes.map((route) => (
                        <ListItemButton key={route.name}>
                            <ListItemIcon>{route.icon}</ListItemIcon>
                            <ListItemText>{route.name}</ListItemText>
                        </ListItemButton>
                    ))}
                </List>
            </Paper>
        </Box>
    )
}
