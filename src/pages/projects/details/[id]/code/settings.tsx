import React from 'react'
import { NextPageWithNestedLayout } from '../../../../_app'
import { DetailsLayout } from '../../../../../modules/project_details/layouts/DetailsLayout'
import { CodeRepositorySettings } from "../../../../../modules/project_details/settings/CodeRepositorySettings";

const CodeSettings: NextPageWithNestedLayout = () => {
    return <CodeRepositorySettings></CodeRepositorySettings>
}

CodeSettings.getNestedLayout = (page) => {
    return <DetailsLayout>{page}</DetailsLayout>
}

export default CodeSettings
