import React, { useState } from 'react';
import NavSignUp from '../components/navcomponents/NavSignUp';
import { Row, Col, Layout, Form, Button, Input } from 'antd';
import useWindowDimensions from '../utilities/windowDimensions';

const SignUpPage = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
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

    const inputFirstName = (e) => {
        setfirstname(e.target.value);
    }
    const inputLastName = (e) => {
        setlastname(e.target.value);
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
                    <Col span={24}><NavSignUp /></Col>
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
                            label="First Name"
                            name="firstname"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your first name!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Last Name"
                            name="lastname"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Last Name!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
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
                            label="Confirm Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                            ]}
                        >
                            <Input.Password />
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

export default SignUpPage