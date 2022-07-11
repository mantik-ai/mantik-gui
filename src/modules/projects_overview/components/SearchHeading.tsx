import {
    Box,
    Divider,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Typography,
} from '@mui/material'
import React from 'react'

interface SearchHeadingProps {
    children: React.ReactNode
}
export const SearchHeading = (props: SearchHeadingProps) => {
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
                        <InputLabel id="demo-simple-select-label">
                            Sort
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={age}
                            label="Sort"
                            // onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>
            <Divider />
        </Box>
    )
}
