import React from 'react';
import styles from "../index.css";
import { Route, Routes } from 'react-router-dom';
import {
    loginPath
} from '../urlConfig/pathURL';
import LoginPage from './LoginPage';
import { Card, Layout, Typography } from 'antd';
import useWindowDimensions from '../utilities/windowDimensions';
import "@fontsource/playfair-display";
import './pages.css';
const { Content } = Layout;

const KnowMore = () => {
    const { height } = useWindowDimensions();

    const cardStyle = {
        textAlign: 'center',
        minHeight: height,
        lineHeight: '50px',
        fontFamily: 'Playfair Display',
        background:'#FFCFBE'
        
    };

    return (
        <>
            <div className='hero' id = 'knowmore' >
                <Layout  style={{background:'#FFCFBE'}}>
                    <Content style={{ margin: '50px 16px 0' }}>
                        <div className={styles.main}>
                            <Routes>
                                <Route exact path={loginPath} element={<LoginPage />} />
                            </Routes>
                            <Card style={cardStyle} bordered={false}>
                                <Typography.Title level={1} style={{ margin: 0, fontFamily: 'Playfair Display' }}>
                                    WHO WE ARE
                                </Typography.Title>
                                <Typography.Paragraph style={{ margin: 0, fontFamily: 'Playfair Display' }}>
                                    Unicorns for Good Alliance is a global platform on a mission to educate, empower, and enhance a new generation of conscious leaders to apply technology for greater good.
                                    This is where the world’s best technologists, entrepreneurs, and investors unite to turn large global challenges into growth opportunities and solve the biggest challenges of our time.
                                    This is where future Tech-for-Good Unicorns are born.
                                </Typography.Paragraph>
                            </Card>
                        </div>
                    </Content>
                </Layout>
            </div>
        </>
    )
}

export default KnowMore