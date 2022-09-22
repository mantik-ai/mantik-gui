import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Box from '@mui/material/Box'
import {
    Autocomplete,
    CircularProgress,
    Stack,
    TextField,
    Typography,
} from '@mui/material'
import {
    DataRepository,
    useGetProjectsProjectIdData,
} from '../../../common/queries'
import EditTextContainer from './components/EditTextContainer'
import EditLabelsContainer from './components/EditLabelsContainer'

export const DataRepositorySettings = () => {
    const router = useRouter()
    const { id } = router.query
    const { data, status } = useGetProjectsProjectIdData(id as string)
    const [selectedDataRepository, setSelectedDataRepository] =
        useState<DataRepository | null>()
    const [newData, setNewData] = useState<DataRepository>({
        accessToken: '',
        dataRepositoryId: '',
        dataRepositoryName: '',
        description: '',
        labels: [],
        uri: '',
    })

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
                    onChange={(_, value) => {
                        setSelectedDataRepository(value)
                        value && setNewData(value)
                    }}
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
            {selectedDataRepository && (
                <Stack px={3} gap={4}>
                    <EditTextContainer
                        title={'Name'}
                        data={newData.dataRepositoryName ?? ""}
                        onSave={(dataRepositoryName) =>
                            setNewData({ ...newData, dataRepositoryName })
                        }
                    />
                    <EditTextContainer
                        title={'Description'}
                        data={newData.description ?? ""}
                        onSave={(description) =>
                            setNewData({ ...newData, description })
                        }
                    />
                    <EditTextContainer
                        title={'URL'}
                        data={newData.uri}
                        onSave={(uri) => setNewData({ ...newData, uri })}
                    />
                    <EditTextContainer
                        title={'Access Token (for private data repositories)'}
                        data={newData.description ?? ""}
                        onSave={(accessToken) =>
                            setNewData({ ...newData, accessToken })
                        }
                    />
                    <EditLabelsContainer
                        title={'Labels'}
                        message={
                            'Add or remove labels for this data repository'
                        }
                        labels={newData.labels ?? []}
                        onSave={(labels) => setNewData({ ...newData, labels })}
                    />
                </Stack>
            )}
        </Box>
    )
}
