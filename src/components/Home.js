import React, { Component } from 'react';
import MagazineImageRight from  '../assets/images/2.jpg';
import MagazineImageLeft from '../assets/images/image.jpg';
import { Link } from 'react-router-dom';
import Carousel1 from './Carousel.js';

class Home extends Component {
    render() {
        return(
            <div>
                <div className="grid main">
                    <div className="grid__item one-third">
                        <div className="main__advertisement">
                            <Carousel1 />
                        </div>
                        <div className="main__magazine">
                            <img className="main__image" src={MagazineImageLeft} alt="Virgin Mary"></img>
                        </div>
                    </div>

                    <div className="grid__item one-third">
                        <div className="main__menu">
                            <div className="main__menu-section main__menu-section--blue-dark">
                                <h2 className="main__menu-text main__menu-text--about"><Link className="main__menu-text-link" to='quienes-somos'>¿Quienes Somos?</Link></h2>
                            </div>
                            <div className="main__menu-section main__menu-section--blue-light">
                                <h2 className="main__menu-text main__menu-text--editions"><Link className="main__menu-text-link" to='ediciones'>Ediciones</Link></h2>
                            </div>
                            <div className="main__menu-section main__menu-section--blue-cloud">
                                <h2 className="main__menu-text main__menu-text--interviews"><Link className="main__menu-text-link" to='entrevistas'>Entrevistas Exclusivas de TOTUS TUUS</Link></h2>
                            </div>
                            <div className="main__menu-section main__menu-section--blue-deep">
                                <h2 className="main__menu-text main__menu-text--contact"><span>Contacto</span></h2>
                            </div>
                        </div>
                        <div className="main__client">
                            <div className="main__client-promo">
                                <span className="main__client-promo-text">TUS CLIENTES PUEDEN SER NUESTROS LECTORES</span>
                                <span className="main__client-promo-subtext main__client-promo-subtext-space"> PAUTA AQUI</span>
                                <span className="main__client-promo-subtext"> MAYOR INFO</span>
                                <span className="main__client-promo-subtext"> TOTUSTUUS1207@GMAIL.COM</span>    
                            </div>
                            <div className="main__client-contact">
                                
                            </div>
                        </div>
                        <div className="main__client-info">
                            <span className="main__client-text">totustuus1207@gmail.com</span>
                            <span> +57 3012784279</span>
                            <span> Barranquilla - Colombia</span>
                        </div>
                    </div>

                    <div className="grid__item one-third">
                        <div className="main__magazine">
                            <img className="main__image" src={MagazineImageRight} alt="Crist on the cross"></img>
                        </div>
                        <div className="main__advertisement">
                            <h1 className="main__advertisement-text-down">¿Por que los catolicos decidimos incursionar en la politica?</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;

