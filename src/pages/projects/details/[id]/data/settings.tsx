import React from 'react'
import { NextPageWithNestedLayout } from '../../../../_app'
import { DetailsLayout } from '../../../../../modules/project_details/layouts/DetailsLayout'

const DataSettings: NextPageWithNestedLayout = () => {
    return <></>
}

DataSettings.getNestedLayout = (page) => {
    return <DetailsLayout>{page}</DetailsLayout>
}

export default DataSettings
