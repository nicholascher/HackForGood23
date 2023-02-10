import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import "@fontsource/playfair-display"
import { Typography, Row, Col, Card, Button } from 'antd';
import unicorn from '../assets/unicorn.png';
import nuslogo from '../assets/nuslogo.png';
import googledev from '../assets/googledev.png';
import sgenable from '../assets/sgenable.png';
import homepage from '../assets/bgphotos/homepagepurple.jpg';
import purplebg from '../assets/bgphotos/purplebg2.jpg';
import './pages.css';
import useWindowDimensions from '../utilities/windowDimensions';
import { Link } from 'react-scroll';
const { Content } = Layout;

const WhoWeAre = () => {
    const { height } = useWindowDimensions();
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
    )

    useEffect(() => {
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);

    const backgroundImageSettings = {
        background: `url(${purplebg})`,
        height: height,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
    // { background: '#301C58', height: height, backgroundImage: `url(${purplebg})` }
    return (
        <>
            <div className='hero' id='home'>
                <Layout style={backgroundImageSettings}>
                    <Content >
                        <div style={{
                            padding: 24,
                            minHeight: 7,
                            textAlign: 'center',
                        }}>
                            {matches && <Row gutter={24} style={{ justifyContent: 'center', marginTop: '50px' }}>
                                <Col span={16}>
                                    <Card bordered={false} style={{ background: 'rgba(255, 255, 255, 0.0)', }}>
                                        <Typography.Title level={1} style={{ fontsize: '90px', fontWeight: 'bold', margin: 50, fontFamily: 'Playfair Display', color: '#FFCFBE' }}>
                                            UNICORN FOR GOOD ALLIANCE
                                        </Typography.Title>
                                        <Typography.Title level={2} style={{ margin: 10, fontFamily: 'Playfair Display', color: 'white' }}>
                                            A platform uniting the world's best leaders, technologists, and changemakers to create transformative impact through technology
                                        </Typography.Title>
                                        <Button type="primary" size={'large'} style={{ background: '#FFCFBE', margin: 50, fontFamily: 'Playfair Display', color: 'black', fontWeight:'bolder' }}>
                                            < Link to='getintouch' spy={true} smooth={true} offset={-100} duration={500} >  GET IN TOUCH</Link>
                                            {/* <Button type="text" style={navStyle} onClick={navigateToContact}>Get In Touch</Button> */}
                                        </Button>
                                    </Card>
                                </Col>
                                <Col span={8}>
                                    <Card bordered={false} style={{ background: 'rgba(255, 255, 255, 0.0)', alignItems: 'center' }} cover={<img alt="example" src={unicorn} />} />
                                </Col>

                            </Row>}
                            {!matches &&
                                <Card bordered={false} style={{ background: '#301C58', }}>
                                    <Typography.Title level={1} style={{ fontsize: '90px', fontWeight: 'bold', margin: 50, fontFamily: 'Playfair Display', color: 'white' }}>
                                        UNICORN FOR GOOD ALLIANCE
                                    </Typography.Title>
                                    <Typography.Title level={2} style={{ margin: 10, fontFamily: 'Playfair Display', color: 'white' }}>
                                        A platform uniting the world's best leaders, technologists, and changemakers to create transformative impact through technology
                                    </Typography.Title>
                                    <Button type="primary" size={'large'} style={{ background: '#FFCFBE', margin: 50, fontFamily: 'Playfair Display', color: 'black', fontWeight:'bolder' }}>
                                        GET IN TOUCH
                                    </Button>
                                </Card>
                            }
                            <Row gutter={24} style={{ justifyContent: 'space-evenly', margin: '50px' }}>
                                <Col>
                                    <img alt="nus" src={nuslogo} width="199" height="100" />

                                </Col>
                                <Col>
                                    <img alt="googledev" src={googledev} width="199" height="100" />
                                </Col>
                                <Col>
                                    <img alt="sgenable" src={sgenable} width="199" height="100" />
                                </Col>
                            </Row>
                        </div>
                    </Content>
                </Layout>
            </div>
        </>
    )
}

export default WhoWeAre