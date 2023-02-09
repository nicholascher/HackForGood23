import React from 'react';
import { Layout, Carousel, Typography, Card } from 'antd';
import useWindowDimensions from '../utilities/windowDimensions';
import "@fontsource/playfair-display"
// import image from '../assets/img.png';
import './pages.css';
import "@fontsource/playfair-display"
import techno from '../assets/technopreneur.png';
import uni from '../assets/nus.jpeg';
const Partners = () => {
    const { height } = useWindowDimensions();

    const contentStyle = {
        height: height,
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#2A0C36',
        padding: 100,
        fontFamily: 'Playfair Display',
    };

    const card1style = {
        height: height,
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#2A0C36',
        padding: 100,
        fontFamily: 'Playfair Display',
        backgroundImage: `url(${techno})`,

    };

    const card2style = {
        height: height,
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#2A0C36',
        padding: 100,
        fontFamily: 'Playfair Display',
        backgroundImage: `url(${uni})`,

    };
    return (
        <>
            <div className='hero' id='partners'>
                <Layout >
                    <Carousel >
                        <div>
                            {/* <h2 style={contentStyle}>
                                WHO WE PARTNER
                            </h2> */}
                            <Card style={card1style} bordered={false}>
                                <Typography.Title level={1} style={{ margin: 10, fontFamily: 'Playfair Display', color: 'white' }}>
                                   TECHNOPRENEUR
                                </Typography.Title>
                                <Typography.Paragraph style={{ margin: 50, fontFamily: 'Playfair Display', color: 'white' }}>
                                    For the innovators  - we offer resources, networking, training, and market access to scale.
                                </Typography.Paragraph>
                            </Card>
                        </div>
                        <div>
                        <Card style={card2style} bordered={false}>
                                <Typography.Title level={1} style={{ margin: 10, fontFamily: 'Playfair Display', color: 'white' }}>
                                   ACADEMIA AND UNIVERSITIES
                                </Typography.Title>
                                <Typography.Paragraph style={{ margin: 50, fontFamily: 'Playfair Display', color: 'white' }}>
                                For the curious - we offer joint research opportunities, use cases, and industry connections to leverage the latest advances in research. 
                                </Typography.Paragraph>
                            </Card>
                        </div>
                        <div>
                            <h3 style={contentStyle} bordered={false}>3</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle} bordered={false}>4</h3>
                        </div>
                    </Carousel>
                </Layout>
            </div>
        </>
    )
}

export default Partners