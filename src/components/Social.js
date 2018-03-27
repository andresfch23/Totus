import React, { Component } from 'react';
import FacebookLogo from '../assets/images/logos/face.png';
import InstagramLogo from '../assets/images/logos/insta.png';
import WhatsappLogo from '../assets/images/logos/whatsapp.png';
import GmailLogo from '../assets/images/logos/gmail.png'; 

class Social extends Component {
    render() {
        return(
            <div className="social">
                <a href="https://www.facebook.com/revistatotustuus/"><img className="social__icon" src={FacebookLogo} alt="Facebook logo"></img></a>
                <a href="https://www.instagram.com/revistatotustuus/"><img className="social__icon" src={InstagramLogo} alt="Instagram logo"></img></a>
                <div className="social__icon social__icon--container">
                    <img className="social__icon-whatsapp" src={WhatsappLogo} alt="Whatsapp logo"></img>
                </div>
                <img className="social__icon" src={GmailLogo} alt="Gmail logo"></img>
            </div>
        )
    }
}

export default Social;