import React from 'react'
import { NextPageWithNestedLayout } from '../../../_app'
import { DetailsLayout } from '../../../../modules/project_details/layouts/DetailsLayout'
import ProjectSettings from '../../../../modules/project_details/settings/ProjectSettings'
import { ProjectSettingsProvider } from '../../../../modules/project_details/settings/contexts/ProjectSettingsContext'

const SettingsDetails: NextPageWithNestedLayout = () => {
    return <ProjectSettings />
}

SettingsDetails.getNestedLayout = (page) => {
    return (
        <DetailsLayout>
            <ProjectSettingsProvider>{page}</ProjectSettingsProvider>
        </DetailsLayout>
    )
}

export default SettingsDetails
