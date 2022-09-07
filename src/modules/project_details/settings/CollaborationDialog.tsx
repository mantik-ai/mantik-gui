import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { Autocomplete, CircularProgress, TextField } from '@mui/material'
import { useEffect } from 'react'
import {
    useGetGroups,
    useGetUsers,
    User,
    UserGroup,
} from '../../../common/queries'

interface AddUserDialogProps {
    handleClose: () => void
    isOpen: boolean
    dialogType: CollaborationDialogType
}

export const enum CollaborationDialogType {
    OWNER = 'owner',
    GROUPS = 'groups',
    MEMBERS = 'members',
}

const CollaborationDialog = ({
    dialogType,
    handleClose,
    isOpen,
}: AddUserDialogProps) => {
    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('xs'))
    const [openSearch, setOpenSearch] = React.useState(false)
    const [selection, setSelection] = React.useState([])
    const users = useGetUsers()
    const groups = useGetGroups()

    let data: {
        title: string
        message: string
        buttonText: string
        multiple: boolean
        options: User[] | UserGroup[] | undefined
        loading: boolean
    } = {
        title: '',
        message: '',
        buttonText: '',
        multiple: false,
        options: [],
        loading: true,
    }

    useEffect(() => {
        setSelection([])
    }, [isOpen])

    switch (dialogType) {
        case CollaborationDialogType.OWNER:
            data = {
                title: 'Change Owner',
                message: `Please select a user to designate him as the owner of this project.`,
                buttonText: 'Change Owner',
                multiple: false,
                options: users.data?.data.users,
                loading: users.status === 'loading',
            }
            break
        case CollaborationDialogType.GROUPS:
            data = {
                title: 'Edit Groups',
                message: `Search for usergroups you want to invite collaborating on the project. Removing usergroups has no effect on individual members added separately.`,
                buttonText: 'Edit Groups',
                multiple: true,
                options: groups.data?.data.projects,
                loading: groups.status === 'loading',
            }
            break
        default:
            data = {
                title: 'Edit Members',
                message: `Search for users you want to invite to the project or remove them from the list of members.`,
                buttonText: 'Edit Members',
                multiple: true,
                options: users.data?.data.users,
                loading: users.status === 'loading',
            }
            break
    }

    return (
        <Dialog fullScreen={fullScreen} open={isOpen} onClose={handleClose}>
            <DialogTitle>{data.title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{data.message}</DialogContentText>
                <Autocomplete
                    sx={{ py: 4 }}
                    onChange={(event, value) => {
                        Array.isArray(value)
                            ? setSelection(value)
                            : setSelection(value ? [value] : [])
                    }}
                    multiple={data.multiple}
                    open={openSearch}
                    onOpen={() => setOpenSearch(true)}
                    onClose={() => setOpenSearch(false)}
                    isOptionEqualToValue={(option, value) =>
                        option.name === value.name
                    }
                    getOptionLabel={(option) => option.name}
                    options={data.options ?? []}
                    loading={data.loading}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="User"
                            InputProps={{
                                ...params.InputProps,
                                endAdornment: (
                                    <>
                                        {data.loading ? (
                                            <CircularProgress
                                                color="inherit"
                                                size={20}
                                            />
                                        ) : null}
                                        {params.InputProps.endAdornment}
                                    </>
                                ),
                            }}
                        />
                    )}
                />
            </DialogContent>
            <DialogActions>
                <Button
                    autoFocus
                    onClick={handleClose}
                    sx={{ color: '#bdbdbd' }}
                >
                    Cancel
                </Button>
                <Button
                    onClick={handleClose}
                    variant={'outlined'}
                    disabled={!selection.length}
                >
                    {data.buttonText}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default CollaborationDialog
