import React, { Component } from 'react';
import Advertisement from './Advertisement.js';
import Profile1 from '../assets/images/profile/profile-1.jpeg';
import Profile2 from '../assets/images/profile/profile-2.jpeg';
import Profile3 from '../assets/images/profile/profile-3.jpeg';
import Profile4 from '../assets/images/profile/profile-4.jpeg';
import Profile5 from '../assets/images/profile/profile-5.jpeg';
import Profile6 from '../assets/images/profile/profile-6.jpeg';
import Profile7 from '../assets/images/profile/profile-7.jpeg';
import Profile8 from '../assets/images/profile/profile-8.jpeg';
import Profile9 from '../assets/images/profile/profile-9.jpeg';
import Profile10 from '../assets/images/profile/profile-10.jpeg';
import Profile11 from '../assets/images/profile/profile-11.jpeg';
import Profile12 from '../assets/images/profile/profile-12.jpeg';
import Profile13 from '../assets/images/profile/profile-13.jpeg';
import Profile14 from '../assets/images/profile/profile-14.jpeg';
import Profile15 from '../assets/images/profile/profile-15.jpeg';
import Profile16 from '../assets/images/profile/profile-16.jpeg';
import Profile17 from '../assets/images/profile/profile-17.jpeg';
import Profile18 from '../assets/images/profile/profile-18.jpeg';
import { Link } from 'react-router-dom';

