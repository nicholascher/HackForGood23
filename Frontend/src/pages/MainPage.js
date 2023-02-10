import React, { useEffect } from 'react';
import { Layout } from 'antd';
import KnowMore from './KnowMorePage';
import WhoWeAre from './WhoWeAre';
import NavBar from '../components/navcomponents/NavBar';
import Partners from './PartnersPage';
import WhatWeDo from './WhatWeDo';
import EventsPage from './EventsPage';
import GetInTouch from './GetInTouchPage';
import Cookies from 'universal-cookie';
import axios from 'axios';

const { Header } = Layout;
const MainPage = () => {
    const cookies = new Cookies();
    

    window.addEventListener("beforeunload", (ev) => {
        var logout = localStorage.getItem("autoLogout");
        var jwtToken = cookies.get('token');
        if (logout === "n"){
            axios.post(window.apiUrl + "/logout", {
                headers: {
                Authorization: "Bearer " + jwtToken
                },
                token: jwtToken,
            },
            
            )
            cookies.remove('token');
            cookies.remove('userId');
            localStorage.removeItem('name');
            localStorage.removeItem('autoLogout');
        }
    })

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
                    <EventsPage/>
                    <GetInTouch/>
                    </div>
                </Layout>
            </div>
        </>
    )
}

export default MainPage;