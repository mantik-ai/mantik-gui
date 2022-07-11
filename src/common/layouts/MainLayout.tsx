import React from 'react'
import styled from '@emotion/styled'
import { Footer } from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import { Route } from '../types/route'

const Content = styled.main`
    height: 100%;
    position: relative;
`

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
            <Content
                style={{
                    height: '100vh',
                    display: 'flex',
                    flexFlow: 'column',
                }}
            >
                <Navbar routes={routes} />
                {props.children}
                <Footer routes={routes} />
            </Content>
        </>
    )
}

export default Layout
