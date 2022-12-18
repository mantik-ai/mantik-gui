import { Button, Stack, TextField, Typography } from '@mui/material'
import { useSession } from 'next-auth/react'
import React, { ChangeEvent, useState } from 'react'
import { usePostUsersUserIdSettings } from '../../common/queries'
import { UserSettingsLayout } from '../../modules/user/layouts/UserSettingLayout'
import { NextPageWithNestedLayout } from '../_app'

const Email: NextPageWithNestedLayout = () => {
    const session = useSession()
    const [formState, setFormState] = useState({
        email: session.data?.user.email ?? '',
    })

    const d = usePostUsersUserIdSettings()
    const onSave = () => {}

    const onChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        console.log('test')
        setFormState((prev) => ({ ...prev, [name]: value }))
    }
    return (
        <Stack direction={'column'} spacing={2}>
            <Typography variant="h3">{'Email Settings'}</Typography>
            <TextField
                key="user-settings-email"
                name="email"
                id="filled-basic"
                label="Email"
                variant="outlined"
                value={formState.email}
                onChange={onChange}
            />
            <Stack direction={'row'} spacing={2}>
                <Button
                    key="user-settings-save-btn"
                    disabled={false}
                    variant="contained"
                    style={{
                        color: 'white',
                    }}
                >
                    {'Save'}
                </Button>
                <Button
                    key="user-settings-cancel-btn"
                    disabled={false}
                    variant="contained"
                    style={{
                        color: 'white',
                    }}
                >
                    {'Cancel'}
                </Button>
            </Stack>
        </Stack>
    )
}

Email.getNestedLayout = (page) => {
    return (
        <UserSettingsLayout title="Email Settings">{page}</UserSettingsLayout>
    )
}

export default Email
