import {
    Box,
    Divider,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Typography,
} from '@mui/material'
import React, { useContext } from 'react'
import SearchParamerterContext, {
    SortType,
} from '../contexts/SearchParameterContext'

interface SearchHeadingProps {
    children: React.ReactNode
}
export const SearchHeading = (props: SearchHeadingProps) => {
    const searchParameterContext = useContext(SearchParamerterContext)
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h4">{props.children}</Typography>
                <Box sx={{ width: '6em', mb: '0.5em' }}>
                    <FormControl fullWidth>
                        <InputLabel id="id-sort-type">Sort</InputLabel>
                        <Select
                            labelId="id-sort-type"
                            id="id-sort-type-select"
                            value={searchParameterContext.sortType!}
                            label="Sort"
                            onChange={(e) =>
                                searchParameterContext.setSortType!(
                                    e.target.value as SortType
                                )
                            }
                        >
                            {Object.values(SortType)
                                .filter((v) => !isNaN(Number(v)))
                                .map((typeIdx) => (
                                    <MenuItem key={typeIdx} value={typeIdx}>
                                        {SortType[
                                            Number(typeIdx)
                                        ].toLocaleLowerCase()}
                                    </MenuItem>
                                ))}
                        </Select>
                    </FormControl>
                </Box>
            </Box>
            <Divider />
        </Box>
    )
}
