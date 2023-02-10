import React from 'react';
import { Layout, Typography, Card, Row, Col, Button } from 'antd';
import blueglasscube from '../assets/bgphotos/blueglasscube.jpg';
import { useNavigate } from 'react-router-dom';
import { moreevents } from '../urlConfig/pathURL';
import NavSignUp from '../components/navcomponents/NavSignUp';
import useWindowDimensions from '../utilities/windowDimensions';
import './pages.css';

const {Title} = Typography;
const MoreEventsPage = () => {
    const {height, width} = useWindowDimensions();
    const backgroundImageSettings = {
        background: `url(${blueglasscube})`,
        height: height,
        width:width,
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
            <div id="events" style={{height:height, width:width}}>
                <Layout style={backgroundImageSettings}>
                
                <Row style={{justifyContent:'space-between'}}>
                    <Col span={24}><NavSignUp/></Col>
                </Row>
                    <Row style={{ justifyContent: 'center', marginTop: '150px' }}>
                        <Col >
                            <Typography.Title level={1} style={{ margin: 10, fontFamily: 'Playfair Display', color: '#FFCFBE' }}>
                                MORE EVENTS
                            </Typography.Title>
                        </Col>
                    </Row>
                    <Row gutter={16} style={{ marginTop: '50px', margin: '50px' }}>
                        <Col span={8}>
                            <Card style={{ background: 'rgba(48, 28, 88, 0.7)', height: 350, color: '#FFCFBE', textAlign: 'center' }} bordered={false}>
                                <Title level={3} style={{ fontsize: '10px', fontWeight: 'bold', margin: 10, fontFamily: 'Playfair Display', color: '#FFCFBE', padding: 20 }}>
                                    Title
                                </Title>
                                <p style={{ fontFamily: 'Playfair Display', fontSize: '20px' }}>description</p>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card style={{ background: 'rgba(48, 28, 88, 0.7)', height: 350, color: '#FFCFBE', textAlign: 'center' }} bordered={false}>
                            <Title level={3} style={{ fontsize: '10px', fontWeight: 'bold', margin: 10, fontFamily: 'Playfair Display', color: '#FFCFBE', padding: 20 }}>
                                    Title
                                </Title>
                                <p style={{ fontFamily: 'Playfair Display', fontSize: '20px' }}>description</p>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card style={{ background: 'rgba(48, 28, 88, 0.7)', height: 350, color: '#FFCFBE', textAlign: 'center' }} bordered={false}>
                            <Title level={3} style={{ fontsize: '10px', fontWeight: 'bold', margin: 10, fontFamily: 'Playfair Display', color: '#FFCFBE', padding: 20 }}>
                                    Title
                                </Title>
                                <p style={{ fontFamily: 'Playfair Display', fontSize: '20px' }}>description</p>
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

export default MoreEventsPage;