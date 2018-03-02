import React, { Component } from "react";
import ImageLeft from '../assets/images/2.jpg';

class Editions extends Component {
  render() {
    return (
      <div className="grid">
        <div className="grid__item three-tenths edition__left">
            <div className="edition__left-title">
                <h2>Ediciones</h2>
            </div>
            <div className="edition__left-description">
                <img className="edition__left-description-image" src={ImageLeft} alt="Christ on the cross"></img>
                <span className="edition__left-description-text">Última Edición - 018</span>
                <span className="edition__left-description-text">Febrero - Marzo / 2018 </span>
            </div>
            <div className="edition__left-advertisement">
                <div className="edition__left-advertisement-description">
                    <span className="edition__left-advertisement-text">TUS CLIENTES PUEDEN SER NUESTROS LECTORES</span>
                    <span className="edition__left-advertisement-subtext"> PAUTA AQUI</span>
                    <span className="edition__left-advertisement-subtext"> MAYOR INFO</span>
                    <span className="edition__left-advertisement-subtext"> TOTUSTUUS1207@GMAIL.COM</span> 
                </div>
                <div className="edition__left-advertisement-image">
                </div>
            </div>
        </div>
        <div className="grid__item one-half edition__gallery">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div className="grid__item one-fifth edition__right">
            <div></div>
        </div>
      </div>
    );
  }
}

export default Editions;