class Interviews extends Component {
    render() {
        return(
            <div className="grid">
                <div className="grid__item three-quarters interview__main-container">    
                    <h2 className="interview__main-title">Entrevistas Exclusivas de TOTUS TUUS</h2>
                    <div className="interview__gallery">    
                        <div className="interview__gallery-profile interview__gallery-profile--one">
                            <Link to="entrevista/rochi-stevenson"><img className="interview__gallery-image" src={Profile1} alt="" ></img></Link>
                                <span className="interview__gallery-text interview__gallery-text-space">Rochi Stevenson </span>
                                <span className="interview__gallery-text">Presentadora</span>   
                                <span className="interview__gallery-text"> de televisión</span>                    
                        </div>
                        <div className="interview__gallery-profile">
                            <Link to="entrevista/alejandro-ordoñez"><img className="interview__gallery-image" src={Profile2} alt="" ></img></Link>
                                <span className="interview__gallery-text interview__gallery-text-space">Ex Procurador de</span>
                                <span className="interview__gallery-text">la Nacion</span>   
                                <span className="interview__gallery-text">Alejandro Ordoñez</span>
                                <span className="interview__gallery-text">Maldonado</span>                         
                        </div>
                        <div className="interview__gallery-profile">
                            <Link to="entrevista/celines-diaz"><img className="interview__gallery-image" src={Profile3} alt="" ></img></Link>
                            <span className="interview__gallery-text interview__gallery-text-space">Celinés Díaz</span>                        
                        </div>
                        <div className="interview__gallery-profile">
                            <Link to="entrevista/luna-eikar"><img className="interview__gallery-image" src={Profile4} alt="" ></img></Link>
                            <span className="interview__gallery-text interview__gallery-text-space">Luna Eikar</span>                        
                        </div>
                        <div className="interview__gallery-profile">
                            <Link to="entrevista/wilson-lopez"><img className="interview__gallery-image" src={Profile5} alt="" ></img></Link>
                            <span className="interview__gallery-text interview__gallery-text-space"> Wilson Lopez</span>
                            <span className="interview__gallery-text"> Ex Satánico</span>                        
                        </div>
                        <div className="interview__gallery-profile interview__gallery-profile--six">
                            <Link to="entrevista/felipe-arias"><img className="interview__gallery-image" src={Profile6} alt="" ></img></Link>
                            <span className="interview__gallery-text interview__gallery-text-space">Felipe Arias</span>
                            <span className="interview__gallery-text">Periodista</span>                        
                        </div>
                        <div className="interview__gallery-profile">
                            <Link to="entrevista/maria-angelica"><img className="interview__gallery-image" src={Profile7} alt="" ></img></Link>
                            <span className="interview__gallery-text interview__gallery-text-space">María Angélica Araujo</span>
                            <span className="interview__gallery-text">Esposa de Felipe </span>
                            <span className="interview__gallery-text">Gomez cantante </span>
                            <span className="interview__gallery-text">católico </span>                        
                        </div>
                        <div className="interview__gallery-profile interview__gallery-profile--eight">
                            <Link to="entrevista/jesse-demara"><img className="interview__gallery-image" src={Profile8} alt=""></img></Link> 
                            <span className="interview__gallery-text interview__gallery-text-space">Jesse Demara</span>                       
                        </div>
                        <div className="interview__gallery-profile">
                            <Link to="entrevista/ruben-garcia"><img className="interview__gallery-image" src={Profile9} alt="" ></img></Link>
                            <span className="interview__gallery-text interview__gallery-text-space">Ruben Garcia</span>
                            <span className="interview__gallery-text">“Un homosexual alcanzado por la</span>
                            <span className="interview__gallery-text">misericordia de Dios”</span>                        
                        </div>
                        <div className="interview__gallery-profile interview__gallery-profile--ten">
                            <Link to="entrevista/joan-sanchez"><img className="interview__gallery-image interview__gallery-image--increase" src={Profile10} alt="" ></img></Link>
                            <span className="interview__gallery-text interview__gallery-text-space interview__gallery-text-expand">Joan Sanchez </span>
                        </div>
                        <div className="interview__gallery-profile interview__gallery-profile--eleven">
                            <Link to="entrevista/juan-manuel-cotelo"><img className="interview__gallery-image interview__gallery-image--increase" src={Profile11} alt="" ></img></Link>
                            <span className="interview__gallery-text interview__gallery-text-space interview__gallery-text-expand">Juan Manuel</span>
                            <span className="interview__gallery-text interview__gallery-text-expand">Cotelo (Productor </span>
                            <span className="interview__gallery-text interview__gallery-text-expand">de cine católico) </span>
                        </div>
                        <div className="interview__gallery-profile interview__gallery-profile--twelve">
                            <Link to="entrevista/hermana-ines-de-jesus"><img className="interview__gallery-image interview__gallery-image--increase-two" src={Profile12} alt="" ></img></Link>
                            <span className="interview__gallery-text interview__gallery-text-space interview__gallery-text-expand-two">Hermana Inés de Jesús</span>
                        </div>
                        <div className="interview__gallery-profile interview__gallery-profile--thirteen">
                            <Link to="entrevista/son-by-4"><img className="interview__gallery-image interview__gallery-image--increase" src={Profile13} alt="" ></img></Link>
                            <span className="interview__gallery-text interview__gallery-text-space interview__gallery-text-expand">Son By 4 </span>
                        </div>
                        <div className="interview__gallery-profile interview__gallery-profile--fourteen">
                            <Link to="entrevista/fernando-casanova"><img className="interview__gallery-image interview__gallery-image--increase" src={Profile14} alt="" ></img></Link>
                            <span className="interview__gallery-text interview__gallery-text-space interview__gallery-text-expand">Fernando</span>
                            <span className="interview__gallery-text interview__gallery-text-expand">Casanova</span>
                        </div>
                        <div className="interview__gallery-profile interview__gallery-profile--fifteen">
                            <Link to="entrevista/ricardo-castañon"><img className="interview__gallery-image interview__gallery-image--increase" src={Profile15} alt="" ></img></Link>
                            <span className="interview__gallery-text interview__gallery-text-space interview__gallery-text-expand">Ricardo Castañon</span>
                            <span className="interview__gallery-text interview__gallery-text-expand">Científico Boliviano</span>
                        </div>
                        <div className="interview__gallery-profile interview__gallery-profile--sixteen">
                            <Link to="entrevista/amada-rosa-perez"><img className="interview__gallery-image interview__gallery-image--increase" src={Profile16} alt="" ></img></Link>
                            <span className="interview__gallery-text interview__gallery-text-space interview__gallery-text-expand">Amada Rosa Perez </span>
                            <span className="interview__gallery-text interview__gallery-text-expand">Ex Actriz y Modelo</span>
                        </div>
                        <div className="interview__gallery-profile interview__gallery-profile--seventeen">
                            <Link to="entrevista/dumas-y-mary"><img className="interview__gallery-image interview__gallery-image--increase" src={Profile17} alt="" ></img></Link>
                            <span className="interview__gallery-text interview__gallery-text-space interview__gallery-text-expand">Dumas y Mary</span>
                        </div>
                        <div className="interview__gallery-profile">
                            <Link to="entrevista/padre-angel-espinosa"><img className="interview__gallery-image interview__gallery-image--increase" src={Profile18} alt="" ></img></Link>
                            <span className="interview__gallery-text interview__gallery-text-space interview__gallery-text-expand">Padre Ángel</span>
                            <span className="interview__gallery-text interview__gallery-text-expand">Espinosa</span>
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
                    <div className="advertisement__image advertisement__image-second">
                    </div>
                </div>
            </div>
        )
    }
}

export default Interviews;