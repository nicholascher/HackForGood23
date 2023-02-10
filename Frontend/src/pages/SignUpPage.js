import React, { useState } from 'react';
import NavSignUp from '../components/navcomponents/NavSignUp';
import { useNavigate } from "react-router-dom";
import { Row, Col, Layout, Form, Button, Input } from 'antd';
import { PasswordInput } from 'antd-password-input-strength';
import { loginPath } from '../urlConfig/pathURL';
import validator from 'validator'
import axios from 'axios';
import useWindowDimensions from '../utilities/windowDimensions';
import background from '../assets/bgphotos/purplegradien.jpg';
const SignUpPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const { height,width } = useWindowDimensions();

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

    const validate = (value) => {
        if (validator.isStrongPassword(value, {
          minLength: 8, minLowercase: 1,
          minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            return true;
        }
        else {
            return false;
        }

      }

    const submitData = (email, pass, firstname, lastname) => {
        axios.post(window.apiUrl + "/Account/register", {
            email: email,
            password: pass,
            firstName: firstname,
            lastName: lastname,
        })
        .then(() => {
            console.log("Registered");
            navigate(loginPath);
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
                    <Col span={24}><NavSignUp /></Col>
                </Row>

                <Row style={{ justifyContent: 'center', marginTop: '150px' }}>
                    <Form
                        labelAlign='left'
                        size='large'
                        name="basic"
                        scrollToFirstError={true}
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
                            <Input
                            maxLength={40}
                            onChange={(e) => inputFirstName(e)}
                            />
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
                            <Input 
                            maxLength={40}
                            onChange={(e) => inputLastName(e)}
                            />
                        </Form.Item>
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
                            name="password"
                            label="Password"
                            help="Requires minimum 8 characters, 1 lower case character, 1 upper case character, 1 number, 1 special character"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                            {
                                validator: (_, value) => validate(value) ? Promise.resolve() 
                                : Promise.reject(new Error('Password needs to contain 8 characters, 1 lower case character, 1 upper case character, 1 number, 1 special character')),
                            },
                            ]}
                            hasFeedback
                        >
                            <PasswordInput 
                            maxLength={255}
                            onChange={(e) => inputpass(e)}
                            />
                        </Form.Item>

                        <Form.Item
                            name="confirm"
                            label="Confirm Password"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                            }),
                            ]}
                        >
                            <Input.Password 
                            maxLength={255}
                            />
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit" onClick={() => submitData(email, pass, firstname, lastname)}>
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