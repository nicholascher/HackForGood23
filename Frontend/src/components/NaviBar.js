import React, {useState} from 'react';
import { useNavigate, Navigate } from "react-router-dom";
import 'antd/dist/reset.css';
import "../index.css";
import { Layout, Menu } from 'antd';
import {
    basePath,
    loginPath,
    knowmore,
    getintouch
    // mainPath,
} from '../urlConfig/pathURL.js';
import useWindowDimensions from '../utilities/windowDimensions';
import styles from './NaviBar.css';

const { Header } = Layout;
const navigationItems = [
    {
        label: 'Home',
        key: 'home',
    },
    {
        label: 'Know More',
        key: 'knowmore',
    },
    {
        label: 'Get In Touch',
        key: 'getintouch',
    },
];

export function NaviBar(currentState) {
 
    const [current, setCurrent] = useState(currentState.currentState);
    const navigate = useNavigate();
    const [fix, setFix] = useState(false);
    const {height} = useWindowDimensions();
    
    function setFixed() {
        if(window.scrollY >= 100) {
            setFix(true);
        } else {
            setFix(false);
        }
    }

    window.addEventListener("scroll", setFix);

    function onClick (e)  {
      setCurrent(e.key);
      navigation(e);
    };

    function navigation(e) {
        if(e.key === 'getintouch') {
            navigate(getintouch);
          } else if (e.key === 'knowmore') {
            navigate(knowmore);
          } else if (e.key === 'home') {
            navigate(basePath);
          } 
    }


    const layoutStyle = {
        fontFamily: 'Playfair Display',
    };

    return (
        <Layout style={layoutStyle}>
            <Header>
                {/* <div className="logo" /> */}
                <Menu style={layoutStyle} theme="dark" mode="horizontal" onClick={onClick} selectedKeys={[current]} items={navigationItems} />
            </Header>
        </Layout>
    );
}