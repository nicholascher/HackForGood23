import styled from 'styled-components';
import '../../index.css';
import { Link } from 'react-scroll';

export const NContainer = styled.div`
    height: 65px; 
    display: flex; 
    width: 100%;
    font-family: 'Lexend Deca', sans-serif;
    justify-content: space-between;
    align-items: center;
`

export const Navigation = styled.nav`
font-family: 'Lexend Deca', sans-serif;
    font-size: 1rem;
    background: #301C58;
    justify-content: center;
    position: sticky;
    height: 65px; 
    display: flex;
    margin-top:-80px;
    top: 0;
    z-index:10;
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const Hamburger = styled.div`
    display: none; 
    // only display in desktop mode

    @media screen and (max-width: 768px) {
        
        color: white;
        display: block;
        top: 0; 
        right: 0;
        position: absolute;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 1.5rem;
        cursor:pointer;
        transform: translate(-100%, 60%);
    }
`

export const NMenu = styled.ul`
    display:flex;
    list-style: none; 
    text-align: center;
    width: 75%;
    margin: 0;
    align-items: center;
    justify-content: space-evenly;
    @media screen and (max-width: 768px) {
        display:none;
    }
`

export const NItems = styled.li`
    height: 65px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 1rem;
    // display: flex; 
`

export const NLinks = styled(Link)`
    color: white;
    display:flex;
    text-decoration: none; 
    height:100%;
    cursor:pointer;
    text-align: center;
    align-items: center;
    // padding: 0 1 rem;

    // highlight the link being clicked on 
    &.active {
        border-bttom: 3px solid red
    }
`
