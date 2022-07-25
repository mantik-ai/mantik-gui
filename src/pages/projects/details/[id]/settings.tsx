import React from 'react'
import { useRouter } from 'next/router'
import { NextPageWithNestedLayout } from '../../../_app'
import { DetailsLayout } from '../../../../modules/project_details/layouts/DetailsLayout'

const SettingsDetails: NextPageWithNestedLayout = () => {
    const router = useRouter()
    const { id } = router.query

    return <div></div>
}

SettingsDetails.getNestedLayout = (page) => {
    return <DetailsLayout>{page}</DetailsLayout>
}

export default SettingsDetails
