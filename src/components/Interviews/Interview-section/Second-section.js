import React, { Component } from 'react';
import Profile3 from '../../../assets/images/profile/profile-3.jpeg';
import Profile4 from '../../../assets/images/profile/profile-4.jpeg';
import Profile8 from '../../../assets/images/profile/profile-8.jpeg';
import Profile10 from '../../../assets/images/profile/profile-10.jpeg';
import Profile13 from '../../../assets/images/profile/profile-13.jpeg';
import Profile17 from '../../../assets/images/profile/profile-17.jpeg';
import Advertisement from '../../Advertisement.js';
import { Link } from 'react-router-dom';

class Section2 extends Component {
    render() {
        return(
            <div className="grid">
                <div className="grid__item three-quarters interview__main-container">    
                    <h2 className="interview__main-title interview__main-title--second">Músicos Católicos</h2>
                    <div className="interview__gallery">
                        <div className="interview__gallery-profile">
                            <Link to="/entrevista/luna-eikar"><img className="interview__gallery-image" src={Profile4} alt="" ></img></Link>
                            <span className="interview__gallery-text">Luna Eikar</span>                        
                        </div>    
                        <div className="interview__gallery-profile">
                            <Link to="/entrevista/celines-diaz"><img className="interview__gallery-image" src={Profile3} alt="" ></img></Link>
                            <span className="interview__gallery-text">Celinés Díaz</span>                        
                        </div>
                        <div className="interview__gallery-profile">
                            <Link to="/entrevista/son-by-4"><img className="interview__gallery-image" src={Profile13} alt="" ></img></Link>
                            <span className="interview__gallery-text">Son By 4 </span>
                        </div>
                        <div className="interview__gallery-profile">
                            <Link to="/entrevista/joan-sanchez"><img className="interview__gallery-image" src={Profile10} alt="" ></img></Link>
                            <span className="interview__gallery-text interview__gallery-text-space">Joan Sanchez </span>
                        </div>
                        <div className="interview__gallery-profile">
                            <Link to="/entrevista/jesse-demara"><img className="interview__gallery-image" src={Profile8} alt=""></img></Link> 
                            <span className="interview__gallery-text">Jesse Demara</span>                       
                        </div>
                        <div className="interview__gallery-profile">
                            <Link to="/entrevista/dumas-y-mary"><img className="interview__gallery-image interview__gallery-image--increase" src={Profile17} alt="" ></img></Link>
                            <span className="interview__gallery-text">Dumas y Mary</span>
                        </div>
                    </div>
                </div>
                <div className="grid__item one-quarter">
                    <Advertisement />
                    <div className="advertisement__description advertisement__description-second">
                        <span className="advertisement__text">TUS CLIENTES PUEDEN SER NUESTROS LECTORES</span>
                        <span className="advertisement__subtext"> PAUTA AQUI</span>
                        <span className="advertisement__subtext"> MAYOR INFO</span>
                        <span className="advertisement__subtext"> TOTUSTUUS1207@GMAIL.COM</span> 
                    </div>
                    <div className="advertisement__image advertisement__image--alternative">
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Section2;