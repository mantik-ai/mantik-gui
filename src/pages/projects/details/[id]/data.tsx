import React from 'react'
import { NextPageWithNestedLayout } from '../../../_app'
import { DetailsLayout } from '../../../../modules/project_details/layouts/DetailsLayout'
import { DetailsDataTable } from '../../../../modules/project_details/data/DetailsDataTable'

const CodeDetails: NextPageWithNestedLayout = () => {
    return <DetailsDataTable></DetailsDataTable>
}

CodeDetails.getNestedLayout = (page) => {
    return <DetailsLayout>{page}</DetailsLayout>
}

export default CodeDetails
