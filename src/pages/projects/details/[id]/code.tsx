import React from 'react'
import { NextPageWithNestedLayout } from '../../../_app'
import { DetailsLayout } from '../../../../modules/project_details/layouts/DetailsLayout'
import { CodeRepositoryOverview } from '../../../../modules/project_details/code/CodeRepositoryOverview'

const CodeDetails: NextPageWithNestedLayout = () => {
    return <CodeRepositoryOverview></CodeRepositoryOverview>
}

CodeDetails.getNestedLayout = (page) => {
    return <DetailsLayout>{page}</DetailsLayout>
}

export default CodeDetails
