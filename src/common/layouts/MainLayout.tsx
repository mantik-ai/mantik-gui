import React from 'react'
import { Box } from '@mui/material'
import { Footer } from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import { Route } from '../types/route'

const routes: Route[] = [
    { name: 'About', path: '/about', positions: ['navbar', 'drawer'] },
    { name: 'Docs', path: '/docs', positions: ['navbar', 'drawer'] },
    { name: 'Projects', path: '/projects', positions: ['navbar', 'drawer'] },
    { name: 'Contact', path: '/contact', positions: ['footer', 'drawer'] },
    { name: 'Privacy', path: '/privacy', positions: ['footer', 'drawer'] },
    { name: 'Imprint', path: '/imprint', positions: ['footer', 'drawer'] },
]

interface MainLayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<MainLayoutProps> = (props) => {
    return (
        <>
            <Box
                style={{
                    position: 'relative',
                    height: '100vh',
                    display: 'flex',
                    flexFlow: 'column',
                }}
            >
                <Navbar routes={routes} />
                {props.children}
                <Footer routes={routes} />
            </Box>
        </>
    )
}

export default Layout
