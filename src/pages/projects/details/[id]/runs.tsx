import React from 'react'
import { NextPageWithNestedLayout } from '../../../_app'
import { DetailsLayout } from '../../../../modules/project_details/layouts/DetailsLayout'
import { DetailsRunsTable } from '../../../../modules/project_details/runs/DetailsRunsTable'
import { RunDialogProvider } from '../../../../modules/project_details/runs/contexts/RunDialogContext'

const RunsDetails: NextPageWithNestedLayout = () => {
    return <DetailsRunsTable></DetailsRunsTable>
}

RunsDetails.getNestedLayout = (page) => {
    return (
        <DetailsLayout>
            <RunDialogProvider>{page}</RunDialogProvider>
        </DetailsLayout>
    )
}

export default RunsDetails
