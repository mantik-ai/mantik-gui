import React from 'react'
import { NextPageWithNestedLayout } from '../../../_app'
import { DetailsLayout } from '../../../../modules/project_details/layouts/DetailsLayout'

const SettingsDetails: NextPageWithNestedLayout = () => {
    return <div></div>
}

SettingsDetails.getNestedLayout = (page) => {
    return <DetailsLayout>{page}</DetailsLayout>
}

export default SettingsDetails
