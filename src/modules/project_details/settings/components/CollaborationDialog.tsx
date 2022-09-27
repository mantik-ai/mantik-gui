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
    open: boolean
    multiple: boolean
    onClose: () => void
    onSave: (value: TData | TData[]) => void
    queryHook: () => UseQueryResult<AxiosResponse<TData>> & {
        queryKey: QueryKey
    }
    autocompleteSelector: (item: TData) => string
    autocompleteOptions: (
        data: AxiosResponse<TData> | undefined
    ) => ReadonlyArray<TData>
    defaultValue: TData | TData[]
}

export const CollaborationDialog = <TData extends { name: string }>(
    props: ChangeSettingsDialogProps<TData>
) => {
    const { data, status } = props.queryHook()
    const [value, setValue] = React.useState<TData | TData[] | null>(null)

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
                    onChange={(_, newValue) => setValue(newValue)}
                    multiple={props.multiple}
                    getOptionLabel={(option) =>
                        props.autocompleteSelector(option)
                    }
                    isOptionEqualToValue={(opt, val) => opt.name === val.name}
                    defaultValue={props.defaultValue}
                    options={props.autocompleteOptions(data)}
                    loading={status === 'loading'}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Selection"
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
                <Button
                    variant={'outlined'}
                    onClick={() => {
                        props.onSave(
                            props.multiple
                                ? (value as TData[])
                                : (value as TData)
                        )
                        props.onClose()
                    }}
                >
                    Save Changes
                </Button>
            </DialogActions>
        </Dialog>
    )
}
