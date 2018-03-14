import React, { Component } from 'react';
import Advertisement from '../Advertisement.js';
import FirstImage from '../../assets/images/interviews/interview15/1.jpg';

class Interview15 extends Component {
    render() {
        return(
            <div className="grid">
                <div className="grid__item three-quarters">
                    <div><h2 className="interview__main-title interview__main-title-head interview__main-title-head--fifteenth">“Haber estudiado el milagro eucarístico me parece la historia más extraordinaria” </h2></div>
                        <div className="interview-fifteen__profile"> 
                            <img className="interview-fifteen__first-image" src={FirstImage} alt="Foto de Ricardo Castañon"></img>
                            <h3 className="interview__main-title interview-fifteen__tag"> Ricardo Castañón</h3>
                        </div>
                        <div className="interview__question">
                            <span className="interview__question-text">TOTUS TUUS ¿Quién es Ricardo Castañón?, hágase una breve historia suya.</span>
                            <p className="interview__question-answer interview__question-answer-space">R/: Nací en La Paz- Bolivia, en el seno de una familia católica, realice mis estudios de secundaria allí mismo, pero para iniciar mis estudios universitarios viaje a Europa (Roma) donde estudie una licenciatura en Psicología, luego viaje a Alemania, Estados Unidos y México para hacer estudios posteriores y especializarme en Neuropsicología, Salud mental y medicina psicosomática. Actualmente me dedico a Neuropsicofisiología cognitiva.</p>
                            <p className="interview__question-answer interview__question-answer-space">Fui ateo hasta los cuarenta y cuatro años, yo no me volví ateo por haberme peleado con la iglesia o con Dios, me aleje por ignorante porque no lo conocía.</p>
                            <p className="interview__question-answer interview__question-answer-space">Esto no quiere decir que yo detestaba a la iglesia, cuando fui profesor universitario dirigía una clínica en Alemania y cuando llegaba una monja o un sacerdote de paciente yo los atendía gratuitamente por respeto a la obra que ellos hacían sirviendo a la gente, entonces es bueno aclarar que los ateos no son enemigos de la Iglesia.</p>
                            <p className="interview__question-answer">Ya para el año 1992, a mis cuarenta y cuatro años
                            empecé hacer unas investigaciones y eso cambio mi vida.</p>
                        </div>
                        <div className="interview__question interview__question-space">
                            <span className="interview__question-text">TOTUS TUUS ¿Cómo iniciaron las investigaciones de
                            los milagros eucarísticos?</span>
                            <p className="interview__question-answer interview__question-answer-space">R/: En el año 1992 me hablaron de una imagen de un Cristo que exudaba, así que me intereso mucho, y no precisamente por mi fe, sino porque era un Cristo que le brotaban lágrimas de sus ojos, yo pensé que eran unos fenómenos paranormales; mejor conocido como endoplasmosis la cual estaba influenciando a la propietaria con sus poderes mentales en la imagen, entonces yo dije: “debe ser un poder mental, estudiare el caso para descubrir sus poderes”, pero en realidad no era un poder mental.</p>
                            <p className="interview__question-answer interview__question-answer-space">Yo tome las muestras y eran lágrimas humanas.</p>
                            <p className="interview__question-answer">Para el año 1995 otra imagen exudo en Cochabamba- Bolivia, y esa la estudie más porque tenía sangre, ADN humano, incluyendo los glóbulos blancos y rojos, entonces como yo estudie la imagen a partir del año 1995 demostrando que esa imagen tenía efusión de sangre humana, el obispo declaro el caso digno de crédito ya autorizó la veneración de la imagen y la construcción de una capilla, es decir la iglesia apoyo este estudio.</p>
                        </div>
                        <div className="interview__question interview__question-space">
                            <span className="interview__question-text">TOTUS TUUS ¿Quién es para usted la Virgen Maria?</span>
                            <p className="interview__question-answer">R/: Uno de los grandes obsequios de mi conversión al cristianismo es descubrir que no somos huérfanos, tenemos un padre (Dios) y una madre (Maria), ella sin duda es una madre muy preocupada por nosotros. El sí de la virgen cambio la historia de la humanidad y nos abrió las puertas del cielo, cuando yo pienso en ella considero que es la intercesora que ha abierto las puertas para que todos entremos al camino cristiano, estimo que todos los convertidos de una manera u otra han tenido que agradecer la intercesión de la Virgen, porque en su silencio, su humildad, en ese corazón generoso y lleno de amor esta ella siempre preocupada por el destino de cada uno de sus hijos. A mí me fascina su personalidad y lo poco que vemos de ella en los textos sagrados, notamos su fuerza, su sabiduría, su prudencia, y sobre todo su generosa humildad, sin ella nada de lo que estamos hablando hoy hubiera ocurrido y me alegra pensar que ser mariano es un signo de predilección.</p>
                        </div>
                        <div className="interview__question interview__question-space">
                            <span className="interview__question-text">TOTUS TUUS ¿Ha tenido alguna experiencia en especial con algún milagro eucarístico o aparición mariana?</span>
                            <p className="interview__question-answer">R/: Haber estudiado el milagro eucarístico me parece la historia más extraordinaria porque Dios me está permitiendo llegar a su misericordia con esa frase de Juan 6,51: “El pan que yo te daré es mi carne. Lo daré por la vida del mundo”. Eso definitivamente ha marcado mi vida, soy de misa diaria y de comunión diaria. Estoy convencido que la presencia eucarística es la presencia del mismo Cristo.</p>
                        </div>
                        <div className="interview__question interview__question-space">
                            <span className="interview__question-text">TOTUS TUUS Un consejo para las personas que luchan por aceptar la presencia real de Jesús en la eucaristía.</span>
                            <p className="interview__question-answer">R/:  El reconocer que Jesús está en la eucaristía es una gracia, pero la gracia trabaja únicamente cuando la persona abre su corazón para reconocer a Jesús. Lo que debemos hacer los católicos es no insistir que debemos creer, sino que tenemos que orar para que la unción del Espíritu Santo se derrame sobre las personas y abran los ojos de su mente y corazón para entender la presencia de cristo en la eucaristía.</p>
                        </div>
                    </div> 
                <div className="grid__item one-quarter">
                    <Advertisement />
                </div>
            </div>
        )
    }
}

export default Interview15;