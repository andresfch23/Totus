import React, { Component } from 'react';
import MagazineImageRight from  '../assets/images/2.jpg'
import MagazineImageLeft from '../assets/images/image.jpg'

class MainSection extends Component {
    render() {
        return(
            <div>
                <div className="grid main">
                    <div className="grid__item one-third">
                        <div className="main__advertisment">
                            <h1>Una Bolsa de papel es ..</h1>
                        </div>
                        <div className="main__magazine">
                            <img className="main__image" src={MagazineImageLeft} alt="Virgin Mary"></img>
                        </div>
                    </div>

                    <div className="grid__item one-third">
                        <div className="main__menu">
                            <div className="main__menu-section main__menu-section--blue-dark">
                                <h2 className="main__menu-text">¿Quienes Somos?</h2>
                            </div>
                            <div className="main__menu-section main__menu-section--blue-light">
                                <h2 className="main__menu-text">Ediciones</h2>
                            </div>
                            <div className="main__menu-section main__menu-section--blue-cloud">
                                <h2 className="main__menu-text">Entrevistas Exclusivas de TOTUS TUUS</h2>
                            </div>
                            <div className="main__menu-section main__menu-section--blue-deep">
                                <h2 className="main__menu-text">Contacto</h2>
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
                        <div className="main__advertisment">
                            <h1 className="main__advertistment-text">¿Por que los catolicos decidimos incursionar en la politica?</h1>
                        </div>
                    </div>
                </div>
                <div className="main__social">
                        <div className="main__icon"></div>
                        <div className="main__icon"></div> 
                        <div className="main__icon"></div>
                        <div className="main__icon"></div>
                </div>
            </div>
        )
    }
}

export default MainSection;

