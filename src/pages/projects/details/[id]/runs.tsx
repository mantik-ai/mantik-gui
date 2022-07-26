import React from 'react'
import { NextPageWithNestedLayout } from '../../../_app'
import { DetailsLayout } from '../../../../modules/project_details/layouts/DetailsLayout'
import { DetailsRunsTable } from '../../../../modules/project_details/runs/DetailsRunsTable'

const RunsDetails: NextPageWithNestedLayout = () => {
    return <DetailsRunsTable></DetailsRunsTable>
}

RunsDetails.getNestedLayout = (page) => {
    return <DetailsLayout>{page}</DetailsLayout>
}

export default RunsDetails
