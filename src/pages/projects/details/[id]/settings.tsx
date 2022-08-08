import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { Button, Stack, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import CollaborationDialog, {
    CollaborationDialogType,
} from '../../../../common/components/CollaborationDialog'
import { useGetProjectsProjectId } from '../../../../common/queries'

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

const Settings = () => {
    const router = useRouter()
    const { id } = router.query
    const [value, setValue] = React.useState(0)
    const [open, setOpen] = React.useState(false)
    const [dialogType, setDialogType] =
        React.useState<CollaborationDialogType>()

    const { data, error, status } = useGetProjectsProjectId(
        Number(typeof id === 'number' ? id : 1234)
    )

    const handleClose = () => setOpen(false)
    const onTabChange = (event: React.SyntheticEvent, newValue: number) =>
        setValue(newValue)

    return (
        <div>
            <Box p={4} sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Typography fontSize="2rem" fontWeight="500">
                        Settings
                    </Typography>
                    <Tabs value={value} onChange={onTabChange}>
                        <Tab label="collaboration" />
                        <Tab label="credentials" />
                        <Tab label="repositories" />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <div>
                        <Typography variant={'h5'}>Owner</Typography>
                        <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <Typography variant={'body1'}>
                                The project is currently owned by:{' '}
                            </Typography>
                            <Button
                                variant="outlined"
                                onClick={() => {
                                    setDialogType(CollaborationDialogType.OWNER)
                                    setOpen(true)
                                }}
                            >
                                Change Owner
                            </Button>
                        </Stack>
                    </div>

                    <div>
                        <Typography variant={'h5'}>Groups</Typography>
                        <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <Typography variant={'body1'}>
                                No usergroups added yet.
                            </Typography>
                            <Button
                                variant="outlined"
                                onClick={() => {
                                    setDialogType(
                                        CollaborationDialogType.GROUPS
                                    )
                                    setOpen(true)
                                }}
                            >
                                Edit Groups
                            </Button>
                        </Stack>
                    </div>

                    <div>
                        <Typography variant={'h5'}>Members</Typography>
                        <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <Typography variant={'body1'}>
                                No members added yet.
                            </Typography>
                            <Button
                                variant="outlined"
                                onClick={() => {
                                    setDialogType(
                                        CollaborationDialogType.MEMBERS
                                    )
                                    setOpen(true)
                                }}
                            >
                                Edit Members
                            </Button>
                        </Stack>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>
            </Box>
            <CollaborationDialog
                dialogType={dialogType}
                isOpen={open}
                handleClose={handleClose}
            />
        </div>
    )
}

export default Settings
