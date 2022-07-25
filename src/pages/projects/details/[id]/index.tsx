import React from 'react'
import { useRouter } from 'next/router'
import { NextPageWithNestedLayout } from '../../../_app'
import { DetailsLayout } from '../../../../modules/project_details/layouts/DetailsLayout'
import { DetailsOverview } from '../../../../modules/project_details/overview/components/DetailsOverview'

const ProjectDetails: NextPageWithNestedLayout = () => {
    const router = useRouter()
    const { id } = router.query

    return <DetailsOverview></DetailsOverview>
}

ProjectDetails.getNestedLayout = (page) => {
    return <DetailsLayout>{page}</DetailsLayout>
}

export default ProjectDetails
