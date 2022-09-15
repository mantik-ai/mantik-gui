import { Button } from '@mui/material'
import * as React from 'react'

export default function ChangeSettingsButton({
    text = '',
    editState = false,
    onClick = () => {},
}) {
    return (
        <Button
            variant="outlined"
            sx={{ mt: 1 }}
            color={editState ? 'warning' : 'primary'}
            onClick={onClick}
        >
            {editState ? 'Cancel' : text}
        </Button>
    )
}
