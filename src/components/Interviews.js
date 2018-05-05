import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Image1 from '../assets/images/interviews/01.jpg';
import Image2 from '../assets/images/interviews/02.jpg';

class Interviews extends Component {
    render() {
        return (
            <div className="container container--large">
                <div className="grid interview__container">
                    <h3 className="interview__main-title interview-menu__tag">Entrevistas Exclusivas de TOTUS TUUS</h3>
                    <div className="grid__item one-quarter">
                        <img className="interview__main-image" alt="" src={Image2}></img>
                    </div>
                    <div className="grid__item two-quarters">
                        <div className="interview__menu">
                            <Link className="interview__menu-text-link" to="entrevistas/religiosas">
                            <div className="interview__menu-section interview__menu-section--blue-dark">
                                <h2 className="interview__menu-text">
                                    Sacerdotes / Religiosas
                                </h2>
                            </div>
                            </Link>
                            <Link className="interview__menu-text-link" to="entrevistas/musicos-catolicos">
                            <div className="interview__menu-section interview__menu-section--blue-light">
                                <h2 className="interview__menu-text">
                                    Músicos Católicos
                                </h2>
                            </div>
                            </Link>
                            <Link className="interview__menu-text-link" to="entrevistas/testimonios-de-conversion">
                            <div className="interview__menu-section interview__menu-section--blue-cloud">
                                <h2 className="interview__menu-text">
                                    Testimonios de Conversión
                                </h2>
                            </div>
                            </Link>
                        </div>
                    </div>
                    <div className="grid__item one-quarter">
                        <img className="interview__main-image" src={Image1} alt=""></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default Interviews;