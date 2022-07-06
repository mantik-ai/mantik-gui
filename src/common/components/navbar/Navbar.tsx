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
import {Route} from '../../types/route'

const VerticalDivider = styled.div`
  border: 1px solid white;
  width: 0;
  margin: 0 1.6em 0 1rem;
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
                            fontWeight={700}
                            fontSize={40}
                            letterSpacing={0.46}
                            component="div"
                        >
                            MantikUI
                        </Typography>
                    </MenuItem>
                </Link>
                <Spacing/>
                {props.routes.map((route) => (
                    <Link href={route.path} key={route.name}>
                        <MenuItem>
                            <Typography textAlign="center" color="white" fontWeight={600} fontSize={20} letterSpacing={0.4}>
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
                        style={{ fontSize: '16px', fontWeight: '600', letterSpacing: '0.46' }}
                        color="secondary"
                        variant="text"
                    >
                        Register
                    </Button>
                    <VerticalDivider/>
                    <Button
                        style={{ fontSize: '16px', fontWeight: '600', letterSpacing: '0.46' }}
                        color="secondary"
                        variant="contained"
                        sx={{color: '#4F98F5' }}
                    >
                        Login
                    </Button>
                </Container>
            </Toolbar>
        </AppBar>
    )
}
