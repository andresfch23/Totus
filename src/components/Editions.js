import React, { Component } from "react";
import ImageLeft from '../assets/images/2.jpg';
import Image1 from '../assets/images/edition-images/1.jpeg';
import Image2 from '../assets/images/edition-images/2.jpeg';
import Image3 from '../assets/images/edition-images/3.jpeg';
import Image4 from '../assets/images/edition-images/4.jpeg';
import Image5 from '../assets/images/edition-images/5.jpeg';
import Image6 from '../assets/images/edition-images/6.jpeg';
import Image7 from '../assets/images/edition-images/7.jpeg';
import Image8 from '../assets/images/edition-images/8.jpeg';
import Image9 from '../assets/images/edition-images/9.jpeg';
import Image10 from '../assets/images/edition-images/10.jpeg';
import Image11 from '../assets/images/edition-images/11.jpeg';
import Image12 from '../assets/images/edition-images/12.jpeg';
import Image13 from '../assets/images/edition-images/13.jpeg';
import Image14 from '../assets/images/edition-images/14.jpeg';
import Image15 from '../assets/images/edition-images/15.jpeg';
import Image16 from '../assets/images/edition-images/16.jpeg';
import Image17 from '../assets/images/edition-images/17.jpeg';
import Pdf1 from '../assets/pdf_ediciones/001.pdf';
import Pdf2 from '../assets/pdf_ediciones/002.pdf';
import Pdf3 from '../assets/pdf_ediciones/003.pdf';
import Pdf4 from '../assets/pdf_ediciones/004.pdf';
import Pdf5 from '../assets/pdf_ediciones/005.pdf';
import Pdf6 from '../assets/pdf_ediciones/006.pdf';
import Pdf7 from '../assets/pdf_ediciones/007.pdf';
import Pdf8 from '../assets/pdf_ediciones/008.pdf';
import Pdf9 from '../assets/pdf_ediciones/009.pdf';
import Pdf10 from '../assets/pdf_ediciones/010.pdf';
import Pdf11 from '../assets/pdf_ediciones/011.pdf';
import Pdf12 from '../assets/pdf_ediciones/012.pdf';
import Pdf13 from '../assets/pdf_ediciones/013.pdf';
import Pdf14 from '../assets/pdf_ediciones/014.pdf';
import Pdf15 from '../assets/pdf_ediciones/015.pdf';
import Pdf16 from '../assets/pdf_ediciones/016.pdf';
import Pdf17 from '../assets/pdf_ediciones/017.pdf';


