import { Box, Fab, Stack } from '@mui/material'
import { Edit, Check, Clear } from '@mui/icons-material'
import * as React from 'react'

export default function EditButton({
    editState = false,
    onEdit = () => {},
    onSave = () => {},
    onCancel = () => {},
}) {
    return (
        <Box minWidth={112} display={'flex'} justifyContent={'end'} ml={4}>
            {editState ? (
                <Stack direction={'row'}>
                    <Fab
                        size={'small'}
                        color={'secondary'}
                        sx={{ m: 1, mb: 1.5 }}
                        onClick={onSave}
                    >
                        <Check />
                    </Fab>
                    <Fab
                        size={'small'}
                        color={'secondary'}
                        sx={{ m: 1, mb: 1.5 }}
                        onClick={onCancel}
                    >
                        <Clear />
                    </Fab>
                </Stack>
            ) : (
                <Fab
                    size={'small'}
                    color={'primary'}
                    onClick={onEdit}
                    sx={{ m: 1, mb: 1.5 }}
                >
                    <Edit color={'secondary'} />
                </Fab>
            )}
        </Box>
    )
}
