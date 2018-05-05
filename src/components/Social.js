import React, { Component } from 'react';
import FacebookLogo from '../assets/images/logos/face.png';
import InstagramLogo from '../assets/images/logos/insta.png';

class Social extends Component {
    render() {
        return(
            <div className="social">
                <a href="https://www.facebook.com/revistatotustuus/" target="_blank" rel="noopener noreferrer"><img className="social__icon" src={FacebookLogo} alt="Facebook logo"></img></a>
                <a href="https://www.instagram.com/revistatotustuus/" target="_blank" rel="noopener noreferrer"><img className="social__icon" src={InstagramLogo} alt="Instagram logo"></img></a>
            </div>
        )
    }
}

export default Social;