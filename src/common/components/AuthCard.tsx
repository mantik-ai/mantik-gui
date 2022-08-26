import {
    Button,
    Card,
    CardContent,
    Divider,
    Link,
    Stack,
    Typography,
} from '@mui/material'
import React, { ReactNode } from 'react'
import { SvgIconComponent } from '@mui/icons-material'
import { signIn } from 'next-auth/react'
import { COGNITO_PROVIDER_ID } from '../constants'

export const enum AuthCardTypes {
    LOGIN = 'login',
    REGISTER = 'register',
}

interface AuthCardProps {
    icon: SvgIconComponent
    fields: ReactNode[]
    type: AuthCardTypes
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const AuthCard = (props: AuthCardProps) => {
    let linkText = ''
    let link = ''

    switch (props.type) {
        case AuthCardTypes.LOGIN:
            linkText = 'Not yet registered?'
            link = '/register'
            break
        case AuthCardTypes.REGISTER:
            linkText = 'Already registered?'
            link = '/login'
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
                                href={link}
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
                            onClick={props.onClick}
                        >
                            {props.type}
                        </Button>
                    </Stack>
                </CardContent>
            </Card>
        </Stack>
    )
}
