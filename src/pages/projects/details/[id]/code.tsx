import React from 'react'
import { NextPageWithNestedLayout } from '../../../_app'
import { DetailsLayout } from '../../../../modules/project_details/layouts/DetailsLayout'
import { DetailsModelTable } from '../../../../modules/project_details/code/DetailsModelTable'

const CodeDetails: NextPageWithNestedLayout = () => {
    return <DetailsModelTable></DetailsModelTable>
}

CodeDetails.getNestedLayout = (page) => {
    return <DetailsLayout>{page}</DetailsLayout>
}

export default CodeDetails
