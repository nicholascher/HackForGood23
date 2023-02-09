import styled from 'styled-components';
import { Link } from 'react-router-dom';

import '../../index.css'; 
// react router to link to the login page or main page
export const Logo = styled(Link)`
    color: white;
    display: flex;
    justify-self: flex-start; 
    font-family: 'Playfair Display', serif;
    font-size: 1.5 rem;
    align-items: center;
    margin-left: 24px; 
    cursor: pointer; 
`