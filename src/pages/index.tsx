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
            sx={{
                backgroundImage: {
                    md: 'url(/images/balloon.svg), url(/images/cloud1.svg), url(/images/cloud2.svg), url(/images/cloud3.svg), url(/images/cloud4.svg)',
                    sm: 'url(/images/balloon.svg), url(/images/cloud1.svg), url(/images/cloud2.svg), url(/images/cloud4.svg)',
                    xs: 'url(/images/balloon.svg), url(/images/cloud1.svg)',
                },
                backgroundRepeat: 'no-repeat',
                backgroundPosition: {
                    lg: 'bottom 0 right 30%, top 12% left -90px, bottom 0 left 16%, top 6% right 40%, right 2% bottom 55%',
                    md: 'bottom 0 right 30%, top 16% left -90px, bottom 8% left 16%, top 6% right 40%, right -15% bottom 65%',
                    sm: 'bottom 5% right 30%, top 7% left -90px, bottom 6% left 20%, right -15% top 32%',
                    xs: 'bottom 0 right 30%, top 12% left -90px',
                },
            }}
        >
            <Typography variant="h1">Mantik</Typography>

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
                    href={'/register'}
                >
                    register
                </Button>
            </Stack>
        </Stack>
    )
}

export default Home
