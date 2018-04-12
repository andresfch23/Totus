import React, { Component } from 'react';
import FacebookLogo from '../assets/images/logos/face.png';
import InstagramLogo from '../assets/images/logos/insta.png';
import WhatsappLogo from '../assets/images/logos/whatsapp.png';
import GmailLogo from '../assets/images/logos/gmail.png'; 


class Footer extends Component {
    render() {
        return(
            <div className="social social--footer">
                <a href="https://www.facebook.com/revistatotustuus/" target="_blank"><img className="social__icon" src={FacebookLogo} alt="Facebook logo"></img></a>
                <a href="https://www.instagram.com/revistatotustuus/" target="_blank"><img className="social__icon" src={InstagramLogo} alt="Instagram logo"></img></a>
            </div>
        )
    }
}

export default Footer;