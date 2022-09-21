import React from 'react'
import type { NextPage } from 'next'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import { TextField } from '@mui/material'
import { AuthCard, AuthCardTypes } from '../modules/auth/AuthCard'

const Register: NextPage = () => {
    return (
        <AuthCard
            icon={PersonOutlineIcon}
            fields={[
                <TextField
                    key="register-firstname"
                    label="first name"
                    size="small"
                    required
                />,
                <TextField
                    key="register-lastname"
                    label="last name"
                    size="small"
                    required
                />,
                <TextField
                    key="register-email"
                    label="email"
                    size="small"
                    type={'email'}
                    required
                />,
                <TextField
                    key="register-password"
                    label="password"
                    size="small"
                    type="password"
                    required
                />,
                <TextField
                    key="register-password-confirm"
                    label="password confirmation"
                    size="small"
                    type={'password'}
                    required
                />,
            ]}
            type={AuthCardTypes.REGISTER}
        />
    )
}

export default Register
