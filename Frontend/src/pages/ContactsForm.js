import React, { useState } from 'react';
import NavLoginBar from '../components/navcomponents/NavLoginBar';
import { Row, Col, Layout, Form, Button, Checkbox, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { basePath } from '../urlConfig/pathURL';
import useWindowDimensions from '../utilities/windowDimensions';
import NavSignUp from '../components/navcomponents/NavSignUp';

const ContactsForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [rmb, setRmb] = useState(false);
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

    const inputRmb = (e) => {
        setRmb(e);
    }

    const layoutStyle = {
        height: height,

    }
    // { background: '#FFCFBE', height: height }
    return (
        <>
        <div id ='contacts'>
            <Layout style={layoutStyle}>
                <Row style={{justifyContent:'space-between'}}>
                    <Col span={24}><NavSignUp /></Col>
                </Row>
            </Layout>
            </div>
        </>
    )
}

export default ContactsForm