import React, { Component } from 'react';
import Profile12 from '../../../assets/images/profile/profile-12.jpeg';
import Profile18 from '../../../assets/images/profile/profile-18.jpeg';
import Advertisement from '../../Advertisement.js';
import { Link } from 'react-router-dom';

class Section1 extends Component {
    render() {
        return(
            <div className="container container--largest">
                <div className="grid">
                    <div className="grid__item four-fifths interview__main-container">    
                        <h2 className="interview__main-title interview__main-title--first">Sacerdotes / Religiosas</h2>
                        <div className="interview__gallery-profile">
                            <Link to="/entrevista/padre-angel-espinosa"><img className="interview__gallery-image" src={Profile18} alt="" ></img></Link>
                            <span className="interview__gallery-text">Padre Ángel Espinosa</span>
                        </div>    
                        <div className="interview__gallery-profile">
                            <Link to="/entrevista/hermana-ines-de-jesus"><img className="interview__gallery-image" src={Profile12} alt="" ></img></Link>
                            <span className="interview__gallery-text">Hermana Inés de Jesús</span>
                        </div>
                    </div>
                    <div className="grid__item one-fifth">
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
            </div>
        )
    }
}

export default Section1;