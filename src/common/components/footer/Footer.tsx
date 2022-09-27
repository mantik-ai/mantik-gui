import React from 'react'
import { Box, Stack } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import GitHubIcon from '@mui/icons-material/GitHub'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { NavbarProps } from '../../types/navbarProps'
import { IconLinking } from '../../types/linking'

const sponsorImages = [
    { name: '4cast', src: '/sponsors/4cast.png' },
    { name: 'ambrosys-kiste', src: '/sponsors/ambrosys-kiste.png' },
    { name: 'eu', src: '/sponsors/eu.png' },
    { name: 'bmu', src: '/sponsors/bmu.png' },
    { name: 'eurohpc-maelstrom', src: '/sponsors/eurohpc-maelstrom.png' },
    { name: 'bmbf', src: '/sponsors/bmbf.png' },
]

const links: IconLinking[] = [
    { url: 'https://example.com/1', icon: <InstagramIcon /> },
    { url: 'https://example.com/2', icon: <FacebookOutlinedIcon /> },
    { url: 'https://example.com/3', icon: <GitHubIcon /> },
]

const FooterContainer = styled.div`
    width: 100%;
    position: relative;
    bottom: 0;
    left: 0;
    height: fit-content;
    line-height: 0;
    overflow: hidden;
`

const FooterNavigation = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-height: 60px;
    position: absolute;
    bottom: 0;
    left: 0;
`

export const Footer = (props: NavbarProps) => {
    const router = useRouter()
    return router.asPath === '/' ? (
        <FooterContainer>
            <Box
                component="img"
                sx={{
                    width: { xs: '200%', sm: '150%', md: '100%' },
                    left: { xs: '-50%', sm: '-25%', md: 0 },
                    position: 'relative',
                }}
                src="/images/footer.svg"
                alt="footer background"
            />
            <FooterNavigation color="primary.dark">
                <Stack
                    direction={'row'}
                    flexWrap={'wrap'}
                    alignItems={'center'}
                    width={'100%'}
                    pb={4}
                    justifyContent={'center'}
                    style={{ height: '100%' }}
                    display={{ xs: 'none', sm: 'flex' }}
                    spacing={6}
                >
                    {sponsorImages.map((image) => (
                        <Box
                            key={image.name}
                            component="img"
                            src={image.src}
                            alt={image.name}
                            height={{
                                xl: '90px',
                                lg: '75px',
                                xs: '60px',
                            }}
                        />
                    ))}
                </Stack>
            </FooterNavigation>
        </FooterContainer>
    ) : null
}
