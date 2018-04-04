import React, { Component } from 'react';
import Profile1 from '../../../assets/images/profile/profile-1.jpeg';
import Profile2 from '../../../assets/images/profile/profile-2.jpeg';
import Profile5 from '../../../assets/images/profile/profile-5.jpeg';
import Profile6 from '../../../assets/images/profile/profile-6.jpeg';
import Profile7 from '../../../assets/images/profile/profile-7.jpeg';
import Profile9 from '../../../assets/images/profile/profile-9.jpeg';
import Profile11 from '../../../assets/images/profile/profile-11.jpeg';
import Profile14 from '../../../assets/images/profile/profile-14.jpeg';
import Profile15 from '../../../assets/images/profile/profile-15.jpeg';
import Profile16 from '../../../assets/images/profile/profile-16.jpeg';
import Advertisement from '../../Advertisement.js';
import { Link } from 'react-router-dom';

class Section3 extends Component {
    render() {
        return(
            <div className="grid">
                <div className="grid__item three-quarters interview__main-container">    
                    <h2 className="interview__main-title interview__main-title--third">Testimonios de Conversión</h2>
                    <div className="interview__gallery">    
                        <div className="interview__gallery-profile">
                            <Link to="/entrevista/rochi-stevenson"><img className="interview__gallery-image" src={Profile1} alt="" ></img></Link>
                                <span className="interview__gallery-text interview__gallery-text--one">Rochi Stevenson </span>
                                <span className="interview__gallery-text interview__gallery-text--retract">Presentadora de televisión</span>                      
                        </div>
                        <div className="interview__gallery-profile">
                            <Link to="/entrevista/amada-rosa-perez"><img className="interview__gallery-image interview__gallery-image--increase" src={Profile16} alt="" ></img></Link>
                            <span className="interview__gallery-text interview__gallery-text--one">Amada Rosa Perez </span>
                            <span className="interview__gallery-text interview__gallery-text--two">Ex Actriz y Modelo</span>
                        </div>
                        <div className="interview__gallery-profile">
                            <Link to="/entrevista/wilson-lopez"><img className="interview__gallery-image" src={Profile5} alt="" ></img></Link>
                            <span className="interview__gallery-text interview__gallery-text--expand"> Wilson Lopez</span>
                            <span className="interview__gallery-text interview__gallery-text--two"> Ex Satánico</span>                        
                        </div>
                        <div className="interview__gallery-profile">
                            <Link to="/entrevista/alejandro-ordoñez"><img className="interview__gallery-image" src={Profile2} alt="" ></img></Link>
                                <span className="interview__gallery-text interview__gallery-text--one">Alejandro Ordoñez Maldonado</span>
                                <span className="interview__gallery-text interview__gallery-text--retract-two">Ex Procurador de la Nacion</span>                          
                        </div>
                        <div className="interview__gallery-profile">
                            <Link to="/entrevista/juan-manuel-cotelo"><img className="interview__gallery-image interview__gallery-image--increase" src={Profile11} alt="" ></img></Link>
                            <span className="interview__gallery-text interview__gallery-text--one">Juan Manuel Cotelo</span>
                            <span className="interview__gallery-text interview__gallery-text--retract-two">Productor de cine católico</span>
                        </div>
                        <div className="interview__gallery-profile">
                            <Link to="/entrevista/maria-angelica"><img className="interview__gallery-image" src={Profile7} alt="" ></img></Link>
                            <span className="interview__gallery-text interview__gallery-text--one">María Angélica Araujo</span>
                            <span className="interview__gallery-text interview__gallery-text--retract-two">Esposa de Felipe Gomez cantante católico</span>                       
                        </div>
                        <div className="interview__gallery-profile">
                            <Link to="/entrevista/felipe-arias"><img className="interview__gallery-image" src={Profile6} alt="" ></img></Link>
                            <span className="interview__gallery-text interview__gallery-text--one">Felipe Arias</span>
                            <span className="interview__gallery-text interview__gallery-text--retract-two">Periodista</span>                        
                        </div>
                        
                        <div className="interview__gallery-profile">
                            <Link to="/entrevista/ruben-garcia"><img className="interview__gallery-image" src={Profile9} alt="" ></img></Link>
                            <span className="interview__gallery-text interview__gallery-text interview__gallery-text--expand">Ruben Garcia</span>
                            <span className="interview__gallery-text interview__gallery-text interview__gallery-text--two">Un homosexual alcanzado por la</span>
                            <span className="interview__gallery-text interview__gallery-text interview__gallery-text--three">misericordia de Dios</span>                        
                        </div>
                        <div className="interview__gallery-profile">
                            <Link to="/entrevista/ricardo-castañon"><img className="interview__gallery-image interview__gallery-image--increase" src={Profile15} alt="" ></img></Link>
                            <span className="interview__gallery-text interview__gallery-text--one">Ricardo Castañon</span>
                            <span className="interview__gallery-text interview__gallery-text--two">Científico Boliviano</span>
                        </div>
                        <div className="interview__gallery-profile">
                            <Link to="/entrevista/fernando-casanova"><img className="interview__gallery-image interview__gallery-image--increase" src={Profile14} alt="" ></img></Link>
                            <span className="interview__gallery-text interview__gallery-text">Fernando Casanova</span>
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
                    <div className="advertisement__description advertisement__description-second">
                        <span className="advertisement__text">TUS CLIENTES PUEDEN SER NUESTROS LECTORES</span>
                        <span className="advertisement__subtext"> PAUTA AQUI</span>
                        <span className="advertisement__subtext"> MAYOR INFO</span>
                        <span className="advertisement__subtext"> TOTUSTUUS1207@GMAIL.COM</span> 
                    </div>
                    <div className="advertisement__image advertisement__image--alternative">
                    </div>
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

export default Section3;