import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import { Button, MenuItem, Stack } from '@mui/material'
import { NavbarProps } from '../../types/navbarProps'

const drawerWidth = 240

export default function Navbar(props: NavbarProps) {
    const [mobileOpen, setMobileOpen] = React.useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant={"h2"} color="primary">
                MantikUI
            </Typography>
            <Divider />
            <List>
                {props.routes
                    .filter((route) => route.positions.includes('drawer'))
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

    return (
        <>
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="secondary"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h2"
                        color='white'
                        display={{ xs: 'none', md: 'block' }}
                        mr={8}
                    >
                        MantikUI
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Stack direction={'row'}>
                            {props.routes
                                .filter((route) =>
                                    route.positions.includes('navbar')
                                )
                                .map((route) => (
                                    <Link href={route.path} key={route.name}>
                                        <MenuItem>
                                            <Typography variant="h5" color="secondary">
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
                        flex={1}
                        spacing={2}
                    >
                        <Button
                            color="secondary"
                            variant="outlined"
                        >
                            Register
                        </Button>
                        <Divider
                            orientation="vertical"
                            flexItem
                            sx={{ borderColor: 'white' }}
                        />
                        <Button
                            size={'small'}
                            color="secondary"
                            variant="contained"
                            sx={{ color: '#4F98F5' }}
                        >
                            login
                        </Button>
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
                        display: { xs: 'block', sm: 'none' },
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
