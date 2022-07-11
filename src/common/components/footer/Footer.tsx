import React from 'react'
import {Box, IconButton, MenuItem, Stack, Typography} from '@mui/material'
import Link from 'next/link'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import GitHubIcon from '@mui/icons-material/GitHub'
import styled from '@emotion/styled'
import {useRouter} from "next/router";
import {NavbarProps} from '../../types/navbarProps'
import {Links} from '../../types/links'

const links: Links[] = [
    {url: '', icon: <InstagramIcon/>},
    {url: '', icon: <FacebookOutlinedIcon/>},
    {url: '', icon: <GitHubIcon/>},
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
    const router = useRouter();
    return router.asPath !== '/' ? null : (
        <FooterContainer>
            <Box
                component="img"
                sx={{
                    bottom: {lg: '-5%', xl: '-15%'},
                    width: {xs: '200%', sm: '150%', md: '100%'},
                    left: {xs: '-50%', sm: '-25%', md: 0},
                    position: 'relative',
                }}
                src="/images/footer.svg"
                alt="footer background"
            />
            <FooterNavigation color="primary.dark">
                <Typography
                    variant="h3"
                    color="primary.dark"
                    padding={'0 2rem'}
                >
                    MantikUI
                </Typography>
                <Stack
                    direction={'row'}
                    style={{height: '100%'}}
                    display={{xs: 'none', sm: 'flex'}}
                >
                    {props.routes
                        .filter((route) => route.positions.includes('footer'))
                        .map((route) => (
                            <Link href={route.path} key={route.name}>
                                <MenuItem>
                                    <Typography
                                        variant="h6"
                                        color="primary.dark"
                                    >
                                        {route.name}
                                    </Typography>
                                </MenuItem>
                            </Link>
                        ))}
                </Stack>
                <Stack direction={'row'}>
                    {links.map((link, index) => (
                        <IconButton
                            key={index}
                            href={link.url}
                            sx={{color: 'primary.dark'}}
                        >
                            {link.icon}
                        </IconButton>
                    ))}
                </Stack>
            </FooterNavigation>
        </FooterContainer>
    )
}
