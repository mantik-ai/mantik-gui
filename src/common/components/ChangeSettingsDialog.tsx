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
import useModal from '../hooks/useModal'

interface ChangeSettingsDialogProps<TRes> {
    title: string
    message: string
    buttonText: string
    multiple: boolean
    projectId: string
    onClose: () => void
    queryHook: () => UseQueryResult<AxiosResponse<TRes>> & {
        queryKey: QueryKey
    }
    autocompleteSelector: (item: TRes) => string
}

export const ChangeSettingsDialog = <TRes,>(
    props: ChangeSettingsDialogProps<TRes>
) => {
    const { open } = useModal()
    const { data, status } = props.queryHook()

    return (
        <Dialog fullScreen={true} open={open} onClose={props.onClose}>
            <DialogTitle>{props.title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{props.message}</DialogContentText>
                <Autocomplete
                    sx={{ py: 4 }}
                    multiple={props.multiple}
                    getOptionLabel={(option: TRes) =>
                        props.autocompleteSelector(option)
                    }
                    options={data?.data as unknown as []}
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
                <Button autoFocus sx={{ color: '#bdbdbd' }}>
                    Cancel
                </Button>
                <Button variant={'outlined'}>{props.buttonText}</Button>
            </DialogActions>
        </Dialog>
    )
}
