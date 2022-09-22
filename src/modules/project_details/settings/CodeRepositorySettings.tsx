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
    CodeRepository,
    useGetProjectsProjectIdCode,
} from '../../../common/queries'
import EditTextContainer from './components/EditTextContainer'
import EditLabelsContainer from './components/EditLabelsContainer'

export const CodeRepositorySettings = () => {
    const router = useRouter()
    const { id } = router.query
    const { data, status } = useGetProjectsProjectIdCode(id as string)
    const [selectedCodeRepository, setSelectedCodeRepository] =
        useState<CodeRepository | null>()
    const [newData, setNewData] = useState<CodeRepository>({
        accessToken: '',
        codeRepositoryId: '',
        codeRepositoryName: '',
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
                    options={data?.data.codeRepositories ?? []}
                    getOptionLabel={(repo) => repo.codeRepositoryName ?? ''}
                    sx={{ width: 300, py: 4 }}
                    onChange={(_, value) => {
                        setSelectedCodeRepository(value)
                        value && setNewData(value)
                    }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Code Repository"
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
            {selectedCodeRepository && (
                <Stack px={3} gap={4}>
                    <EditTextContainer
                        title={'Name'}
                        data={newData.codeRepositoryName ?? ''}
                        onSave={(codeRepositoryName) =>
                            setNewData({ ...newData, codeRepositoryName })
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
                        title={'Access Token (for private code repositories)'}
                        data={newData.description ?? ''}
                        onSave={(accessToken) =>
                            setNewData({ ...newData, accessToken })
                        }
                    />
                    <EditLabelsContainer
                        title={'Labels'}
                        message={
                            'Add or remove labels for this code repository'
                        }
                        labels={newData.labels ?? []}
                        onSave={(labels) => setNewData({ ...newData, labels })}
                    />
                </Stack>
            )}
        </Box>
    )
}
