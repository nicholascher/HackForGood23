import React, { useState } from 'react';
import { Row, Col, Layout, Form, Button, Checkbox, Input } from 'antd';
import { basePath } from '../urlConfig/pathURL';
import useWindowDimensions from '../utilities/windowDimensions';
import NavSignUp from '../components/navcomponents/NavSignUp';
import background from '../assets/bgphotos/purplegradien.jpg';
import './contactsform.css';

const ContactsForm = () => {
    const [email, setEmail] = useState('');
    const [findout, setinputfindout] = useState('');
    const [rmb, setRmb] = useState(false);
    const { height, width } = useWindowDimensions();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    const inputEmail = (e) => {
        setEmail(e.target.value);
    }
    const inputfindout = (e) => {
        setinputfindout(e.target.value);
    }

    const inputRmb = (e) => {
        setRmb(e);
    }

    const layoutStyle = {
        height: height,
        width: width,
        background: `url(${background})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

    }
    const backgroundstyle = {
        background: `url(${background})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

    }

    const options = [
        { label: `I'm a startup looking to join`, value: 'A' },
        { label:   `I'm an investor looking to support`, value: 'B' },
        { label: 'I want to work here', value: 'C' },
        { label: 'I want to subscribe to the newsletter', value: 'D' },
        { label: 'Others', value: 'E' },
    ];


    return (
        <>
            <div id='contacts' style={backgroundstyle}>
                <Layout style={layoutStyle}>
                    <Row style={{ justifyContent: 'space-between' }}>
                        <Col span={24}><NavSignUp /></Col>
                    </Row>
                    <Row style={{ justifyContent: 'flex-end', marginTop: '150px', textAlign: 'center' }}>
                        <Col span={8}>
                            <Form
                                layout='vertical'
                                labelAlign='right'
                                size='large'
                                name="basic"
                                labelCol={{
                                    span: 8,
                                }}
                                wrapperCol={{
                                    span: 20,
                                }}
                                style={{
                                    maxWidth: 400,
                                }}
                                initialValues={{
                                    remember: true,
                                }}

                            >
                                <Form.Item
                                    label="First Name"
                                    name="firstName"
                                    style={{ color: '#FFCFBE' }}
                                    rules={[
                                        {
                                            type: 'username',
                                            message: 'The input type is not valid name',
                                        },
                                        {
                                            required: true,
                                            message: 'Please input your first name!',
                                        },
                                    ]}
                                >
                                    <Input
                                        maxLength={255}
                                        onChange={(e) => inputEmail(e)}
                                    />
                                </Form.Item>
                                <Form.Item
                                    label="Last Name"
                                    name="lastname"
                                    style={{ color: '#FFCFBE' }}
                                    rules={[
                                        {
                                            type: 'username',
                                            message: 'The input type is not valid name',
                                        },
                                        {
                                            required: true,
                                            message: 'Please input your last name!',
                                        },
                                    ]}
                                >
                                    <Input
                                        maxLength={255}
                                        onChange={(e) => inputEmail(e)}
                                    />
                                </Form.Item>
                                <Form.Item
                                    label="Email"
                                    name="email"
                                    style={{ color: '#FFCFBE' }}
                                    rules={[
                                        {
                                            type: 'email',
                                            message: 'The input type is not valid Email',
                                        },
                                        {
                                            required: true,
                                            message: 'Please input your email!',
                                        },
                                    ]}
                                >
                                    <Input
                                        maxLength={255}
                                        onChange={(e) => inputEmail(e)}
                                    />
                                </Form.Item>
                            </Form>
                        </Col>
                        <Col span={8}>
                            <Form layout='vertical'
                                labelAlign='right'
                                size='large'
                                name="basic"
                                labelCol={{
                                    span: 20,
                                }}
                                wrapperCol={{
                                    span: 22,
                                }}
                                style={{
                                    maxWidth: 400,
                                    //   marginLeft:'20px'
                                }}
                                initialValues={{
                                    remember: true,
                                }}
                            >
                                <Form.Item
                                    label="How did you find out about us?"
                                    name="findout"

                                rules={[
                                    {
                                        required: true,
                                        message: 'This section cannot be left empty',
                                    },
                                ]}
                                >
                                    <Input
                                        maxLength={255}
                                        onChange={(e) => inputfindout(e)}
                                    />
                                </Form.Item>
                                <Form.Item
                                    label="Additional Remarks (if any)"
                                    name="Remark"
                                >
                                    <Input
                                        maxLength={255}
                                        onChange={(e) => inputfindout(e)}
                                    />
                                </Form.Item>
                                <Form.Item
                                    label='What are you interested in?'
                                    name="interest"
                                    valuePropName="checked"
                                    wrapperCol={{
                                        span: 20,
                                    }}
                                    
                                >
                                     
                                    <Checkbox.Group 
                                        className='checkbox'
                                        onChange={(e) => inputRmb(e)}
                                        style={{ color: 'white', textAlign:'left', padding:'10px' }}
                                        defaultValue={["D"]}
                                        options={options}
                                    >
                                 
                                    </Checkbox.Group>
                                </Form.Item>

                                <Form.Item
                                    wrapperCol={{
                                        offset: 11,
                                        span: 16,
                                    }}
                                >
                                    <Button type="primary" htmlType="submit" >
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Col>

                    </Row>

                </Layout>
            </div>
        </>
    )
}

export default ContactsForm