import React from 'react'
import { NextPageWithNestedLayout } from '../../../_app'
import { DetailsLayout } from '../../../../modules/project_details/layouts/DetailsLayout'

const CodeDetails: NextPageWithNestedLayout = () => {
    return <div></div>
}

CodeDetails.getNestedLayout = (page) => {
    return <DetailsLayout>{page}</DetailsLayout>
}

export default CodeDetails
