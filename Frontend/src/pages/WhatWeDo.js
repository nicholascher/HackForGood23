import React from 'react';
import { Layout, Typography, Card, Row, Col } from 'antd';
import worldgradient from '../assets/bgphotos/worldgradient.jpg';
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { GiMuscleUp } from "react-icons/gi";
import { IoBookSharp } from "react-icons/io5";
const WhatWeDo = () => {

    const backgroundImageSettings = {
        background: `url(${worldgradient})`,
        height: '700px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        justifyContent: 'flex-start'
    }

    return (
        <>
            <div id="whatwedo">
                <Layout style={backgroundImageSettings}>
                    <Row style={{ justifyContent: 'center', marginTop: '50px'}}>
                        <Col >
                            <Typography.Title level={1} style={{ margin: 10, fontFamily: 'Playfair Display', color: '#FFCFBE' }}>
                                WHAT WE DO
                            </Typography.Title>
                        </Col>
                    </Row>
                    <Row gutter={16} style={{ marginTop: '50px', margin:'50px' }}>
                    <Col span={8}>
                            <Card style={{ background: 'rgba(48, 28, 88, 0)', height: 350, color: '#FFCFBE', textAlign: 'center' }} bordered={false}>
                                <IoBookSharp size={150}/>
                                <Typography.Title  level={1}  style={{ fontsize: '10px', fontWeight: 'bold', margin: 10, fontFamily: 'Playfair Display', color: '#FFCFBE', padding: 20 }}>
                                   EDUCATE

                                </Typography.Title >

                                <p style={{ fontFamily: 'Playfair Display', fontSize: '20px' }}>We develop deep experiential programs for leaders, technologists and changemakers. We transform mindsets and help develop the necessary skills to deliver impactful tech for greater good.</p>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card style={{ background: 'rgba(48, 28, 88, 0)', height: 350, color: '#FFCFBE', textAlign: 'center' }} bordered={false}>
                            <GiMuscleUp size={150}/> 
                            <Typography.Title  level={1}  style={{ fontsize: '10px', fontWeight: 'bold', margin: 10, fontFamily: 'Playfair Display', color: '#FFCFBE', padding: 20 }}>
                                    EMPOWER
                                </Typography.Title >

                                <p style={{ fontFamily: 'Playfair Display', fontSize: '20px' }}>As a platform, we forge world-class synergistic partnerships, bringing together conscious leaders across business, science, and technology to scale transformative technology solutions. </p>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card style={{ background: 'rgba(48, 28, 88, 0)', height: 350, color: '#FFCFBE', textAlign: 'center' }} bordered={false}>
                            <MdOutlineConnectWithoutContact  size={150}/>
                            <Typography.Title  level={1} style={{ fontsize: '10px', fontWeight: 'bold', margin: 10, fontFamily: 'Playfair Display', color: '#FFCFBE', padding: 20 }}>
                                    ENHANCE

                                </Typography.Title >

                                <p style={{ fontFamily: 'Playfair Display', fontSize: '20px' }}>On the global stage, we strive to increase influence, impact, and recognition of tech-for-good role models, celebrating the success of our Tech-for-Good Champions.</p>
                            </Card>
                        </Col>
                    </Row>
                </Layout>
            </div>
        </>
    )
}

export default WhatWeDo;