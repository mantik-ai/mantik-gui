import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import { Autocomplete, CircularProgress, TextField } from '@mui/material'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import * as React from 'react'
import { QueryKey, UseQueryResult } from 'react-query'

interface ChangeSettingsDialogProps<TData, TError> {
    title: string
    message: string
    buttonText: string
    open: boolean
    multiple: boolean
    projectId: string
    onClose: () => void
    queryHook: () => UseQueryResult<TData, TError> & { queryKey: QueryKey }
    autocompleteSelector: (item: TData) => string
    autocompleteOptions: (data: any) => ReadonlyArray<any>
}

export const ChangeSettingsDialog = <TData, TError>(
    props: ChangeSettingsDialogProps<TData, TError>
) => {
    const { data, status } = props.queryHook()

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
                <Autocomplete<TData>
                    sx={{ py: 4 }}
                    multiple={props.multiple}
                    getOptionLabel={(option) =>
                        props.autocompleteSelector(option)
                    }
                    options={props.autocompleteOptions(data)}
                    loading={status === 'loading'}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="User"
                            InputProps={{
                                ...params.InputProps,
                                endAdornment: (
                                    <>
                                        {status === 'loading' ? (
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
                    sx={{ color: '#bdbdbd' }}
                    onClick={() => onClose()}
                >
                    Cancel
                </Button>
                <Button variant={'outlined'}>{props.buttonText}</Button>
            </DialogActions>
        </Dialog>
    )
}
