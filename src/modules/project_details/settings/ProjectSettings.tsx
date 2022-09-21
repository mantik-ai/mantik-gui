import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { Stack, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { useGetProjectsProjectId } from '../../../common/queries'
import { GeneralSettings } from './GeneralSettings'
import { CollaborationSettings } from './CollaborationSettings'

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

const ProjectSettings = () => {
    const [tabValue, setTabValue] = React.useState(0)

    const onTabChange = (event: React.SyntheticEvent, newValue: number) =>
        setTabValue(newValue)
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Typography fontSize="2rem" fontWeight="500" pb={2}>
                    Project Settings
                </Typography>

                <Tabs value={tabValue} onChange={onTabChange}>
                    <Tab label="general" />
                    <Tab label="collaboration" />
                </Tabs>
            </Box>
            <TabPanel value={tabValue} index={0}>
                <GeneralSettings />
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
                <CollaborationSettings />
            </TabPanel>
        </Box>
    )
}

export default ProjectSettings
