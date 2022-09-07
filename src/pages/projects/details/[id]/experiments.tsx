import React from 'react'
import { NextPageWithNestedLayout } from '../../../_app'
import { DetailsLayout } from '../../../../modules/project_details/layouts/DetailsLayout'
import { ExperimentsOverview } from '../../../../modules/project_details/experiments/ExperimentsOverview'

const ExperimentsDetails: NextPageWithNestedLayout = () => {
    return <ExperimentsOverview></ExperimentsOverview>
}

ExperimentsDetails.getNestedLayout = (page) => {
    return <DetailsLayout>{page}</DetailsLayout>
}

export default ExperimentsDetails
