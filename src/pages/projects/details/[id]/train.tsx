import React from 'react'
import { NextPageWithNestedLayout } from '../../../_app'
import { DetailsLayout } from '../../../../modules/project_details/layouts/DetailsLayout'
import { TrainModelOverview } from '../../../../modules/project_details/train/TrainModelOverview'

const TrainModelDetails: NextPageWithNestedLayout = () => {
    return <TrainModelOverview />
}

TrainModelDetails.getNestedLayout = (page) => {
    return <DetailsLayout>{page}</DetailsLayout>
}

export default TrainModelDetails
