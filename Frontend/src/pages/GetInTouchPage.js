import React from 'react';
import styles from "../index.css";
import { Col, Row, Card, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { getintouch } from '../urlConfig/pathURL';
import "@fontsource/playfair-display"
import { Typography } from 'antd';
import join from '../assets/bgphotos/joinus.jpg';


const GetInTouch = () => {
    const navigate = useNavigate();

    const navigateToContact = (e) => {
        navigate(getintouch);
    };
    const cardStyle = {
        textAlign: 'center',
        minHeight: '400px',
        lineHeight: '120px',
        fontFamily: 'Playfair Display',
        background: `url(${join})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };

    return (
        <>
            <div className={styles.main} id='getintouch'>
                <Row style={cardStyle} gutter={16}>
                    <Col span={24}>
                        <Card style={cardStyle} bordered={false}>
                            <Typography.Title level={1} style={{ margin: 40, fontFamily: 'Playfair Display', color: '#FFCFBE' }}>
                                INTERESTED TO JOIN THE ALLIANCE?
                            </Typography.Title>
                            <Button
                            onClick={navigateToContact}  
                            style={{ margin: 40, fontFamily: 'Playfair Display', background: '#FFCFBE', fontWeight:'bolder', color:'#301C58', fontSize:'30px', height:'60px' }}>
                                Click Here to Join!</Button>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default GetInTouch