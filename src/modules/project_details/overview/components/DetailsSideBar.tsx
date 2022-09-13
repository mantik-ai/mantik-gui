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
} from '@mui/icons-material'
import {
    AccordionDetails,
    AccordionSummary,
    Box,
    Divider,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Paper,
    Stack,
    Typography,
    useTheme,
} from '@mui/material'
import Accordion from '@mui/material/Accordion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Route } from '../../../../common/types/route'

export const DetailsSideBar = () => {
    const router = useRouter()
    const { id } = router.query
    const activeRoute = router.pathname.split('/').at(-1)
    const theme = useTheme()
    const [expanded, setExpanded] = React.useState<string | false>(false)
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
            }}
        >
            <Paper sx={{ height: '100%' }}>
                <List sx={{ height: '100%' }}>
                    {routes.map((route) => (
                        <Link
                            key={route.name}
                            href={`/projects/details/${route.path}`}
                        >
                            <ListItemButton
                                key={route.name}
                                selected={
                                    route.name.toLowerCase() === activeRoute ||
                                    (activeRoute === '[id]' &&
                                        route.name === 'Overview')
                                }
                            >
                                <ListItemIcon>{route.icon}</ListItemIcon>
                                <ListItemText>{route.name}</ListItemText>
                            </ListItemButton>
                        </Link>
                    ))}
                    <Divider />
                    <Accordion
                        sx={{
                            '&:before': {
                                display: 'none',
                            },
                        }}
                        disableGutters
                        elevation={0}
                        expanded={expanded === 'settings'}
                        onChange={handleChange('settings')}
                    >
                        <AccordionSummary expandIcon={<ExpandMore />}>
                            <Stack direction={'row'}>
                                <SettingsOutlined
                                    sx={{
                                        color: '#808080',
                                        marginRight: '32px',
                                    }}
                                />
                                <Typography color={'#252525'}>
                                    Settings
                                </Typography>
                            </Stack>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List>
                                {settingRoutes.map((route) => (
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
                                            <Typography
                                                sx={{
                                                    color: '#808080',
                                                    marginRight: '24px',
                                                    marginLeft: '20px',
                                                }}
                                            >
                                                -
                                            </Typography>
                                            <ListItemText>
                                                {route.name}
                                            </ListItemText>
                                        </ListItemButton>
                                    </Link>
                                ))}
                            </List>
                        </AccordionDetails>
                    </Accordion>
                    <Divider />
                </List>
            </Paper>
        </Box>
    )
}
