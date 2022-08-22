import { Autocomplete, TextField } from '@mui/material'
import React from 'react'
import { Label } from '../../../common/queries'

export const LabelSelector = () => {
    const labels: Label[] = [
        { scope: 'Technology', name: 'TensorFlow' },
        { scope: 'Technology', name: 'Pytorch' },
        { scope: 'Dataset-size', name: 'Terrabyte' },
    ]
    return (
        <Autocomplete
            multiple
            id="labels"
            options={labels}
            getOptionLabel={(label) => label.name}
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
