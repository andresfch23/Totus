import React, { Component } from 'react';
import Advertisement from '../Advertisement.js';
import FirstImage from '../../assets/images/interviews/interview4/1.jpeg';
import SecondImage from '../../assets/images/interviews/interview4/2.jpeg';

class Interview4 extends Component {
    render() {
        return(
            <div className="container container--largest"> 
                <div className="grid">
                    <div className="grid__item four-fifths">
                        <div><h2 className="interview__main-title interview__main-title-head interview__main-title-head--fourth">Luna Eikar</h2></div>
                        <div className="interview-four__profile">
                            <img className="interview-four__first-image" src={FirstImage} alt="Foto de perfil de Luna Eikar"></img>
                            <div className="interview__question">
                                <p className="interview__question-answer interview__question-answer-space">Hermanos, que la paz y el amor del Señor esté con ustedes.</p>
                                <p className="interview__question-answer interview__question-answer-space">Soy Luna Eikar, cantautora Católica Colombiana, y hoy
                                tengo la oportunidad de compartir con ustedes mi Testimonio.</p>
                                <p className="interview__question-answer interview__question-answer-space">Provengo de una familia Católica tradicional, en la cual
                                mis padres (dos profesores físico-matemáticos) me inculcaron las buenas costumbres y amor por el arte, mi padre en sus ratos libres era tenor, así que seguí sus pasos a temprana edad, a los 9 años empecé a componer y a los 14 años grabé por primera vez una
                                producción</p>
                                <p className="interview__question-answer interview__question-answer-space">Sin embargo, debido a que desconocía mi fe y me
                                contentaba solo con asistir el domingo a misa, empecé mi carrera como cantante en el ambiente secular, logrando sacar una producción llamada “Hora Cero” con la cual fui Nominada a los Premios Equinoccio Latin Awards.</p>
                                <p className="interview__question-answer interview__question-answer-space">Justo cuando creí estar logrando mi sueño, comencé a sentir un vacío muy grande en mi corazón, el ambiente artístico era muy pesado, malas costumbres,vicios,deshonestidad,propuestas indecentes que me hicieron ver la cruda realidad.</p>
                                <p className="interview__question-answer interview__question-answer-space">Me decepcioné de muchas personas que admiraba, y comprendí que si daba un paso más iba a caer muy bajo. Y es allí donde el Señor me muestra su Misericordia y bondad, poniendo en mi camino a un Misionero Laico que me propuso cambiar mi rumbo, dejar todo, para saber lo que quería Jesús de mí, acepté e inicié mi camino de conversión, con el cual emprendí el servicio de evangelización a través de la Música.</p>
                                <p className="interview__question-answer interview__question-answer-space">Mi Album Debut se llamó “Luz y Sal” el cual salió en 2009 y tuve la oportunidad de estar en diferentes Festivales Católicos, y ahora, para la Gloria de Dios, compartimos con ustedes el regalo de una Nueva Producción llamada “Tu Llave”, un trabajo que pretende dar a conocer a un Jesús joven y cercano, un Jesús Amigo, llave, parce. </p>
                                <p className="interview__question-answer interview__question-answer-space">Nos encomendamos a sus oraciones. Dios les Bendiga</p>
                                <p className="interview__question-answer interview__question-answer-space">Su hermanita menor</p>
                                <p className="interview__question-answer interview__question-answer-space">LUNA EIKAR</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid__item one-fifth">
                        <Advertisement />
                        <img className="advertisement__secondary-image" src={SecondImage} alt="caricatura de Jesus y Luna Eikar"></img>
                    </div>
                    <a className="interview-four__web" href="www.lunaeikar.com">www.lunaeikar.com</a>
                    <a className="interview-four__web" href="www.facebook.com/lunaeikar">www.facebook.com/lunaeikar</a>
                </div> 
            </div>
        )
    }
}

export default Interview4;