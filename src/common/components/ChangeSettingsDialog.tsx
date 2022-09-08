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
import { useGetProjectsProjectIdCode } from "../queries";
import { useRouter } from "next/router";
import useModal from "../hooks/useModal";

interface ChangeSettingsDialogProps<TRes> {
    title: string
    message: string
    buttonText: string
    multiple: boolean
    projectId: string
    onClose: () => void
    queryHook: (
        projectId: number {SearchString}
    ) => UseQueryResult<AxiosResponse<TRes>> & { queryKey: QueryKey }
    autocompleteSelector: (item: TRes) => string
}

export const ChangeSettingsDialog = <TRes,>(
    props: ChangeSettingsDialogProps<TRes>
) => {
  const { open, toggle } = useModal();
  const { data, status } = props.queryHook(props.projectId)

    return (
        <Dialog fullScreen={true} open={open} onClose={props.onClose}>
            <DialogTitle>{props.title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{props.message}</DialogContentText>
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
                    loading={status === "loading"}
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
                    sx={{ color: '#bdbdbd' }}
                >
                    Cancel
                </Button>
                <Button
                    variant={'outlined'}
                    disabled={!selection.length}
                >
                    {props.buttonText}
                </Button>
            </DialogActions>
        </Dialog>
    )
}
