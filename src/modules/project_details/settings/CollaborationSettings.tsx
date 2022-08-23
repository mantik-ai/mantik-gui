import { Button, Stack, Typography } from '@mui/material'
import * as React from 'react'

export const CollaborationSettings = () => {
    return (
        <>
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
                    <Button variant="outlined" onClick={() => {}}>
                        Change Owner
                    </Button>
                </Stack>
            </div>

            <div>
                <Typography variant={'h5'}>Groups</Typography>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Typography variant={'body1'}>
                        No usergroups added yet.
                    </Typography>
                    <Button variant="outlined" onClick={() => {}}>
                        Edit Groups
                    </Button>
                </Stack>
            </div>

            <div>
                <Typography variant={'h5'}>Members</Typography>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Typography variant={'body1'}>
                        No members added yet.
                    </Typography>
                    <Button variant="outlined" onClick={() => {}}>
                        Edit Members
                    </Button>
                </Stack>
            </div>
        </>
    )
}
