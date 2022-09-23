import React, { ChangeEvent, useState } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import { TextField } from '@mui/material'
import { AuthCard, AuthCardTypes } from '../modules/auth/AuthCard'
import axios from '../modules/auth/axios'
import { getConfirmExceptionMessage } from '../modules/auth/utils'
import { AxiosError } from 'axios'

const ConfirmEmail: NextPage = () => {
    const router = useRouter()
    const [globalError, setGlobalError] = useState('')
    const [errorState, setErrorState] = useState({
        code: '',
    })
    const [formState, setFormState] = useState({
        code: '',
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
                case 'code':
                    if (!/\b\d{6}\b/.test(value)) {
                        stateObj[name] =
                            'Please enter a valid verification code'
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
            globalError={globalError === '' ? undefined : globalError}
            onClick={async () => {
                try {
                    if (!router.query.username) {
                        throw new Error('No username provided')
                    }
                    const response = await axios.post('/api/confirm-email', {
                        username: router.query.username,
                        ...formState,
                    })
                    if (response.status === 200) {
                        await router.push('/login')
                    }
                } catch (e: unknown) {
                    const resError = e as AxiosError<{
                        message: {
                            name: string
                            $fault: string
                        }
                    }>
                    setGlobalError(
                        getConfirmExceptionMessage(
                            resError.response?.data.message.name ?? ''
                        )
                    )
                }
            }}
            disabled={
                Object.values(errorState).some((value) => value !== '') ||
                Object.values(formState).some((value) => value === '') ||
                globalError !== ''
            }
            fields={[
                <TextField
                    key="register-code"
                    name="code"
                    label="code"
                    size="small"
                    error={errorState.code !== ''}
                    helperText={errorState.code === '' ? null : errorState.code}
                    value={formState.code}
                    onChange={onChange}
                    required
                />,
            ]}
            type={AuthCardTypes.CONFIRM}
        />
    )
}

export default ConfirmEmail
