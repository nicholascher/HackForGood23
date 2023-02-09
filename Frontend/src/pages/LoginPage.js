import React, { useState } from 'react';
import NavLoginBar from '../components/navcomponents/NavLoginBar';
import { Row, Col, Layout, Form, Button, Checkbox, Input } from 'antd';
import useWindowDimensions from '../utilities/windowDimensions';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const { height } = useWindowDimensions();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    const inputEmail = (e) => {
        setEmail(e.target.value);
    }
    const inputpass = (e) => {
        setPass(e.target.value);
    }

    const submitData = (email, password) => {
        console.log(email, password);
    };

    const layoutStyle = {
        height: height,

    }
    // { background: '#FFCFBE', height: height }
    return (
        <>
            <Layout style={layoutStyle}>
                <Row style={{justifyContent:'space-between'}}>
                    <Col span={24}><NavLoginBar /></Col>
                </Row>

                <Row style={{ justifyContent: 'center', marginTop: '150px' }}>
                    <Form
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        style={{
                            maxWidth: 600,
                        }}
                        initialValues={{
                            remember: true,
                        }}

                    >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit" onClick={submitData(email, pass)}>
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
               
                </Row>

            </Layout>
        </>
    )
}

export default LoginPage