import React from 'react';
import { Layout } from 'antd';
import KnowMore from './KnowMorePage';
import WhoWeAre from './WhoWeAre';
import NavBar from '../components/navcomponents/NavBar';
import Partners from './PartnersPage';
import WhatWeDo from './WhatWeDo';
const { Header } = Layout;
const MainPage = () => {

    return (
        <>
            <div>
                <Layout style={{background:'#FFCFBE'}}>
                    <Header
                        style={{
                            padding: 0,
                        }}
                    />
                    <NavBar/>
                    <div>
                    <WhoWeAre />
                    <KnowMore />
                    <WhatWeDo />
                    <Partners />
                    </div>
                </Layout>
            </div>
        </>
    )
}

export default MainPage;