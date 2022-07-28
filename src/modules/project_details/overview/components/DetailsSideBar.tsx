import {
    Adjust,
    Code,
    Dashboard,
    DirectionsRun,
    Settings,
} from '@mui/icons-material'
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
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Route } from '../../../../common/types/route'

interface DetailsSideBarProps {}
export const DetailsSideBar = (props: DetailsSideBarProps) => {
    const router = useRouter()
    const { id } = router.query
    const activeRoute = router.pathname.split('/').at(-1)

    const routes: Route[] = [
        { name: 'Overview', path: `${id}`, icon: <Adjust /> },
        { name: 'Runs', path: `${id}/runs`, icon: <DirectionsRun /> },
        {
            name: 'Experiments',
            path: `${id}/experiments`,
            icon: <Dashboard />,
        },
        { name: 'Code', path: `${id}/code`, icon: <Code /> },
        { name: 'DIVIDER', path: '', icon: null },
        { name: 'Settings', path: `${id}/settings`, icon: <Settings /> },
    ]
    const bottomRoutes: Route[] = []
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
                    {routes.map((route) =>
                        route.name !== 'DIVIDER' ? (
                            <Link
                                key={route.name}
                                href={`/projects/details/${route.path}`}
                            >
                                <ListItemButton
                                    key={route.name}
                                    selected={
                                        route.name.toLowerCase() ===
                                            activeRoute ||
                                        (activeRoute === '[id]' &&
                                            route.name === 'Overview')
                                    }
                                >
                                    <ListItemIcon>{route.icon}</ListItemIcon>
                                    <ListItemText>{route.name}</ListItemText>
                                </ListItemButton>
                            </Link>
                        ) : (
                            <Divider key={route.name} />
                        )
                    )}
                    <Divider />
                </List>
            </Paper>
        </Box>
    )
}
