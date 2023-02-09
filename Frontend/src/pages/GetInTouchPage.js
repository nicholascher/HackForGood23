import React from 'react';
import styles from "../index.css";
import { Route, Routes } from 'react-router-dom';
import { NaviBar } from '../components/NaviBar';
import {
    loginPath
} from '../urlConfig/pathURL';
import LoginPage from './LoginPage';
import { Col, Row, Card } from 'antd';
import useWindowDimensions from '../utilities/windowDimensions';
import "@fontsource/playfair-display"
import { Typography } from 'antd';

const GetInTouch = () => {
    const { height } = useWindowDimensions();

    const cardStyle = {
        textAlign: 'center',
        minHeight: height,
        lineHeight: '120px',
        fontFamily: 'Playfair Display',
    };

    return (
        <>
            <div className={styles.main}>
                <NaviBar currentState = 'getintouch'/>
                <Routes>
                    <Route exact path={loginPath} element={<LoginPage />} />
                </Routes>
                <Row style={cardStyle} gutter={16}>
                    <Col span={24}>
                        <Card style={cardStyle} >
                            <Typography.Title level={1} style={{ margin: 0, fontFamily: 'Playfair Display' }}>
                                WHO WE ARE
                            </Typography.Title>
                            <Typography.Paragraph style={{ margin: 0, fontFamily: 'Playfair Display' }}>
                                Unicorns for Good Alliance is a global platform on a mission to educate, empower, and enhance a new generation of conscious leaders to apply technology for greater good.
                                This is where the world’s best technologists, entrepreneurs, and investors unite to turn large global challenges into growth opportunities and solve the biggest challenges of our time.
                                This is where future Tech-for-Good Unicorns are born. 
                                </Typography.Paragraph>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default GetInTouch