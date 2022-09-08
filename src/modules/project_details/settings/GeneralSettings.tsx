import { Button, Stack, Switch, Typography } from '@mui/material'
import * as React from 'react'

export const GeneralSettings = () => {
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
                    <Button variant="outlined" onClick={() => {}}>
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
        </>
    )
}
