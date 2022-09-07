import React from 'react'
import { NextPageWithNestedLayout } from '../../../_app'
import { DetailsLayout } from '../../../../modules/project_details/layouts/DetailsLayout'
import { DataRepositoriesOverview } from '../../../../modules/project_details/data/DataRepositoriesOverview'

const DataDetails: NextPageWithNestedLayout = () => {
    return <DataRepositoriesOverview />
}

DataDetails.getNestedLayout = (page) => {
    return <DetailsLayout>{page}</DetailsLayout>
}

export default DataDetails
