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
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import GitHubIcon from '@mui/icons-material/GitHub'
import { Links } from '../../common/types/links'

const registerWith: Links[] = [
    { url: 'https://example.com/7', icon: <GoogleIcon /> },
    { url: 'https://example.com/8', icon: <FacebookOutlinedIcon /> },
    { url: 'https://example.com/9', icon: <GitHubIcon /> },
]

const Register: NextPage = () => {
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
                    <PersonOutlineIcon
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
                            <Typography variant="h4">Register</Typography>
                            <Link
                                href={'/login'}
                                variant="body2"
                                color="textSecondary"
                                align="right"
                            >
                                Already registered?
                            </Link>
                        </Stack>
                        <TextField
                            label="first name"
                            variant="outlined"
                            required
                        />
                        <TextField
                            label="last name"
                            variant="outlined"
                            required
                        />
                        <TextField
                            label="email"
                            variant="outlined"
                            type={'email'}
                            required
                        />
                        <TextField
                            label="password"
                            variant="outlined"
                            type={'password'}
                            required
                        />
                        <TextField
                            label="password confirmation"
                            variant="outlined"
                            type={'password'}
                            required
                        />
                        <Button
                            variant="contained"
                            style={{
                                color: 'white',
                            }}
                        >
                            register
                        </Button>
                        <Divider sx={{ py: 1 }}>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                align="center"
                            >
                                or register with
                            </Typography>
                        </Divider>
                        <Stack
                            direction="row"
                            justifyContent="center"
                            spacing={1}
                        >
                            {registerWith.map(({ url, icon }) => (
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

export default Register
