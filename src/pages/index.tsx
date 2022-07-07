import React from 'react'
import type { NextPage } from 'next'
import { Button, Stack, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'

const Home: NextPage = () => {
    return (
        <Stack
            alignItems={'center'}
            justifyContent={'center'}
            flexGrow={1}
            spacing={4}
        >
            <Typography variant="h1">MantikUI</Typography>

            <Typography variant="h4" textAlign="center">
                Enhance the AI Modeler&apos;s life,
                <br />
                by solving BIG problems.
            </Typography>

            <Stack spacing={4} direction={{ xs: 'column', sm: 'row' }}>
                <Button
                    style={{
                        color: 'white',
                        minWidth: '260px',
                    }}
                    endIcon={<ArrowForwardIcon />}
                    color="primary"
                    variant="contained"
                >
                    try it out
                </Button>
                <Button
                    style={{
                        minWidth: '260px',
                    }}
                    endIcon={<PersonOutlineIcon />}
                    color="primary"
                    variant="outlined"
                >
                    sign up
                </Button>
            </Stack>
        </Stack>
    )
}

export default Home
