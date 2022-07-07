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
            <Typography fontSize={'72px'} fontWeight={700} letterSpacing={0.46}>
                MantikUI
            </Typography>

            <Typography
                fontSize={'24px'}
                fontWeight={300}
                letterSpacing={0.46}
                textAlign={'center'}
            >
                Enhance the AI Modeler&apos;s life,
                <br />
                by solving BIG problems.
            </Typography>

            <Stack spacing={4} direction={{ xs: 'column', sm: 'row' }}>
                <Button
                    className={'btn'}
                    style={{
                        color: 'white',
                        minWidth: '260px',
                    }}
                    endIcon={<ArrowForwardIcon />}
                    color="primary"
                    variant="contained"
                >
                    TRY IT OUT
                </Button>
                <Button
                    className={'btn'}
                    style={{
                        minWidth: '260px',
                    }}
                    endIcon={<PersonOutlineIcon />}
                    color="primary"
                    variant="outlined"
                >
                    SIGN UP
                </Button>
            </Stack>
        </Stack>
    )
}

export default Home
