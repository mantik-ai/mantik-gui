import { Autocomplete, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useGetLabelsSearch } from '../../../common/queries'
import { useSearchParameterContext } from '../contexts/SearchParameterContext'

export const LabelSelector = () => {
    const searchParameterContext = useSearchParameterContext()
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
                searchParameterContext.dispatch({
                    type: 'setSearchLabels',
                    payload: labels,
                })
            }
            options={data?.data.labels ?? []}
            getOptionLabel={(label) => label.name}
            loading={loading}
            renderInput={(params) => (
                <TextField
                    {...params}
                    sx={{ py: 1 }}
                    size="small"
                    placeholder="add..."
                />
            )}
        />
    )
}
