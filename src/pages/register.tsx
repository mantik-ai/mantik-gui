import React from 'react'
import type { NextPage } from 'next'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import { TextField } from '@mui/material'
import { AuthCard, AuthCardTypes } from '../common/components/AuthCard'

const Register: NextPage = () => {
    return (
        <AuthCard
            icon={PersonOutlineIcon}
            fields={[
                <TextField
                    key="register-firstname"
                    label="first name"
                    required
                />,
                <TextField
                    key="register-lastname"
                    label="last name"
                    required
                />,
                <TextField
                    key="register-email"
                    label="email"
                    type={'email'}
                    required
                />,
                <TextField
                    key="register-password"
                    label="password"
                    type="password"
                    required
                />,
                <TextField
                    key="register-password-confirm"
                    label="password confirmation"
                    type={'password'}
                    required
                />,
            ]}
            type={AuthCardTypes.REGISTER}
        />
    )
}

export default Register
