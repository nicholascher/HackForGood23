import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Row, Col } from 'antd';
import {
    loginPath,
} from '../../urlConfig/pathURL.js';


const NavLoginBar = () => {
    const navigate = useNavigate();

    const navigateToLogin = (e) => {
        navigate(loginPath);
    };
    const navigateToHome = (e) => {
        navigate('/');
        console.log(e);
    };
    const buttonStyle = {
        textAlign: 'center',
        fontFamily: 'Playfair Display',
        fontSize: '16px',
        color: 'white',
        // background: 'white',
        display: 'flex',
        margin: '10px',
        position: 'absolute'
    };

    // const navStyle = {
    //     color : 'white'
    // }
    return (
        <>
            {/* <Navigation style={{height:'150px', justifyContent:'flex-end', position:'fixed', width:'100%'}}> */}
            <Row style={{height:'65px', justifyContent:'space-between', position:'fixed', width:'100%', background: '#301C58'}}>
                <Col span={5}>
                    <Button type="text" style={buttonStyle} onClick={navigateToHome} >
                        UNICORN FOR GOOD
                    </Button>
                </Col>
                <Col span={3}>
                    <Button type="text" style={buttonStyle} onClick={navigateToLogin} >
                        LOGIN
                    </Button>
                </Col>
            </Row>
            {/* </Navigation> */}

        </>
    )
}

export default NavLoginBar;

