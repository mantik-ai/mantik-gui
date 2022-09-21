import { Stack, Typography } from '@mui/material'
import * as React from 'react'
import ChangeSettingsButton from './ChangeSettingsButton'
import { ChangeCollaborationDialog } from './ChangeCollaborationDialog'
import { useGetUsers, User } from "../../../common/queries";

export default function EditOwnerContainer() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <div>
            <Typography variant={'h5'}>Project Owner</Typography>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
            >

                <ChangeSettingsButton
                    onEdit={() => setIsOpen(true)}
                />
            </Stack>
            <ChangeCollaborationDialog
                title={"Change Owner"}
                message={"Please select a user to designate as the owner of this project. Please be aware that this action can only be undone by the new owner."}
                open={isOpen}
                multiple={false}
                onClose={() => setIsOpen(false)}
                queryHook={useGetUsers}
                autocompleteSelector={(user: User) => user.name}
                autocompleteOptions={(option) => option?.data.users ?? []}
            />
        </div>
    )
}
