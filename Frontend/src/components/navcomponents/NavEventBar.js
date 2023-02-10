import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Row, Col } from 'antd';
import {
    loginPath,
} from '../../urlConfig/pathURL.js';
import { CgProfile } from 'react-icons/cg';
import axios from 'axios';


const NavEventBar = () => {
    const [profile, setProfile] = useState(false);
    const [createEvents, setCreateEvents] = useState(false);

    const navigate = useNavigate();

    const navigateToLogin = (e) => {
        navigate(loginPath);
    };
    const navigateToProfile = (e) => {
        navigate();
    };
    const navigateToHome = (e) => {
        navigate('/');
        console.log(e);
    };

    useEffect(() => {
        setProfile(window.token != null);
        loadPrivilege();
    }, []);

    const loadPrivilege = () => {
        axios.get(window.apiUrl + "/Event/privilege", 
        {
            headers: {
            Authorization: "Bearer " + window.token
            },
        })
        .then((res) => {
            setCreateEvents(true);
        })
        .catch((err) => {
            console.log(err);
            setCreateEvents(false);
        })
    }

    const navigateToCreation = () => {
        navigate();
    }

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

    const profBtn = {
        textAlign: 'center',
        fontFamily: 'Playfair Display',
        fontSize: '16px',
        color: '#301C58',
        background: 'white',
        display: 'flex',
        margin: '15px 10px 10px',
    }

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
                {createEvents
                ? 
                <Col push={7} span={3}>
                    <Button type="text" style={profBtn} onClick={navigateToCreation} >
                        Create Event
                    </Button>
                </Col>
                : ""}
                <Col push={1} span={3}>
                    {profile
                    ?  
                    <Button type="text" style={profBtn} onClick={navigateToProfile} >
                        <CgProfile size={24}/>
                    </Button>
                    : 
                    <Button type="text" style={profBtn} onClick={navigateToLogin} >
                        LOGIN
                    </Button>
                    }
                    
                </Col>
            </Row>
            {/* </Navigation> */}

        </>
    )
}

export default NavEventBar;