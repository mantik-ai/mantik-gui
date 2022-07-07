import React from 'react'
import {Box, IconButton, MenuItem, Stack, Typography} from "@mui/material";
import Link from "next/link";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import {NavbarProps} from "../../types/navbarProps";
import {Links} from "../../types/links";

const links: Links[] = [
    {url: "", icon: <InstagramIcon/>},
    {url: "", icon: <FacebookOutlinedIcon/>},
    {url: "", icon: <GitHubIcon/>},
]

export const Footer = (props: NavbarProps) => {
    return <div id={'footer'}>
        <Box component="img" id={'footer-background'} sx={{bottom: {lg: "-5%", xl: "-15%"}, width: {xs: "200%", sm: "150%", md: "100%"}, left: {xs: "-50%", sm: "-25%", md: 0}}} src="/images/footer.svg" alt="footer background"/>
        <div id={'footer-content'}>
            <Typography fontSize={"24px"} fontWeight={700} padding={"0 2rem"}>MantikUI</Typography>
            <Stack direction={"row"} style={{height: "100%"}} display={{xs: "none", sm: "flex"}}>
                {props.routes.filter(route => route.positions.includes('footer')).map((route) => (
                    <Link href={route.path} key={route.name}>
                        <MenuItem>
                            <Typography
                                color="#2E598F"
                                fontWeight={400}
                                fontSize={20}
                                letterSpacing={0.46}
                                component="div"
                            >
                                {route.name}
                            </Typography>
                        </MenuItem>
                    </Link>
                ))}
            </Stack>
            <Stack direction={"row"}>
                {links.map((link, index) => (
                    <IconButton key={index} href={link.url}>
                        {link.icon}
                    </IconButton>
                ))}
            </Stack>
        </div>
    </div>
}
