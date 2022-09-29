import React from 'react'
import { UserSettingsLayout } from '../../modules/user/layouts/UserSettingLayout'
import { NextPageWithNestedLayout } from '../_app'

const Email: NextPageWithNestedLayout = () => {
    return <>Email</>
}

Email.getNestedLayout = (page) => {
    return (
        <UserSettingsLayout title="Email Settings">{page}</UserSettingsLayout>
    )
}

export default Email
