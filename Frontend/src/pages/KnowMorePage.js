import React from 'react';
import styles from "../index.css";
import { Card, Layout, Typography } from 'antd';
import "@fontsource/playfair-display";
import './pages.css';
import whoweare from '../assets/bgphotos/whoweare.jpg';

const { Content } = Layout;

const KnowMore = () => {

    const cardStyle = {
        textAlign: 'center',
        height: '400px',
        lineHeight: '50px',
        fontFamily: 'Playfair Display',
        background: 'rgba(255, 255, 255, 0.2)'
    };

    const backgroundImageSettings = {
        background: `url(${whoweare})`,
        height: '60vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
    return (
        <>
            <div  id='knowmore' >
                <Layout style={backgroundImageSettings}>
                    <Content style={{ margin: '40px 16px 0' }}>
                        <div className={styles.main}>
                            <Card style={cardStyle} bordered={false}>
                                <Typography.Title level={1} style={{ margin: 40, fontFamily: 'Playfair Display', color: '#FFCFBE', fontSize: '40px' }}>
                                    WHO WE ARE
                                </Typography.Title>
                                <Typography.Paragraph style={{ margin: 50, fontFamily: 'Playfair Display', color: '#FFCFBE', fontSize: '25px' }}>
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