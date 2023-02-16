import React, { useState, useEffect } from 'react';
import { TbAlignRight } from 'react-icons/tb';
import { useNavigate } from "react-router-dom";
import { NContainer, Navigation, NMenu, NItems, Hamburger, NLinks } from './NContainer';
import { Logo } from './Logo';
import { Button } from 'antd';
import {
    getintouch,
    loginPath,
} from '../../urlConfig/pathURL.js';
import { Link } from 'react-scroll';

const NavBar = ({ toggle }) => {
    const navigate = useNavigate();
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
    )

    useEffect(() => {
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);

    const navigateToSignIn = (e) => {
        navigate(loginPath);
    };

    const navigateToContact = (e) => {
        navigate(getintouch);
    };

    const buttonStyle = {
        textAlign: 'center',
        fontFamily: 'Lexend Deca',
        fontSize: '16px',
        color: '#301C58',
        background: 'white',
        display: 'flex',
        margin: '10px'
    };

    const navStyle = {
        color : 'white',
        fontFamily: 'Lexend Deca',
        fontSize: '1rem',
    }
    return (
        <>
            <Navigation>
                <NContainer>
                    <Logo >
                        <Link style={navStyle} to="home" spy={true} smooth={true} offset={-100} duration={500} >UNICORNS FOR GOOD</Link> 
                    </Logo>
                  <Button type="primary" style={buttonStyle} onClick={navigateToSignIn}>
                        Sign In
                    </Button>
                </NContainer>
            </Navigation>
        </>
    )
}

export default NavBar;

