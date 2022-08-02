import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { Button, Stack, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import AddUserDialog from '../../../../common/components/AddUserDialog'

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
    const [dialogContent, setDialogContent] = React.useState({
        title: '',
        message: '',
        buttonText: '',
    })

    const handleClickOpen = (
        title: string,
        message: string,
        buttonText: string
    ) => {
        setDialogContent({ title, message, buttonText })
        setOpen(true)
    }
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
                                The project is currently owned by: You
                            </Typography>
                            <Button
                                variant="outlined"
                                onClick={() =>
                                    handleClickOpen(
                                        'Change Owner',
                                        `Please select a user to designate him as the owner of project "${id}".`,
                                        'Change Owner'
                                    )
                                }
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
                                onClick={() =>
                                    handleClickOpen(
                                        'Edit Groups',
                                        `Search for usergroups you want to invite collaborating on the project. Removing usergroups has no effect on individual members added separately.`,
                                        'Edit Groups'
                                    )
                                }
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
                                onClick={() =>
                                    handleClickOpen(
                                        'Edit Members',
                                        `Search for users you want to invite to the project or remove them from the list of members.`,
                                        'Edit Members'
                                    )
                                }
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
            <AddUserDialog
                title={dialogContent.title}
                message={dialogContent.message}
                buttonText={dialogContent.buttonText}
                isOpen={open}
                handleClose={handleClose}
            />
        </div>
    )
}

export default Settings
