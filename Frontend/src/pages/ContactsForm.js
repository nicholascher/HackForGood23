import React, { useState } from 'react';
import { Row, Col, Layout, Form, Button, Checkbox, Input, Card, Alert } from 'antd';
import useWindowDimensions from '../utilities/windowDimensions';
import NavSignUp from '../components/navcomponents/NavSignUp';
import background from '../assets/bgphotos/purplegradien.jpg';
import axios from 'axios';
import './contactsform.css';
import contact from '../assets/bgphotos/contact.jpg';
import { basePath } from '../urlConfig/pathURL';
import { useNavigate } from 'react-router-dom';

const ContactsForm = () => {
    const [email, setEmail] = useState('');
    const [firstname, setfirstname] = useState('');
    const [phone, setphone] = useState('');
    const [reason, setreason] = useState('');
    const [findout, setfindout] = useState('');
    const [company, setcompany] = useState('');
    const [remarks, setremarks] = useState('');
    const { height, width } = useWindowDimensions();
    const navigate = useNavigate();

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(email);
    // }

    const inputEmail = (e) => {
        setEmail(e.target.value);
    }
    const inputname = (e) => {
        setfirstname(e.target.value);
    }

    const inputphone = (e) => {
        setphone(e.target.value);
    }

    const inputreason = (e) => {
        setreason(e);
    }

    const inputremarks = (e) => {
        setremarks(e.target.value);
    }

    const inputfindout = (e) => {
        setfindout(e.target.value);
    }

    const inputcompany = (e) => {
        setcompany(e.target.value);
    }

    const submitData = (email, firstname, company, phone, reason, findout, remarks) => {
        axios.get(window.apiUrl + "/Analytic", {
            Name: firstname,
            Company: company,
            Email: email,
            Phone: phone,
            Reason: reason,
            FindOut: findout,
            Remarks: remarks,
        })
            .then((response) => {
                console.log("Submitted");
                window.token = response.data.token;
                <Alert message="Submitted Successfully" type="success" />
                navigate(basePath);
            })
            .catch((err) => {
                console.log(err);
                <Alert message = "Error Text"
                description = {err}
                type = "error"
                closable/>
        });
    };


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
        { label: `I'm an investor looking to support`, value: 'B' },
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
                            <Card style={{ background: 'rgba(48, 28, 88, 0.7)', height: 500, color: '#FFCFBE', marginRight: '50px' }} bordered={false}
                                cover={
                                    <div style={{ overflow: "hidden", height: 500 }}>
                                        <img
                                            alt="example"
                                            style={{ height: "100%" }}
                                            src={contact}
                                        />
                                    </div>
                                }
                            >
                            </Card>
                        </Col>
                        <Col span={6}>
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
                                    label="Name"
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
                                        onChange={(e) => inputname(e)}
                                    />
                                </Form.Item>
                                <Form.Item
                                    label="Company"
                                    name="company"
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
                                        onChange={(e) => inputcompany(e)}
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
                                <Form.Item
                                    label="Phone Number"
                                    name="phonenumber"
                                    style={{ color: '#FFCFBE' }}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your phone number!',
                                        },
                                    ]}
                                >
                                    <Input
                                        maxLength={255}
                                        onChange={(e) => inputphone(e)}
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
                                        onChange={(e) => inputremarks(e)}
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
                                        onChange={(e) => inputreason(e)}
                                        style={{ color: 'white', textAlign: 'left', padding: '10px' }}
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
                                    <Button type="primary" htmlType="submit" onClick={submitData(email, firstname, company, phone, reason, findout, remarks)}>
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