import React from 'react'
import { NextPageWithNestedLayout } from '../../../_app'
import { DetailsLayout } from '../../../../modules/project_details/layouts/DetailsLayout'
import { ModelRepositoriesOverview } from '../../../../modules/project_details/models/ModelRepositoriesOverview'

const ModelDetails: NextPageWithNestedLayout = () => {
    return <ModelRepositoriesOverview />
}

ModelDetails.getNestedLayout = (page) => {
    return <DetailsLayout>{page}</DetailsLayout>
}

export default ModelDetails
