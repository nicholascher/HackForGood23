import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { IoMdPeople, IoIosBriefcase, IoIosPhonePortrait, IoIosLogIn } from 'react-icons/io';
import { SiHandshake } from 'react-icons/si';
import {Link} from 'react-scroll';
import {
    loginPath,
    knowmore,
    basePath,
    partners,
    getintouch
} from '../../urlConfig/pathURL';

const { Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem('Login', '1', <IoIosLogIn />),
    getItem('Who We Are', '2', <IoMdPeople />),
    getItem('What We Do', '3', <IoIosBriefcase />),
    getItem('What We Partner', '4', <SiHandshake />),
    getItem('Get In Touch', '5', <IoIosPhonePortrait />),

];

const SideBar = ({ isOpen, toggle }) => {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <Sider collapsible={true} breakpoint="lg"
                collapsed={collapsed}
                onCollapse={() => {
                    if (isOpen) {
                        setCollapsed(true);
                    } else {
                        setCollapsed(false);
                    }
                }}
                onClick={toggle}
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'relative',
                    left: 0,
                    top: 0,
                    bottom: 0,
                }}
            >
                <div style={{
                    height: 32, margin: 5,
                    color: 'white', textAlign: 'center', alignItems: 'center'
                }} >
                </div>
                {/* <Menu theme="dark" defaultSelectedKeys={['2']} mode="inline" items={items} onClick={changePage} /> */}
                <ul >
                    <li className='nav-item'>
                        <Link to="login" spy={true} smooth={true} offset={50} duration={500} >Login</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="home" spy={true} smooth={true} offset={50} duration={500} >Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="knowmore" spy={true} smooth={true} offset={50} duration={500} >Who We Are</Link>
                    </li>
                    <li className='nav-item'>
                        < Link to='knowmore'spy={true} smooth={true} offset={50} duration={500} >What We Do</Link>
                    </li>
                    <li className='nav-item'>
                        < Link to='partners'spy={true} smooth={true} offset={50} duration={500} >Partners</Link>
                    </li>
                    </ul>
            </Sider>
        </>
    )

}

export default SideBar;