import { Autocomplete, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import { useGetLabelsSearch } from '../../../common/queries'
import SearchParamerterContext from '../contexts/SearchParameterContext'

export const LabelSelector = () => {
    const searchParameterContext = useContext(SearchParamerterContext)
    const [labelSearchString, setLabelSearchString] = useState('')
    const { data, status } = useGetLabelsSearch({
        searchString: labelSearchString,
    })
    const loading = status !== 'success'

    return (
        <Autocomplete
            multiple
            id="labels"
            onChange={(_, labels) =>
                searchParameterContext.setSearchLabels!(labels)
            }
            options={data?.data.labels ?? []}
            getOptionLabel={(label) => label.name}
            loading={loading}
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
