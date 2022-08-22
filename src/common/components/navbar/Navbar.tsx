import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import NotificationsIcon from '@mui/icons-material/Notifications'
import Link from 'next/link'
import { Badge, MenuItem, Stack } from '@mui/material'
import { NavbarProps } from '../../types/navbarProps'
import AccountMenu from '../AccountMenu'
import { useRouter } from 'next/router'

const drawerWidth = 240

export default function Navbar(props: NavbarProps) {
    const [mobileOpen, setMobileOpen] = React.useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography
                variant={'h2'}
                color="primary"
                style={{ cursor: 'pointer' }}
            >
                Mantik
            </Typography>
            <Divider />
            <List>
                {props.routes
                    .filter((route) => route.positions?.includes('drawer'))
                    .map((route) => (
                        <Link href={route.path} key={route.name}>
                            <MenuItem>
                                <Typography variant="h5" color="primary.dark">
                                    {route.name}
                                </Typography>
                            </MenuItem>
                        </Link>
                    ))}
            </List>
        </Box>
    )

    const router = useRouter()
    const activeRoute = router.pathname.split('/').at(-1)

    return (
        <>
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="secondary"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ display: { md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Link href={'/'}>
                        <Typography
                            variant="h2"
                            color="white"
                            display={{ xs: 'none', sm: 'block' }}
                            sx={{ cursor: 'pointer' }}
                            mr={8}
                            ml={2}
                            style={{ cursor: 'pointer' }}
                        >
                            Mantik
                        </Typography>
                    </Link>
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <Stack direction={'row'}>
                            {props.routes
                                .filter((route) =>
                                    route.positions?.includes('navbar')
                                )
                                .map((route) => (
                                    <Link href={route.path} key={route.name}>
                                        <MenuItem>
                                            <Typography
                                                variant="h5"
                                                color="secondary"
                                                sx={{
                                                    textDecoration:
                                                        route.name.toLowerCase() ===
                                                        activeRoute
                                                            ? 'underline'
                                                            : null,
                                                }}
                                            >
                                                {route.name}
                                            </Typography>
                                        </MenuItem>
                                    </Link>
                                ))}
                        </Stack>
                    </Box>
                    <Stack
                        direction={'row'}
                        justifyContent={'end'}
                        alignItems={'center'}
                        flex={1}
                        spacing={2}
                    >
                        <Badge
                            badgeContent={4}
                            max={99}
                            color="info"
                            sx={{
                                cursor: 'pointer',
                                '& .MuiBadge-badge': {
                                    color: 'white',
                                    backgroundColor: '#bdbdbd',
                                },
                            }}
                        >
                            <NotificationsIcon color="secondary" />
                        </Badge>
                        <AccountMenu />
                    </Stack>
                </Toolbar>
            </AppBar>

            <Box component="nav">
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>

            <Box component="main" sx={{ p: 3, padding: 0 }}>
                <Toolbar />
            </Box>
        </>
    )
}
