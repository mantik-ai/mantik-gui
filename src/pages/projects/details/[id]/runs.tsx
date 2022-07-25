import React from 'react'
import { useRouter } from 'next/router'
import { NextPageWithNestedLayout } from '../../../_app'
import { DetailsLayout } from '../../../../modules/project_details/layouts/DetailsLayout'
import { Box, Tab, Tabs } from '@mui/material'
import { DetailsRunsTable } from '../../../../modules/project_details/runs/DetailsRunsTable'

const RunsDetails: NextPageWithNestedLayout = () => {
    const router = useRouter()
    const { id } = router.query

    return <DetailsRunsTable></DetailsRunsTable>
}

RunsDetails.getNestedLayout = (page) => {
    return <DetailsLayout>{page}</DetailsLayout>
}

export default RunsDetails
