import { Stack, Switch, Typography } from '@mui/material'
import * as React from 'react'
import { useContext } from 'react'
import EditTextContainer from './components/EditTextContainer'
import EditLabelsContainer from './components/EditLabelsContainer'
import ProjectSettingsContext from './contexts/ProjectSettingsContext'
import EditOwnerContainer from './components/EditOwnerContainer'

export const GeneralSettings = () => {
    const context = useContext(ProjectSettingsContext)
    return (
        <>
            <EditTextContainer
                title={'Project Name'}
                data={context.settings?.name}
                onSave={(name) => context.setName(name)}
            />
            <EditTextContainer
                title={'Executive Summary (for Teaser)'}
                data={context.settings?.executiveSummary}
                onSave={(summary) => context.setSummary(summary)}
            />
            <EditLabelsContainer
                title={'Labels'}
                message={'Add or remove labels for the project.'}
                labels={context.settings?.labels ?? []}
                onSave={(labels) => context.setLabels(labels)}
            />
            <EditOwnerContainer />
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
                    <Switch
                        color="primary"
                        checked={context.settings?.public}
                        onChange={(e) =>
                            context.setIsPublic(e.target.value === 'on')
                        }
                    />
                    <Typography>public</Typography>
                </Stack>
            </div>
        </>
    )
}
