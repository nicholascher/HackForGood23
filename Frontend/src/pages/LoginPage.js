import React, { useState } from 'react';
import NavLoginBar from '../components/navcomponents/NavLoginBar';
import { Row, Col, Layout, Form, Button, Checkbox, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { basePath } from '../urlConfig/pathURL';
import axios from 'axios';
import Cookies from 'universal-cookie';
import useWindowDimensions from '../utilities/windowDimensions';
import background from '../assets/bgphotos/purplegradien.jpg';
const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [rmb, setRmb] = useState(false);
    const { height, width } = useWindowDimensions();

    const cookies = new Cookies();

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

    const inputRmb = (e) => {
        setRmb(e);
    }

    const submitData = (email, password) => {
        axios.post(window.apiUrl + "/Account/authenticate", {
            email: email,
            password: password,
        })
        .then((response) => {
            console.log("Logged in");
            window.token = response.data.token;
            cookies.set('token', response.data.token, {path: '/'});
            cookies.set('userId', response.data.id, {path: '/'});

            if (rmb)
            {
                localStorage.setItem("autoLogout", "n");
            }
            else 
            {
                localStorage.setItem("autoLogout", "y");
            }

            localStorage.setItem("name", response.data.firstName);

            navigate(basePath);
        })
        .catch((err) => console.log(err));
    };

    const layoutStyle = {
        height: height,
        width: width,
        background: `url(${background})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

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
                        labelAlign='left'
                        size='large'
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
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password 
                            maxLength={255}
                            onChange={(e) => inputpass(e)}
                            />
                        </Form.Item>

                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Checkbox
                            onChange={(e) => inputRmb(e)} style={{color:'white'}}>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit" onClick={() => submitData(email, pass)}>
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