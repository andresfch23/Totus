import React, { Component } from "react";
import MagazineImageRight from "../assets/images/2.jpg";
import MagazineImageLeft from "../assets/images/image.jpg";
import { Link } from "react-router-dom";
import Carousel from "./Carousel.js";
import Image1 from "../assets/images/publi1.jpg";
import Image2 from "../assets/images/publi2.jpg";
import Image3 from "../assets/images/publi3.jpg";
import AdvertisementImage from '../assets/images/Comprar.jpg';

class Home extends Component {
  render() {
    return (
      <div className="container container--max">
        <div className="grid main">
          <div className="grid__item one-third">
            <Carousel images={[Image1, Image2, Image3]} />
            <div className="main__magazine">
              <img
                className="main__image"
                src={MagazineImageLeft}
                alt="Virgin Mary"
              />
            </div>
          </div>

          <div className="grid__item one-third">
            <div className="main__menu">
              <Link className="main__menu-text-link" to="quienes-somos">
                <div className="main__menu-section main__menu-section--blue-dark">
                  <h2 className="main__menu-text main__menu-text--about">
                    ¿Quienes Somos?
                  </h2>
                </div>
              </Link>
              <Link className="main__menu-text-link" to="ediciones">
                <div className="main__menu-section main__menu-section--blue-light">
                  <h2 className="main__menu-text main__menu-text--editions">
                    Ediciones
                  </h2>
                </div>
              </Link>
              <Link className="main__menu-text-link" to="entrevistas">
                <div className="main__menu-section main__menu-section--blue-cloud">
                  <h2 className="main__menu-text main__menu-text--interviews">
                    Entrevistas Exclusivas de TOTUS TUUS
                  </h2>
                </div>
              </Link>
              <div className="main__menu-section main__menu-section--blue-deep">
                <h2 className="main__menu-text main__menu-text--contact">
                  <span>Contacto</span>
                </h2>
              </div>
            </div>
            <div className="main__client">
              <div className="main__client-promo">
                <span className="main__client-promo-text">
                  TUS CLIENTES PUEDEN SER NUESTROS LECTORES
                </span>
                <span className="main__client-promo-subtext main__client-promo-subtext-space">
                  {" "}
                  PAUTA AQUI
                </span>
                <span className="main__client-promo-subtext"> MAYOR INFO</span>
                <span className="main__client-promo-subtext">
                  {" "}
                  TOTUSTUUS1207@GMAIL.COM
                </span>
              </div>
              <div className="main__client-contact" />
            </div>
            <div className="main__client-info">
              <span className="main__client-text">totustuus1207@gmail.com</span>
              <span> +57 3012784279</span>
              <span> Barranquilla - Colombia</span>
            </div>
          </div>

          <div className="grid__item one-third">
            <div className="main__magazine">
              <img
                className="main__image main__image--m0"
                src={MagazineImageRight}
                alt="Crist on the cross"
              />
            </div>
            <div className="main__advertisement">
              <img className="main__advertisement-image" src={AdvertisementImage} alt=""></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
