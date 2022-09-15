import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import * as React from 'react'
import { LabelSelector } from '../../projects_overview/components/LabelSelector'

interface ChangeLabelsDialogProps {
    title: string
    message: string
    buttonText: string
    open: boolean
    onClose: () => void
}

export const ChangeLabelsDialog = (props: ChangeLabelsDialogProps) => {
    return (
        <Dialog
            open={props.open}
            onClose={props.onClose}
            fullWidth={true}
            maxWidth={'sm'}
        >
            <DialogTitle>{props.title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{props.message}</DialogContentText>
                <LabelSelector />
            </DialogContent>
            <DialogActions>
                <Button
                    autoFocus
                    sx={{ color: '#bdbdbd' }}
                    onClick={() => props.onClose()}
                >
                    Cancel
                </Button>
                <Button variant={'outlined'}>{props.buttonText}</Button>
            </DialogActions>
        </Dialog>
    )
}
