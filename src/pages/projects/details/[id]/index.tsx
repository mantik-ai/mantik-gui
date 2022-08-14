import React from 'react'
import { NextPageWithNestedLayout } from '../../../_app'
import { DetailsLayout } from '../../../../modules/project_details/layouts/DetailsLayout'
import { DetailsOverview } from '../../../../modules/project_details/overview/DetailsOverview'

const ProjectDetails: NextPageWithNestedLayout = () => {
    return <DetailsOverview></DetailsOverview>
}

ProjectDetails.getNestedLayout = (page) => {
    return <DetailsLayout>{page}</DetailsLayout>
}

export default ProjectDetails
