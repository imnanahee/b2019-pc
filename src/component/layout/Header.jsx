import React from 'react';
import logoImage from '../images/ci_skyblue.png';
// import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    return (
        <header id="header">
            <div className="wrapper">
                <h1><Link to={'/'}><img src={logoImage} alt="코웨이 coway" /></Link></h1>
                <div className="directNumber">
                    <FontAwesomeIcon icon={faPhoneVolume} size="xs" />
                    <span>0000-0000</span>
                </div>
            </div>
            <Nav />
        </header>
    );
};

export default Header;