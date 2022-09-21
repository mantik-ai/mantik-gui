import { Stack, Typography } from '@mui/material'
import * as React from 'react'
import { useContext } from 'react'
//@Todo change useGetUsers to useGetUsersSearch
import {
    useGetUsers,
    User,
} from '../../../../common/queries'
import ProjectSettingsContext from '../contexts/ProjectSettingsContext'
import EditButton from './EditButton'
import { CollaborationDialog } from './CollaborationDialog'

export default function EditOwnerContainer() {
    const context = useContext(ProjectSettingsContext)
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <div>
            <Typography variant={'h5'}>Project Owner</Typography>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
            >
                <Typography variant={'body1'} ml={"14px"}>
                    The project is currently owned by{' '}
                    <b>{context.settings?.owner.name}</b>
                </Typography>
                <EditButton onEdit={() => setIsOpen(true)} />
            </Stack>
            <CollaborationDialog
                title={'Change Owner'}
                message={
                    'Please select a user to designate as the owner of this project. Please be aware that this action can only be undone by the new owner.'
                }
                open={isOpen}
                multiple={false}
                onClose={() => setIsOpen(false)}
                onSave={(users) => context.setOwner(users)}
                queryHook={useGetUsers}
                autocompleteSelector={(user: User) => user.name}
                autocompleteOptions={(option) => option?.data.users ?? []}
            />
        </div>
    )
}
