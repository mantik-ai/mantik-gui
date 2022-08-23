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
import { COGNITO_PROVIDER_ID } from '../../common/constants'

export const enum AuthCardTypes {
    LOGIN = 'login',
    REGISTER = 'register',
}

interface AuthCardProps {
    icon: SvgIconComponent
    fields: ReactNode[]
    type: AuthCardTypes
}

/*unnecessary at first, but will be useful later*/
/*const providers: Providers[] = [
    { id: GOOGLE_PROVIDER_ID, icon: <GoogleIcon /> },
    { id: GITHUB_PROVIDER_ID, icon: <GitHubIcon /> },
    { id: APPLE_PROVIDER_ID, icon: <AppleIcon /> },
]*/

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
                            onClick={() => signIn(COGNITO_PROVIDER_ID)}
                        >
                            {props.type}
                        </Button>

                        {/*Login/Register with oauth2 provider is not supported in the first release */}
                        {/*<Divider sx={{ py: 1 }}>
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
                            {providers.map(({ id, icon }) => (
                                <IconButton
                                    style={{ border: '1px solid #80808066' }}
                                    key={id}
                                    onClick={() => signIn(id)}
                                >
                                    {icon}
                                </IconButton>
                            ))}
                        </Stack>*/}
                    </Stack>
                </CardContent>
            </Card>
        </Stack>
    )
}
