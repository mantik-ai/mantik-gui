import { FormControl, FormLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'

interface RunDialogFormInput<T> {
    name: string
    options: T[]
    fieldSelector: (x: T) => string
    onChange: (x: T) => void
}
export const RunDialogFormInput = <T,>(props: RunDialogFormInput<T>) => {
    const [selected, setSelected] = useState<T>()
    const idSuffix = props.name.split(' ').join('-').toLowerCase()
    return (
        <FormControl>
            <FormLabel id={`label-${idSuffix}`}>{props.name}</FormLabel>
            <Select
                labelId={`label-select-${idSuffix}`}
                id={`select-${idSuffix}`}
                value={selected ?? '<undefined>'}
                label={`Data Repository`}
                onChange={(e) => {
                    setSelected(e.target.value as T)
                    props.onChange(e.target.value as T)
                }}
            >
                {props.options.map((item) => {
                    const id = props.fieldSelector(item)
                    return (
                        //@ts-ignore - necessary to load object into value
                        <MenuItem
                            key={id.split(' ').join('-').toLowerCase()}
                            value={item}
                        >
                            {id}
                        </MenuItem>
                    )
                })}
            </Select>
        </FormControl>
    )
}
