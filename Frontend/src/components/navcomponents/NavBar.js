import React, { useState, useEffect } from 'react';
import { TbAlignRight } from 'react-icons/tb';
import { CgProfile } from 'react-icons/cg';
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
    const [profile, setProfile] = useState(false);
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
    )

    useEffect(() => {
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener('change', e => setMatches(e.matches));

        setProfile(window.token != null);
    }, []);

    const navigateToSignIn = (e) => {
        navigate(loginPath);
    };

    const navigateToProfile = (e) => {
        navigate();
    }

    const navigateToContact = (e) => {
        navigate(getintouch);
    };

    const buttonStyle = {
        textAlign: 'center',
        fontFamily: 'Playfair Display',
        fontSize: '16px',
        color: '#301C58',
        background: 'white',
        display: 'flex',
        margin: '10px'
    };

    const navStyle = {
        color : 'white',
        fontFamily: 'Playfair Display',
        fontSize: '1rem',
    }
    return (
        <>
            <Navigation>
                <NContainer>
                    <Logo >
                        <Link style={navStyle} to="home" spy={true} smooth={true} offset={-100} duration={500} >UNICORNS FOR GOOD</Link> 
                    </Logo>
                    <Hamburger onClick={toggle}>
                        <TbAlignRight />
                    </Hamburger>
                    <NMenu>
                        <NItems>
                            <NLinks>
                                <Link  activeClass="active" style={navStyle} to="knowmore" spy={true} smooth={true} offset={-100} duration={500} >Who We Are</Link>
                            </NLinks>
                        </NItems>
                        <NItems>
                            <NLinks>
                                <Link style={navStyle} to="whatwedo" spy={true} smooth={true} offset={-100} duration={500} >What We Do</Link>
                            </NLinks>
                        </NItems>
                        <NItems>
                            <NLinks>
                                < Link style={navStyle} to='partners' spy={true} smooth={true} offset={-50} duration={500} >Partners</Link>
                            </NLinks>
                        </NItems>
                        <NItems>
                            <NLinks>
                                < Link style={navStyle} to='events' spy={true} smooth={true} offset={-100} duration={500} >Events</Link>
                            </NLinks>
                        </NItems>
                        <NItems>
                            <NLinks>
                                < Link style={navStyle} to='getintouch' spy={true} smooth={true} offset={-100} duration={500} >Get In Touch</Link>
                                {/* <Button type="text" style={navStyle} onClick={navigateToContact}>Get In Touch</Button> */}
                            </NLinks>
                        </NItems>
                    </NMenu>
                    {profile
                    ? (<Button type="primary" style={buttonStyle} onClick={navigateToProfile}><CgProfile size={24}/></Button>) 
                    : matches && (<Button type="primary" style={buttonStyle} onClick={navigateToSignIn}>
                        Sign In
                    </Button>)}
                </NContainer>
            </Navigation>
        </>
    )
}

export default NavBar;

