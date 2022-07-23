import {
    Button,
    Card,
    CardContent,
    Divider,
    IconButton,
    Link,
    Stack,
    Typography,
} from '@mui/material'
import React, { ReactNode } from 'react'
import { SvgIconComponent } from '@mui/icons-material'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import GitHubIcon from '@mui/icons-material/GitHub'
import { IconLinking } from '../types/linking'

export const enum AuthCardTypes {
    LOGIN = 'login',
    REGISTER = 'register',
}

interface AuthCardProps {
    icon: SvgIconComponent
    fields: ReactNode[]
    type: AuthCardTypes
}

const externAuth: IconLinking[] = [
    { url: 'https://example.com/4', icon: <GoogleIcon /> },
    { url: 'https://example.com/5', icon: <FacebookOutlinedIcon /> },
    { url: 'https://example.com/6', icon: <GitHubIcon /> },
]

export const AuthCard = (props: AuthCardProps) => {
    let linkText = ''

    switch (props.type) {
        case AuthCardTypes.LOGIN:
            linkText = 'Not yet registered?'
            break
        case AuthCardTypes.REGISTER:
            linkText = 'Already registered?'
            break
        default:
            break
    }

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
                    <props.icon
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
                            <Typography variant="h4" textTransform="capitalize">
                                {props.type}
                            </Typography>
                            <Link
                                href={'/login'}
                                variant="body2"
                                color="textSecondary"
                                align="right"
                            >
                                {linkText}
                            </Link>
                        </Stack>
                        {props.fields}

                        {props.type === AuthCardTypes.LOGIN && (
                            <Link
                                variant="body2"
                                color="textSecondary"
                                align="left"
                            >
                                Forgot password?
                            </Link>
                        )}
                        <Button
                            variant="contained"
                            style={{
                                color: 'white',
                            }}
                        >
                            {props.type}
                        </Button>
                        <Divider sx={{ py: 1 }}>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                align="center"
                            >
                                or {props.type} with
                            </Typography>
                        </Divider>
                        <Stack
                            direction="row"
                            justifyContent="center"
                            spacing={1}
                        >
                            {externAuth.map(({ url, icon }) => (
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
