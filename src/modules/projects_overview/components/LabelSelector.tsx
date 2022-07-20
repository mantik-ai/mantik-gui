import { Autocomplete, TextField } from '@mui/material'
import React from 'react'
import { Label } from '../../../common/queries'

interface LabelSelectorProps {}
export const LabelSelector = (props: LabelSelectorProps) => {
    const labels: Label[] = [
        { key: 'Technology', value: 'TensorFlow' },
        { key: 'Technology', value: 'Pytorch' },
        { key: 'Dataset-size', value: 'Terrabyte' },
    ]
    return (
        <Autocomplete
            multiple
            id="labels"
            options={labels}
            getOptionLabel={(label) => label.value}
            // defaultValue={[top100Films[13]]}
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant="standard"
                    placeholder="add..."
                />
            )}
        />
    )
}
