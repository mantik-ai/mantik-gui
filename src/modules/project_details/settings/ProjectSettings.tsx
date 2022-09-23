import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { Paper, Stack, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { useGetProjectsProjectId } from '../../../common/queries'
import { GeneralSettings } from './GeneralSettings'
import { CollaborationSettings } from './CollaborationSettings'
import { DetailsToolbar } from '../../../common/components/DetailsToolbar'

interface TabPanelProps {
    children?: React.ReactNode
    index: number
    value: number
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props

    return (
        <div hidden={value !== index} id={`settings-${index}`} {...other}>
            {value === index && <Stack sx={{ p: 3 }}>{children}</Stack>}
        </div>
    )
}

const ProjectSettings = () => {
    const [tabValue, setTabValue] = React.useState(0)

    const onTabChange = (event: React.SyntheticEvent, newValue: number) =>
        setTabValue(newValue)
    return (
        <>
            <DetailsToolbar
                title={'Project Settings'}
                tool={<></>}
            ></DetailsToolbar>
            <Paper sx={{ mt: 4 }}>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
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
            </Paper>
        </>
    )
}

export default ProjectSettings
