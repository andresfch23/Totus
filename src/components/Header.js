import React, { Component } from 'react';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import Social from './Social.js';

class Header extends Component {
    render() {
        return(
            <header className="header">
                <Social />
                <div className="header__caption">
                    <p className="header__text">"Mi pasado, Señor, lo confío a tu misericordia, mi presente a tu amor, mi futuro a tu providencia.” San Pío de Pietrecina</p>
                </div>
                
                <Link to='/'><img className="header__image" src={logo} alt="user face"></img></Link>
            </header>
        );
    }
}

export default Header;