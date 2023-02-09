import React from 'react';
import { Layout, Carousel, Typography, Card, Row, Col } from 'antd';

const WhatWeDo = () => {
    return (
        <>
            <div id="whatwedo">
                <Layout style={{ height: '700px', marginTop: '50px', background:'#301C58'}}>
                    <Row style={{ justifyContent: 'center', marginTop: '50px'}}>
                        <Col >
                            <Typography.Title level={1} style={{ margin: 10, fontFamily: 'Playfair Display', color: '#FFCFBE' }}>
                                WHAT WE DO
                            </Typography.Title>
                        </Col>
                    </Row>
                    <Row gutter={16} style={{ marginTop: '50px', margin:'50px' }}>
                        <Col span={8}>
                            <Card title="Card title" bordered={false}>
                                Card content
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Card title" bordered={false}>
                                Card content
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Card title" bordered={false}>
                                Card content
                            </Card>
                        </Col>
                    </Row>
                </Layout>
            </div>
        </>
    )
}

export default WhatWeDo;