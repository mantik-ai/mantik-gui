import { Button, Stack, Switch, Typography } from '@mui/material'
import * as React from 'react'
import useModal from '../../../common/hooks/useModal'
import { ChangeSettingsDialog } from '../../../common/components/ChangeSettingsDialog'
import { useGetUsers, User } from '../../../common/queries'

export const GeneralSettings = () => {
    const { toggle } = useModal()

    return (
        <>
            <div>
                <Typography variant={'h5'}>Project Name</Typography>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Typography variant={'body1'}>@Todo insert</Typography>
                    <Button variant="outlined" onClick={() => {}}>
                        Edit Name
                    </Button>
                </Stack>
            </div>
            <div>
                <Typography variant={'h5'}>Short Description</Typography>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Typography variant={'body1'}>@Todo insert</Typography>
                    <Button variant="outlined" onClick={() => {}}>
                        Edit Description
                    </Button>
                </Stack>
            </div>
            <div>
                <Typography variant={'h5'}>Labels</Typography>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Typography variant={'body1'}>@Todo insert</Typography>
                    <Button variant="outlined" onClick={() => {}}>
                        Edit Labels
                    </Button>
                </Stack>
            </div>
            <div>
                <Typography variant={'h5'}>Owner</Typography>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Typography variant={'body1'}>
                        The project is currently owned by:{' '}
                    </Typography>
                    <Button variant="outlined" onClick={() => toggle()}>
                        Change Owner
                    </Button>
                </Stack>
            </div>
            <div>
                <Typography variant={'h5'}>Visibility</Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                    <Typography>private</Typography>
                    <Switch checked={false} color="primary" />
                    <Typography>public</Typography>
                </Stack>
            </div>
            <ChangeSettingsDialog
                title={'Change Owner'}
                message={'Test'}
                buttonText={'Change Owner'}
                multiple={false}
                projectId={'fe02e72c-ea75-4d31-a154-381e83c6bf13'}
                onClose={() => {}}
                queryHook={useGetUsers}
                autocompleteSelector={(user: User) => user.name}
            />
        </>
    )
}
