import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Box from '@mui/material/Box'
import {
    Autocomplete,
    CircularProgress,
    Paper,
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
import { DetailsToolbar } from '../../../common/components/DetailsToolbar'

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
            <DetailsToolbar
                title={'Data Repository Settings'}
                tool={
                    <Autocomplete
                        disablePortal
                        loading={status === 'loading'}
                        options={data?.data.dataRepositories ?? []}
                        getOptionLabel={(repo) => repo.dataRepositoryName ?? ''}
                        sx={{ width: 400, py: 4 }}
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
                }
            />
            {selectedDataRepository && (
                <Paper sx={{ mt: 4, p: 1 }}>
                    <Stack px={3}>
                        <EditTextContainer
                            title={'Name'}
                            data={newData.dataRepositoryName ?? ''}
                            onSave={(dataRepositoryName) =>
                                setNewData({ ...newData, dataRepositoryName })
                            }
                        />
                        <EditTextContainer
                            title={'Description'}
                            data={newData.description ?? ''}
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
                            title={
                                'Access Token (for private data repositories)'
                            }
                            data={newData.description ?? ''}
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
                            onSave={(labels) =>
                                setNewData({ ...newData, labels })
                            }
                        />
                    </Stack>
                </Paper>
            )}
        </Box>
    )
}
