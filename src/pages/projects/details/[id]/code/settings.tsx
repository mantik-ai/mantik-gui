import React from 'react'
import { NextPageWithNestedLayout } from '../../../../_app'
import { CodeRepositorySettings } from '../../../../../modules/project_details/settings/CodeRepositorySettings'
import { DetailsLayout } from '../../../../../modules/project_details/layouts/DetailsLayout'

const CodeSettings: NextPageWithNestedLayout = () => {
    return <CodeRepositorySettings />
}

CodeSettings.getNestedLayout = (page) => {
    return <DetailsLayout>{page}</DetailsLayout>
}

export default CodeSettings
