import {
    DirectionsRun,
    SettingsOutlined,
    ExpandMore,
    ExpandLess,
    AccountBoxOutlined,
    PreviewOutlined,
    AttachMoneyOutlined,
    EmailOutlined,
    GroupOutlined,
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
import React from 'react'
import { Route } from '../../common/types/route'
import SideBarItem from '../project_details/overview/components/SideBarItem'

export const UserSideBar = () => {
    const theme = useTheme()
    const [open, setOpen] = React.useState(true)

    const handleClick = () => {
        setOpen(!open)
    }
    const routes: Route[] = [
        {
            name: 'Overview',
            path: `user/overview`,
            icon: <PreviewOutlined />,
        },
        {
            name: 'Profile',
            path: `user/profile`,
            icon: <AccountBoxOutlined />,
        },
        {
            name: 'Account',
            path: `user/account`,
            icon: <DirectionsRun />,
        },
        {
            name: 'Billing',
            path: `user/billing`,
            icon: <AttachMoneyOutlined />,
        },
        {
            name: 'Email',
            path: `user/email`,
            icon: <EmailOutlined />,
        },
        {
            name: 'Organizations',
            path: `user/organizations`,
            icon: <GroupOutlined />,
        },
    ]

    const settingRoutes: Route[] = [
        {
            name: 'Project',
            path: `settings`,
        },
        {
            name: 'Code Repository',
            path: 'setings',
        },
        {
            name: 'Data Repository',
            path: `settings`,
        },
    ]

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
                            path={`${route.path}`}
                            icon={route.icon}
                        />
                    ))}
                    <Divider />
                </List>
            </Paper>
        </Box>
    )
}
