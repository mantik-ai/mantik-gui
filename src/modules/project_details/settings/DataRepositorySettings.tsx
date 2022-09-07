import React from 'react'
import { useRouter } from 'next/router'
import Box from '@mui/material/Box'
import {
    Autocomplete,
    CircularProgress,
    Stack,
    TextField,
    Typography,
} from '@mui/material'
import { useGetProjectsProjectIdData } from '../../../common/queries'

export const DataRepositorySettings = () => {
    const router = useRouter()
    const { id } = router.query
    const { data, status } = useGetProjectsProjectIdData(id as string)

    return (
        <Box sx={{ width: '100%' }}>
            <Stack direction={'row'} alignItems={'center'} gap={'1rem'} pb={2}>
                <Typography fontSize="2rem" fontWeight="500">
                    Settings for
                </Typography>
                <Autocomplete
                    disablePortal
                    loading={status === 'loading'}
                    options={data?.data.dataRepositories ?? []}
                    getOptionLabel={(repo) => repo.dataRepositoryName ?? ''}
                    sx={{ width: 300, py: 4 }}
                    onChange={() => {}}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Data Repository"
                            size="small"
                            InputProps={{
                                ...params.InputProps,
                                endAdornment: (
                                    <>
                                        {status === 'loading' ? (
                                            <CircularProgress
                                                color="inherit"
                                                size={16}
                                            />
                                        ) : null}
                                        {params.InputProps.endAdornment}
                                    </>
                                ),
                            }}
                        />
                    )}
                />
            </Stack>
        </Box>
    )
}
