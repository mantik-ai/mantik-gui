import { Box, Stack, Switch, Typography } from '@mui/material'
import * as React from 'react'
import { useContext } from 'react'
import { useGetUsers, User } from '../../../common/queries'
import EditTextContainer from './EditTextContainer'
import EditLabelsContainer from './EditLabelsContainer'
import EditCollaborationContainer from './EditCollaborationContainer'
import ProjectSettingsContext from './contexts/ProjectSettingsContext'

export const GeneralSettings = () => {
    const settings = useContext(ProjectSettingsContext)

    return (
        <>
            <EditTextContainer
                title={'Project Name'}
                buttonText={'Edit Name'}
                data={settings.name}
                onReset={() => settings.setName(settings.name)}
            />
            <EditTextContainer
                title={'Executive Summary (for Teaser)'}
                buttonText={'Edit Summary'}
                data={settings.executiveSummary}
            />
            <EditLabelsContainer
                title={'Labels'}
                buttonText={'Edit Labels'}
                message={'Add or remove labels for the project'}
            />
            <EditCollaborationContainer
                title={'Owner'}
                message={
                    'Please select a user to designate as the owner of this project. Please be aware that this action can only be undone by the new owner.'
                }
                data={
                    <Box ml={'14px'}>
                        The project is currently owned by{' '}
                        <b>{settings.owner?.name}</b>
                    </Box>
                }
                buttonText={'Change Owner'}
                multiple={false}
                queryHook={useGetUsers}
                autocompleteSelector={(user: User) => user.name}
                autocompleteOptions={(option) => option?.data.users ?? []}
            />
            <div>
                <Typography variant={'h5'}>Visibility</Typography>
                <Stack
                    direction="row"
                    spacing={1}
                    ml={'14px'}
                    mt={1}
                    alignItems="center"
                >
                    <Typography>private</Typography>
                    <Switch color="primary" />
                    <Typography>public</Typography>
                </Stack>
            </div>
        </>
    )
}
