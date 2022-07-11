import React from 'react'
import type { NextPage } from 'next'
import {
    Button,
    Card,
    CardContent,
    Divider,
    IconButton,
    Link,
    Stack,
    TextField,
    Typography,
} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import GitHubIcon from '@mui/icons-material/GitHub'
import { Links } from '../../common/types/links'

const signInWith: Links[] = [
    { url: 'https://example.com/4', icon: <GoogleIcon /> },
    { url: 'https://example.com/5', icon: <FacebookOutlinedIcon /> },
    { url: 'https://example.com/6', icon: <GitHubIcon /> },
]

const Login: NextPage = () => {
    return (
        <Stack alignItems={'center'} justifyContent={'center'} flexGrow={1}>
            <Card
                sx={{
                    p: 3,
                    pt: 4,
                    pb: 1,
                    width: '100%',
                    maxWidth: '400px',
                    boxShadow: { xs: 0, sm: 3 },
                }}
            >
                <Divider textAlign="left">
                    <LockOutlinedIcon
                        sx={{
                            fontSize: '3rem',
                            backgroundColor: 'primary.main',
                            color: 'white',
                            borderRadius: '50%',
                            padding: '0.5rem',
                        }}
                    />
                </Divider>
                <CardContent>
                    <Stack direction={'column'} spacing={2}>
                        <Stack
                            mb={1}
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Typography variant="h4">Login</Typography>
                            <Link
                                href={'/register'}
                                variant="body2"
                                color="textSecondary"
                                align="right"
                            >
                                Not yet registered?
                            </Link>
                        </Stack>
                        <TextField label="email" variant="outlined" />
                        <TextField
                            label="password"
                            variant="outlined"
                            type={'password'}
                        />
                        <Link
                            variant="body2"
                            color="textSecondary"
                            align="left"
                        >
                            Forgot password?
                        </Link>
                        <Button
                            variant="contained"
                            style={{
                                color: 'white',
                            }}
                        >
                            login
                        </Button>
                        <Divider sx={{ py: 1 }}>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                align="center"
                            >
                                or login with
                            </Typography>
                        </Divider>
                        <Stack
                            direction="row"
                            justifyContent="center"
                            spacing={1}
                        >
                            {signInWith.map(({ url, icon }) => (
                                <IconButton
                                    style={{ border: '1px solid #80808066' }}
                                    key={url}
                                    href={url}
                                >
                                    {icon}
                                </IconButton>
                            ))}
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>
        </Stack>
    )
}

export default Login
