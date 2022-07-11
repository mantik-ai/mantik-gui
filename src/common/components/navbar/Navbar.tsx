import {
    AppBar,
    Button,
    Container,
    MenuItem,
    Toolbar,
    Typography,
} from '@mui/material'
import Link from 'next/link'
import React from 'react'
import styled from '@emotion/styled'
import { Route } from '../../types/route'

const VerticalDivider = styled.div`
    border: 1px solid white;
    width: 0;
    margin: 0 1em;
`
const Spacing = styled.div`
    margin: 0 3%;
`

interface NavbarProps {
    routes: Route[]
}
export const Navbar = (props: NavbarProps) => {
    return (
        <AppBar component="nav" position="static">
            <Toolbar>
                <Link href="/">
                    <MenuItem>
                        <Typography
                            color="white"
                            variant="h5"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            MantikAI
                        </Typography>
                    </MenuItem>
                </Link>
                <Spacing />
                {props.routes.map((route) => (
                    <Link href={route.path} key={route.name}>
                        <MenuItem>
                            <Typography textAlign="center" color="white">
                                {route.name}
                            </Typography>
                        </MenuItem>
                    </Link>
                ))}
                <Container
                    maxWidth={false}
                    sx={{
                        display: 'flex',
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'end',
                    }}
                >
                    <Button
                        color="secondary"
                        variant="contained"
                        sx={{ color: '#4F98F5' }}
                    >
                        Register
                    </Button>
                    <VerticalDivider></VerticalDivider>
                    <Button
                        color="secondary"
                        variant="contained"
                        sx={{ color: '#4F98F5' }}
                    >
                        Login
                    </Button>
                </Container>
            </Toolbar>
        </AppBar>
    )
}
