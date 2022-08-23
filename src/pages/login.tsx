import React from 'react'
import type { NextPage } from 'next'
import { TextField } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { AuthCard, AuthCardTypes } from '../modules/auth/AuthCard'

const Login: NextPage = () => {
    return (
        <AuthCard
            icon={LockOutlinedIcon}
            fields={[
                <TextField
                    key="login-email"
                    label="email"
                    type="email"
                    required
                />,
                <TextField
                    key="login-password"
                    label="password"
                    type="password"
                    required
                />,
            ]}
            type={AuthCardTypes.LOGIN}
        />
    )
}

export default Login
