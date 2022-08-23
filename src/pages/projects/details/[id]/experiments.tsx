import React from 'react'
import { NextPageWithNestedLayout } from '../../../_app'
import { DetailsLayout } from '../../../../modules/project_details/layouts/DetailsLayout'

const ExperimentsDetails: NextPageWithNestedLayout = () => {
    return <div></div>
}

ExperimentsDetails.getNestedLayout = (page) => {
    return <DetailsLayout>{page}</DetailsLayout>
}

export default ExperimentsDetails
