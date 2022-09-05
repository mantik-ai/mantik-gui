import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import {
    Autocomplete,
    CircularProgress,
    Stack,
    TextField,
    Typography,
} from '@mui/material'
import { useRouter } from 'next/router'
import { useGetProjectsProjectIdCode } from '../../../common/queries'
import { GeneralSettings } from './GeneralSettings'
import { CollaborationSettings } from './CollaborationSettings'
import { DataSettings } from './DataSettings'

interface TabPanelProps {
    children?: React.ReactNode
    index: number
    value: number
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props

    return (
        <div hidden={value !== index} id={`settings-${index}`} {...other}>
            {value === index && (
                <Stack sx={{ p: 3 }} gap={4}>
                    {children}
                </Stack>
            )}
        </div>
    )
}

function CodeSettings() {
    return null
}

const SettingsOverview = () => {
    const router = useRouter()
    const { id } = router.query
    const { data, status } = useGetProjectsProjectIdCode(Number(id))
    const [value, setValue] = React.useState(0)
    const onTabChange = (event: React.SyntheticEvent, newValue: number) =>
        setValue(newValue)

    console.log('data: ', data)
    console.log('status: ', status)

    // const [open, setOpen] = React.useState(false)
    // const [dialogType, setDialogType] = React.useState<CollaborationDialogType>(
    //     CollaborationDialogType.MEMBERS
    // )
    //
    // const handleClose = () => setOpen(false)

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Stack
                    direction={'row'}
                    alignItems={'center'}
                    gap={'1rem'}
                    pb={2}
                >
                    <Typography fontSize="2rem" fontWeight="500">
                        Settings for
                    </Typography>
                    <Autocomplete
                        disablePortal
                        loading={false}
                        sx={{ width: 300, py: 4 }}
                        options={data?.data.codeRepositories}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Repository"
                                size="small"
                                InputProps={{
                                    ...params.InputProps,
                                    endAdornment: (
                                        <>
                                            {true ? (
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

                <Tabs value={value} onChange={onTabChange}>
                    <Tab label="general" />
                    <Tab label="collaboration" />
                    <Tab label="data" />
                    <Tab label="code" />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <GeneralSettings />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <CollaborationSettings />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <DataSettings />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <CodeSettings />
            </TabPanel>
        </Box>
    )
}

export default SettingsOverview
