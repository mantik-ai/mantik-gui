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
            <Content style={{height: "100vh"}}>
                <Navbar routes={routes}/>
                    {props.children}
                <Footer/>
            </Content>
        </>
    )
}

export default Layout
