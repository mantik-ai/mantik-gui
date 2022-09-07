import React from 'react'
import { NextPageWithNestedLayout } from '../../../_app'
import { DetailsLayout } from '../../../../modules/project_details/layouts/DetailsLayout'
import ProjectSettings from '../../../../modules/project_details/settings/ProjectSettings'

const SettingsDetails: NextPageWithNestedLayout = () => {
    return <ProjectSettings />
}

SettingsDetails.getNestedLayout = (page) => {
    return <DetailsLayout>{page}</DetailsLayout>
}

export default SettingsDetails
