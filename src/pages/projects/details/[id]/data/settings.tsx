import React from 'react'
import { NextPageWithNestedLayout } from '../../../../_app'
import { DetailsLayout } from '../../../../../modules/project_details/layouts/DetailsLayout'
import { DataRepositorySettings } from "../../../../../modules/project_details/settings/DataRepositorySettings";

const DataSettings: NextPageWithNestedLayout = () => {
    return <DataRepositorySettings></DataRepositorySettings>
}

DataSettings.getNestedLayout = (page) => {
    return <DetailsLayout>{page}</DetailsLayout>
}

export default DataSettings
