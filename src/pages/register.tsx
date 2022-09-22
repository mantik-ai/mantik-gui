import React, { ChangeEvent, useState } from 'react'
import type { NextPage } from 'next'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import { TextField } from '@mui/material'
import { AuthCard, AuthCardTypes } from '../modules/auth/AuthCard'
import axios from '../modules/auth/axios'

const emailRegex = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
)
const Register: NextPage = () => {
    const [errorState, setErrorState] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
    })
    const [formState, setFormState] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
    })
    const onChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormState((prev) => ({ ...prev, [name]: value }))
        setErrorState((prev) => {
            const stateObj = { ...prev, [name]: '' }
            console.log(name)
            switch (name) {
                case 'email':
                    if (!emailRegex.test(value)) {
                        stateObj[name] = 'Please enter a valid Email'
                    }
                    break
                case 'username':
                    if (value === '') {
                        stateObj[name] = 'Username cannot be empty'
                    }
                    if (emailRegex.test(value)) {
                        stateObj[name] = 'Username connot be a Email'
                    }
                    break
                case 'password':
                    if (value === '') {
                        stateObj[name] = 'Password cannot be empty'
                    }
                    break
                case 'confirmPassword':
                    if (value !== formState.password) {
                        stateObj[name] = 'password does not match'
                    }
                    break
                default:
                    break
            }
            return stateObj
        })
    }

    return (
        <AuthCard
            icon={PersonOutlineIcon}
            onClick={async () => {
                const response = await axios.post('/api/register', {
                    ...formState,
                })
                console.log(response)
            }}
            disabled={
                Object.values(errorState).some((value) => value !== '') ||
                Object.values(formState).some((value) => value === '')
            }
            fields={[
                <TextField
                    key="register-email"
                    name="email"
                    label="email"
                    size="small"
                    error={errorState.email !== ''}
                    helperText={
                        errorState.email === '' ? null : errorState.email
                    }
                    value={formState.email}
                    onChange={onChange}
                    required
                />,
                <TextField
                    key="register-username"
                    name="username"
                    label="username"
                    size="small"
                    error={errorState.username !== ''}
                    helperText={
                        errorState.username === '' ? null : errorState.username
                    }
                    value={formState.username}
                    onChange={onChange}
                    required
                />,
                <TextField
                    key="register-password"
                    name="password"
                    label="password"
                    size="small"
                    type="password"
                    error={errorState.password !== ''}
                    helperText={
                        errorState.password === '' ? null : errorState.password
                    }
                    value={formState.password}
                    onChange={onChange}
                    required
                />,
                <TextField
                    key="register-password-confirm"
                    name="confirmPassword"
                    label="password confirmation"
                    size="small"
                    type={'password'}
                    error={errorState.confirmPassword !== ''}
                    helperText={
                        errorState.confirmPassword === ''
                            ? null
                            : errorState.confirmPassword
                    }
                    value={formState.confirmPassword}
                    onChange={onChange}
                    required
                />,
            ]}
            type={AuthCardTypes.REGISTER}
        />
    )
}

export default Register
