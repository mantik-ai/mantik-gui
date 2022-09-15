import { Stack, TextField, Typography } from '@mui/material'
import * as React from 'react'
import ChangeSettingsButton from './ChangeSettingsButton'

export default function EditTextContainer({
    title = '',
    buttonText = '',
    data = '',
    onReset = () => {},
    onChange = () => {},
}) {
    const [edit, setEdit] = React.useState(false)

    return (
        <div>
            <Typography variant={'h5'}>{title}</Typography>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
            >
                {edit ? (
                    <TextField
                        sx={{ width: '80%', mt: 1 }}
                        size={'small'}
                        type="text"
                        placeholder={'Enter text'}
                        defaultValue={data}
                        onChange={(e) => onChange(e.target.value)}
                    />
                ) : (
                    <Typography variant={'body1'} mt={2} mb={1} ml={'14px'}>
                        {data || 'No text'}
                    </Typography>
                )}
                <ChangeSettingsButton
                    text={buttonText}
                    editState={edit}
                    onClick={() => {
                        if (edit) onReset()
                        setEdit(!edit)
                    }}
                />
            </Stack>
        </div>
    )
}
