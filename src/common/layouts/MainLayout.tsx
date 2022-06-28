import React from 'react'
import { Footer } from '../components/footer/Footer'
import { Navbar } from '../components/navbar/Navbar'
import styled from '@emotion/styled'

const Content = styled.main`
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    top: var(--navbar-height);
    position: relative;
    width: 99.5vw;
    scroll-behavior: smooth;
`

interface MainLayoutProps {
    children: React.ReactNode
}
const Layout: React.FC<MainLayoutProps> = (props) => {
    return (
        <>
            <Navbar></Navbar>
            <Content className="content">
                {props.children}
                <Footer></Footer>
            </Content>
        </>
    )
}

export default Layout
