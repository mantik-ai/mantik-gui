import * as React from 'react'
import EditUserGroupsContainer from './components/EditUserGroupsContainer'
import EditUserContainer from './components/EditUsersContainer'
import { Spacing } from '../../../common/components/Spacing'
import { useTheme } from '@mui/material'

export const CollaborationSettings = () => {
    const theme = useTheme()

    return (
        <>
            <EditUserGroupsContainer />
            <Spacing value={theme.spacing(4)} />
            <EditUserContainer />
        </>
    )
}