class Editions extends Component {
  render() {
    return (
      <div className="container container--large">  
        <div className="grid">
            <div className="grid__item one-quarter">
                <div className="edition__left-title">
                    <h2>Ediciones</h2>
                </div>
                <div className="edition__left-description">
                    <img className="edition__left-description-image" src={ImageLeft} alt="Christ on the cross"></img>
                    <span className="edition__left-description-text">Última Edición - 018</span>
                    <span className="edition__left-description-text">Febrero - Marzo / 2018 </span>
                </div>
                <div className="edition__advertisement">
                    <div className="edition__advertisement-description">
                        <span className="edition__advertisement-text">TUS CLIENTES PUEDEN SER NUESTROS LECTORES</span>
                        <span className="edition__advertisement-subtext"> PAUTA AQUI</span>
                        <span className="edition__advertisement-subtext"> MAYOR INFO</span>
                        <span className="edition__advertisement-subtext"> TOTUSTUUS1207@GMAIL.COM</span> 
                    </div>
                    <div className="edition__advertisement-image">
                    </div>
                </div>
            </div>
            <div className="grid grid__item one-half edition__gallery">
                <a href={Pdf17} target="_blank">
                    <div className="grid__item three-tenths edition__gallery-container">
                        <img className="edition__gallery-image" src={Image17} alt="edition 17"></img>
                        <span className="edition__gallery-text">Edición 017 </span>                               
                        <span className="edition__gallery-text">Octubre</span>
                        <span className="edition__gallery-text">Noviembre / 2017 </span>
                    </div>
                </a>
                <a href={Pdf16} target="_blank">
                    <div className="grid__item three-tenths edition__gallery-container">
                        <img className="edition__gallery-image" src={Image16} alt="edition 16"></img>
                        <span className="edition__gallery-text">Edición 016</span>
                        <span className="edition__gallery-text">Agosto</span>
                        <span className="edition__gallery-text">Septiembre / 2017</span>
                    </div>
                </a>
                <a href={Pdf15} target="_blank">
                    <div className="grid__item three-tenths edition__gallery-container">
                        <img className="edition__gallery-image" src={Image15} alt="edition 15"></img>
                        <span className="edition__gallery-text">Edición 015</span>
                        <span className="edition__gallery-text">Junio</span>
                        <span className="edition__gallery-text">Julio / 2017</span>
                    </div>
                </a>
                <a href={Pdf14} target="_blank">
                    <div className="grid__item three-tenths edition__gallery-container">
                        <img className="edition__gallery-image" src={Image14} alt="edition 14"></img>
                        <span className="edition__gallery-text">Edición 014</span>
                        <span className="edition__gallery-text">Abril - Mayo / 2017</span>
                    </div>
                </a>
                <a href={Pdf13} target="_blank">
                    <div className="grid__item three-tenths edition__gallery-container">
                        <img className="edition__gallery-image" src={Image13} alt="edition 13"></img>
                        <span className="edition__gallery-text">Edición 013</span>
                        <span className="edition__gallery-text">Febrero - Marzo</span>
                        <span className="edition__gallery-text">2017</span>
                    </div>
                </a>
                <a href={Pdf12} target="_blank">
                    <div className="grid__item three-tenths edition__gallery-container">
                        <img className="edition__gallery-image" src={Image12} alt="edition 12"></img>
                        <span className="edition__gallery-text">Edición 012</span>
                        <span className="edition__gallery-text">Octubre</span>
                        <span className="edition__gallery-text">Noviembre / 2016</span>
                    </div>
                </a>
                <a href={Pdf11} target="_blank">
                <div className="grid__item three-tenths edition__gallery-container">
                    <img className="edition__gallery-image" src={Image11} alt="edition 11"></img>
                    <span className="edition__gallery-text">Edición 011</span>
                    <span className="edition__gallery-text">Agosto</span>
                    <span className="edition__gallery-text">Septiembre / 2016 </span>
                </div>
                </a>
                <a href={Pdf10} target="_blank">
                    <div className="grid__item three-tenths edition__gallery-container">
                        <img className="edition__gallery-image" src={Image10} alt="edition 10"></img>
                        <span className="edition__gallery-text">Edición 010</span>
                        <span className="edition__gallery-text">Junio - Julio / 2016</span>
                    </div>
                </a>
                <a href={Pdf9} target="_blank">
                <div className="grid__item three-tenths edition__gallery-container">
                    <img className="edition__gallery-image" src={Image9} alt="edition 9"></img>
                    <span className="edition__gallery-text">Edición 009</span>
                    <span className="edition__gallery-text">Abril - Mayo / 2016</span>
                </div>
                </a>
                <a href={Pdf8} target="_blank">
                    <div className="grid__item three-tenths edition__gallery-container">
                        <img className="edition__gallery-image" src={Image8} alt="edition 8"></img>
                        <span className="edition__gallery-text">Edición 008</span>
                        <span className="edition__gallery-text">Febrero - Marzo</span>
                        <span className="edition__gallery-text">2016</span>
                    </div>
                </a>
                <a href={Pdf7} target="_blank">
                    <div className="grid__item three-tenths edition__gallery-container">
                        <img className="edition__gallery-image" src={Image7} alt="edition 7"></img>
                        <span className="edition__gallery-text">Edición 007</span>
                        <span className="edition__gallery-text"> Octubre</span>
                        <span className="edition__gallery-text">Noviembre / 2015</span>
                    </div>
                </a>
                <a href={Pdf6} target="_blank">
                    <div className="grid__item three-tenths edition__gallery-container">
                        <img className="edition__gallery-image" src={Image6} alt="edition 6"></img>
                        <span className="edition__gallery-text">Edición 006</span>
                        <span className="edition__gallery-text">Agosto</span>
                        <span className="edition__gallery-text">Septiembre / 2015</span>
                    </div>
                </a>
                <a href={Pdf5} target="_blank">
                    <div className="grid__item three-tenths edition__gallery-container">
                        <img className="edition__gallery-image" src={Image5} alt="edition 5"></img>
                        <span className="edition__gallery-text">Edición 005</span>
                        <span className="edition__gallery-text"> Junio - Julio / 2015</span>
                    </div>
                </a>
                <a href={Pdf4} target="_blank">
                    <div className="grid__item three-tenths edition__gallery-container">
                        <img className="edition__gallery-image" src={Image4} alt="edition 4"></img>
                        <span className="edition__gallery-text">Edición 004</span>
                        <span className="edition__gallery-text">Abril - Mayo / 2015</span>
                        <span className="edition__gallery-text"></span>
                    </div>
                </a>
                <a href={Pdf3} target="_blank">
                    <div className="grid__item three-tenths edition__gallery-container">
                        <img className="edition__gallery-image" src={Image3} alt="edition 3"></img>
                        <span className="edition__gallery-text">Edicion 003</span>
                        <span className="edition__gallery-text">Febrero - Marzo</span>
                        <span className="edition__gallery-text">2015</span>
                    </div>
                </a>
                <a href={Pdf2} target="_blank">
                    <div className="grid__item three-tenths edition__gallery-container">
                        <img className="edition__gallery-image" src={Image2} alt="edition 2"></img>
                        <span className="edition__gallery-text">Edición 002</span>
                        <span className="edition__gallery-text">Noviembre</span>
                        <span className="edition__gallery-text">Dicimembre 2014</span>
                    </div>
                </a>
                <a href={Pdf1} target="_blank">
                    <div className="grid__item three-tenths edition__gallery-container">
                        <img className="edition__gallery-image" src={Image1} alt="edition 1"></img>
                        <span className="edition__gallery-text">Edición 001</span>
                        <span className="edition__gallery-text">Septiembre</span>
                        <span className="edition__gallery-text">Octubre / 2014</span>
                    </div>
                </a>
            </div>
            <div className="grid__item one-fifth">
                <div className="edition__advertisement edition__advertisement-right">
                    <div className="edition__advertisement-image">
                    </div>
                    <div className="edition__advertisement-description edition__advertisement-description-right">
                        <span className="edition__advertisement-text">TUS CLIENTES PUEDEN SER NUESTROS LECTORES</span>
                        <span className="edition__advertisement-subtext"> PAUTA AQUI</span>
                        <span className="edition__advertisement-subtext"> MAYOR INFO</span>
                        <span className="edition__advertisement-subtext"> TOTUSTUUS1207@GMAIL.COM</span> 
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Editions;
