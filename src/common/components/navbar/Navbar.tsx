import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled'
import Link from "next/link";
import {Button, MenuItem, Stack} from "@mui/material";
import {Route} from '../../types/route'

interface NavbarProps {
    routes: Route[]
}

const drawerWidth = 240;

const Spacing = styled.div`margin: 0 3%;`
const VerticalDivider = styled.div`
  border: 1px solid white;
  width: 0;
  margin: 0 1rem 0 0.2rem;
`

export default function Navbar(props: NavbarProps) {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
            <Typography className={'logo-item-drawer'} component="div">
                MantikUI
            </Typography>
            <Divider/>
            <List>
                {props.routes.map((route) => (
                    <Link href={route.path} key={route.name}>
                        <MenuItem>
                            <Typography className={'menu-item-drawer'}>
                                {route.name}
                            </Typography>
                        </MenuItem>
                    </Link>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="secondary"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography className={'logo-item'} component="div" display={{ xs: 'none', md:'block' }}>
                        MantikUI
                    </Typography>
                    <Spacing/>
                    <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                        <Stack direction={"row"}>
                            {props.routes.map((route) => (
                                <Link href={route.path} key={route.name}>
                                    <MenuItem>
                                        <Typography className={'menu-item'}>
                                            {route.name}
                                        </Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Stack>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'end',
                        }}
                    >
                        <Button className={'btn'} color="secondary" variant="text">
                            Register
                        </Button>
                        <VerticalDivider/>
                        <Button
                            className={'btn'}
                            size={'medium'}
                            color="secondary"
                            variant="contained"
                            sx={{color: '#4F98F5'}}
                        >
                            Login
                        </Button>
                    </Box>
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
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>

            <Box component="main" sx={{p: 3, padding: 0}}>
                <Toolbar/>
            </Box>
        </>
    );
}
