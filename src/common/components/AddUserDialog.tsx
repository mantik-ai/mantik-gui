import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

interface AddUserDialogProps {
    title: string
    message: string
    buttonText: string
    handleClose: () => void
    isOpen: boolean
}

const AddUserDialog = (props: AddUserDialogProps) => {
    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('xs'))
    const { title, message, buttonText, handleClose, isOpen } = props

    return (
        <Dialog
            fullScreen={fullScreen}
            open={isOpen}
            onClose={handleClose}
            scroll="paper"
        >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{message}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button
                    autoFocus
                    onClick={handleClose}
                    sx={{ color: '#bdbdbd' }}
                >
                    Cancel
                </Button>
                <Button onClick={handleClose} variant={'outlined'}>
                    {buttonText}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default AddUserDialog
