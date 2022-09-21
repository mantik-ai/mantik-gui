import {
    Code,
    DirectionsRun,
    SettingsOutlined,
    ScienceOutlined,
    DatasetOutlined,
    AssignmentOutlined,
    ModelTrainingOutlined,
    OnlinePredictionOutlined,
    ExpandMore,
    ExpandLess,
} from '@mui/icons-material'
import {
    Box,
    Collapse,
    Divider,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Paper,
    useTheme,
} from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import { Route } from '../../../../common/types/route'
import SideBarItem from './SideBarItem'

export const DetailsSideBar = () => {
    const router = useRouter()
    const { id } = router.query
    const activeRoute = router.pathname.split('/').at(-1)
    const theme = useTheme()
    const [expanded, setExpanded] = React.useState<string | false>(false)
    const [open, setOpen] = React.useState(true)

    const handleClick = () => {
        setOpen(!open)
    }
    const handleChange =
        (panel: string) =>
        (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false)
        }

    const routes: Route[] = [
        {
            name: 'Overview',
            path: `${id}`,
            icon: <AssignmentOutlined />,
        },
        {
            name: 'Code',
            path: `${id}/code`,
            icon: <Code />,
        },
        {
            name: 'Data',
            path: `${id}/data`,
            icon: <DatasetOutlined />,
        },
        {
            name: 'Models',
            path: `${id}/models`,
            icon: <OnlinePredictionOutlined />,
        },
        {
            name: 'Train a Model',
            path: `${id}/train`,
            icon: <ModelTrainingOutlined />,
        },
        {
            name: 'Runs',
            path: `${id}/runs`,
            icon: <DirectionsRun />,
        },
        {
            name: 'Experiments',
            path: `${id}/experiments`,
            icon: <ScienceOutlined />,
        },
    ]

    const settingRoutes: Route[] = [
        {
            name: 'Project',
            path: `${id}/settings`,
        },
        {
            name: 'Code Repository',
            path: `${id}/code/settings`,
        },
        {
            name: 'Data Repository',
            path: `${id}/data/settings`,
        },
    ]

    const bottomRoutes: Route[] = []

    return (
        <Box
            sx={{
                flex: 1,
                p: theme.spacing(2),
                minWidth: 300,
            }}
        >
            <Paper sx={{ height: '100%' }}>
                <List sx={{ height: '100%' }}>
                    {routes.map((route) => (
                        <SideBarItem
                            key={route.path}
                            name={route.name}
                            path={`/projects/details/${route.path}`}
                            icon={route.icon}
                        />
                    ))}
                    <Divider />
                    <ListItemButton onClick={handleClick}>
                        <ListItemIcon>
                            <SettingsOutlined />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {settingRoutes.map((route) => (
                                <SideBarItem
                                    key={route.path}
                                    name={route.name}
                                    icon={<></>}
                                    path={`/projects/details/${route.path}`}
                                />
                            ))}
                        </List>
                    </Collapse>
                    <Divider />
                </List>
            </Paper>
        </Box>
    )
}
