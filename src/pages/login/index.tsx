import React from 'react'
import type {NextPage} from 'next'
import {Button, Card, CardContent, Divider, IconButton, Link, Stack, TextField, Typography} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import {Links} from "../../common/types/links";

const signInWith: Links[] = [
    {url: '', icon: <GoogleIcon/>},
    {url: '', icon: <FacebookOutlinedIcon/>},
    {url: '', icon: <GitHubIcon/>},
]

const Login: NextPage = () => {
    return (
        <Stack
            alignItems={'center'}
            justifyContent={'center'}
            flexGrow={1}>
            <Card sx={{
                pt: 3,
                width: '100%',
                maxWidth: '400px',
                boxShadow: {xs: 0, sm: 3},
            }}>
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
                <CardContent sx={{p: 4}}>
                    <Stack direction={'column'} spacing={2}>
                        <Stack direction='row' justifyContent="space-between" alignItems="center">
                            <Typography variant="h4" mb={1}>Sign in</Typography>
                            <Link variant="body2" color="textSecondary" align="right">
                                Create Account?
                            </Link>
                        </Stack>
                        <TextField label="email" variant="outlined"/>
                        <TextField label="password" variant="outlined" type={"password"}/>
                        <Link variant="body2" color="textSecondary" align="left">
                            Forgot password?
                        </Link>
                        <Button variant="contained" style={{
                            color: 'white',
                        }}>
                            Sign in
                        </Button>
                        <Divider>
                            <Typography variant="body2" color="textSecondary" align="center">or sign in with</Typography>
                        </Divider>
                        <Stack direction='row' justifyContent='center' spacing={1}>
                            {signInWith.map(({url, icon}) => (
                                <IconButton style={{border: "1px solid #80808066"}} key={url} href={url}>
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
