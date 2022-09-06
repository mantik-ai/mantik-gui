import React from 'react'
import { NextPageWithNestedLayout } from '../../../_app'
import { DetailsLayout } from '../../../../modules/project_details/layouts/DetailsLayout'
import { CodeRepositoriesOverview } from '../../../../modules/project_details/code/CodeRepositoriesOverview'

const CodeDetails: NextPageWithNestedLayout = () => {
    return <CodeRepositoriesOverview />
}

CodeDetails.getNestedLayout = (page) => {
    return <DetailsLayout>{page}</DetailsLayout>
}

export default CodeDetails
