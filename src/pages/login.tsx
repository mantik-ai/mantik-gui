import React, { useState } from 'react'
import type { NextPage } from 'next'
import { TextField } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { signIn } from 'next-auth/react'
import { COGNITO_PROVIDER_ID } from '../common/constants'
import { AuthCard, AuthCardTypes } from '../modules/auth/AuthCard'

const Login: NextPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <AuthCard
            icon={LockOutlinedIcon}
            onClick={() =>
                signIn(COGNITO_PROVIDER_ID, {
                    email,
                    password,
                    callbackUrl: `${window.location.origin}`,
                })
            }
            fields={[
                <TextField
                    key="login-email"
                    label="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />,
                <TextField
                    key="login-password"
                    label="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />,
            ]}
            type={AuthCardTypes.LOGIN}
        />
    )
}

export default Login
