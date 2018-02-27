import React, { Component } from 'react';
import logo from '../assets/images/nombre.png';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return(
            <header className="header">
                <div className="header__social">
                    <div className="header__icon"></div>
                    <div className="header__icon"></div> 
                    <div className="header__icon"></div>
                    <div className="header__icon"></div>
                </div>

                <div className="header__caption">
                    <p className="header__text">"Mi pasado, Señor, lo confío a tu misericordia, mi presente a tu amor, mi futuro a tu providencia.” San Pío de Pietrecina</p>
                </div>
                
                <Link to='/'><img className="header__image" src={logo} alt="user face"></img></Link>
            </header>
        );
    }
}

export default Header;