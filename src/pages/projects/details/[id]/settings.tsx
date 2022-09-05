import React from 'react'
import { NextPageWithNestedLayout } from '../../../_app'
import { DetailsLayout } from '../../../../modules/project_details/layouts/DetailsLayout'
import SettingsOverview from '../../../../modules/project_details/settings/SettingsOverview'

const SettingsDetails: NextPageWithNestedLayout = () => {
    return <SettingsOverview></SettingsOverview>
}

SettingsDetails.getNestedLayout = (page) => {
    return <DetailsLayout>{page}</DetailsLayout>
}

export default SettingsDetails
