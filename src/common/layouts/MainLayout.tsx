import React from 'react'
import styled from '@emotion/styled'
import { Footer } from '../components/footer/Footer'
import { Navbar } from '../components/navbar/Navbar'
import { Route } from '../types/route'

const Content = styled.main`
    height: 100%;
    position: relative;
`

const routes: Route[] = [
    { name: 'About', path: '/about' },
    { name: 'Docs', path: '/docs' },
    { name: 'Projects', path: '/projects' },
]

interface MainLayoutProps {
    children: React.ReactNode
}
const Layout: React.FC<MainLayoutProps> = (props) => {
    return (
        <>
            <Navbar routes={routes}></Navbar>
            <Content>
                {props.children}
                <Footer></Footer>
            </Content>
        </>
    )
}

export default Layout
