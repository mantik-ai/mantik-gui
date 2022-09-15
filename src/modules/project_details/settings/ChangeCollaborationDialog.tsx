import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import { Autocomplete, CircularProgress, TextField } from '@mui/material'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import * as React from 'react'
import { QueryKey, UseQueryResult } from 'react-query'
import { AxiosResponse } from 'axios'

interface ChangeSettingsDialogProps<TData> {
    title: string
    message: string
    buttonText: string
    open: boolean
    multiple: boolean
    onClose: () => void
    queryHook: () => UseQueryResult<AxiosResponse<TData>> & {
        queryKey: QueryKey
    }
    autocompleteSelector: (item: TData) => string
    autocompleteOptions: (
        data: AxiosResponse<TData> | undefined
    ) => ReadonlyArray<TData>
}

export const ChangeCollaborationDialog = <TData,>(
    props: ChangeSettingsDialogProps<TData>
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
                <Autocomplete
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
                            size="small"
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
                    onClick={() => props.onClose()}
                >
                    Cancel
                </Button>
                <Button variant={'outlined'}>{props.buttonText}</Button>
            </DialogActions>
        </Dialog>
    )
}
