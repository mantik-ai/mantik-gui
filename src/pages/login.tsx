import React, { ChangeEvent, useState } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { TextField } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { signIn } from 'next-auth/react'
import { COGNITO_PROVIDER_ID } from '../common/constants'
import { AuthCard, AuthCardTypes } from '../modules/auth/AuthCard'

const Login: NextPage = () => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [globalError, setGlobalError] = useState('')
    const [errorState, setErrorState] = useState({
        username: '',
        password: '',
    })
    const [formState, setFormState] = useState({
        username: '',
        password: '',
    })
    const onChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormState((prev) => ({ ...prev, [name]: value }))
        setGlobalError('')
        setErrorState((prev) => {
            const stateObj = { ...prev, [name]: '' }
            switch (name) {
                case 'username':
                    if (value === '') {
                        stateObj[name] = 'Please enter a valid email'
                    }
                    break
                case 'password':
                    if (value === '') {
                        stateObj[name] = 'Password cannot be empty'
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
            icon={LockOutlinedIcon}
            loading={loading}
            globalError={globalError === '' ? undefined : globalError}
            disabled={
                Object.values(errorState).some((value) => value !== '') ||
                Object.values(formState).some((value) => value === '') ||
                globalError !== ''
            }
            onClick={async () => {
                setLoading(true)
                const result = await signIn(COGNITO_PROVIDER_ID, {
                    username: formState.username,
                    password: formState.password,
                    redirect: false,
                })
                if (result?.ok) {
                    await router.push('/')
                } else {
                    setGlobalError('Username or password is incorrect')
                }
                setLoading(false)
            }}
            fields={[
                <TextField
                    key="login-username"
                    name="username"
                    label="username or email"
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
                    key="login-password"
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
            ]}
            type={AuthCardTypes.LOGIN}
        />
    )
}

export default Login
