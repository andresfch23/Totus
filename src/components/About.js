import React, { Component } from "react";
import ImgMary from '../assets/images/5.png';
import ImgStatueMary from '../assets/images/4.jpg';

class About extends Component {
  render() {
    return (
      <div className="grid">
          <div className="grid__item two-fifths">
              <div>
                  <h2 className="main__menu-text">¿Quienes somos?</h2>
              </div>
              <div>
                  <p>La revista TOTUS TUUS es un medio de
                  evangelización católico, creado con el anhelo de
                  llevar el amor de Dios a muchas personas. Se creó
                  en Colombia en la ciudad de Barranquilla en el año
                  2014 y su distribución es totalmente GRATIS.
                  Inicialmente se publicó cada dos meses de manera
                  impresa pero apartir del 2018 la revista es via
                  electronica.
                  Contamos con la bendición de la Arquidiócesis de
                  Barranquilla.</p>
              </div>
              <div>
                <img src={ImgMary} alt="Medal of the Virgin Mary"></img>
              </div>
          </div>
          <div className="grid__item three-fifths">
              <div>
                <p>Mi nombre es Jhovanna Rodríguez Rojas, soy Diseñadora
                Gráfica de profesión de la Universidad del Norte y misionera
                de la comunidad Lazos de Amor Mariano desde hace
                aproximadamente 7 años. Nací en la ciudad de Bogotá el 31
                de enero de 1991.
                Durante seis meses del año 2014, viví una experiencia de
                servicio en la cual me dediqué totalmente a Dios y a la
                evangelización a través de la Comunidad Lazos de Amor
                Mariano; gracias a una misión que desarrollé en el
                Departamento de Córdoba, nació en mi corazón la idea de
                crear una revista católica que me permitiera utilizar mis
                conocimientos y habilidades para la evangelización.</p>
              </div>
              <div>
                <img src={ImgStatueMary} alt="Statue of Mary"></img>
              </div>
          </div>
      </div>
    );
  }
}

export default About;
