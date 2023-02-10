import React from 'react';
import { Layout, Typography, Card, Row, Col, Button } from 'antd';
import blueglasscube from '../assets/bgphotos/blueglasscube.jpg';
import { useNavigate } from 'react-router-dom';
import { moreevents } from '../urlConfig/pathURL';
import techforgood from '../assets/bgphotos/techforgood.jpg';
import developers from '../assets/bgphotos/developers.png';

const EventsPage = () => {

    const backgroundImageSettings = {
        background: `url(${blueglasscube})`,
        height: '700px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        justifyContent: 'flex-start'
    }
    const navigate = useNavigate();

    const navigateToMoreEvents = (e) => {
        navigate(moreevents);
    };
    return (
        <>
            <div id="events">
                <Layout style={backgroundImageSettings}>
                    <Row style={{ justifyContent: 'center', marginTop: '40px' }}>
                        <Col >
                            <Typography.Title level={1} style={{ margin: 10, fontFamily: 'Playfair Display', color: '#FFCFBE' }}>
                                EVENTS WE DONE
                            </Typography.Title>
                        </Col>
                    </Row>
                    <Row gutter={24} style={{ marginTop: '50px', margin: '30px', justifyContent: 'center' }}>
                        <Col span={9}>
                            <Typography.Title level={3} style={{ margin: 10, fontFamily: 'Playfair Display', color: '#FFCFBE', textAlign: 'center' }}>
                                Google Developer Student Clubs
                            </Typography.Title>
                            <Card style={{ background: 'rgba(48, 28, 88, 0.7)', height: 350, color: '#FFCFBE', textAlign: 'center' }} bordered={false}
                                cover={
                                    <div style={{ overflow: "hidden", height: "350px" }}>
                                        <img
                                            alt="example"
                                            style={{ height: "100%" }}
                                            src={developers}
                                        />
                                    </div>
                                }
                            >
                            </Card>
                        </Col>
                        <Col span={9}>
                            <Typography.Title level={3} style={{ margin: 10, fontFamily: 'Playfair Display', color: '#FFCFBE', textAlign: 'center' }}>
                                Tech For Good
                            </Typography.Title>
                            <Card style={{ background: 'rgba(48, 28, 88, 0.7)', height: 350, color: '#FFCFBE', textAlign: 'center' }} bordered={false}
                                 cover={
                                    <div style={{ overflow: "hidden", height: "350px" }}>
                                        <img
                                            alt="example"
                                            style={{ height: "100%" }}
                                            src={techforgood}
                                        />
                                    </div>
                                }
                            >
                            </Card>
                        </Col>
                    </Row>
                    <Row style={{ justifyContent: 'center', marginTop: '10px' }}>
                        <Button
                            onClick={navigateToMoreEvents}
                            style={{ margin: 40, fontFamily: 'Playfair Display', background: '#FFCFBE', fontWeight: 'bolder', color: '#301C58', fontSize: '30px', height: '60px', width: '20%' }}>
                            Find Out More</Button>
                    </Row>
                </Layout>
            </div>
        </>
    )
}

export default EventsPage;