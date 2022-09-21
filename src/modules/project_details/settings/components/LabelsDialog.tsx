import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import * as React from 'react'
import { Autocomplete, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import { Label, useGetLabelsSearch } from '../../../../common/queries'

interface ChangeLabelsDialogProps {
    title: string
    message: string
    open: boolean
    onClose: () => void
    onSave: (labels: Label[]) => void
    labels: Label[]
}

export const LabelsDialog = (props: ChangeLabelsDialogProps) => {
    const [labelSearchString, setLabelSearchString] = useState('')
    const { data, status } = useGetLabelsSearch({
        searchString: labelSearchString,
    })
    const [labels, setLabels] = useState(props.labels)

    useEffect(() => {
        setLabels(props.labels)
    }, [props.labels])

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
                    multiple
                    value={labels}
                    onChange={(event, newValue) => {
                        setLabels(newValue)
                    }}
                    isOptionEqualToValue={(option, value) =>
                        option.name === value.name
                    }
                    options={data?.data.labels ?? []}
                    getOptionLabel={(label) => label.name}
                    loading={status !== 'success'}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            sx={{ py: 4 }}
                            size="small"
                            placeholder="add..."
                        />
                    )}
                />
            </DialogContent>
            <DialogActions>
                <Button
                    autoFocus
                    sx={{ color: '#bdbdbd' }}
                    onClick={() => {
                        setLabels(props.labels)
                        props.onClose()
                    }}
                >
                    Cancel
                </Button>
                <Button
                    variant={'outlined'}
                    onClick={() => {
                        props.onSave(labels)
                        props.onClose()
                    }}
                >
                    Save Changes
                </Button>
            </DialogActions>
        </Dialog>
    )
}
