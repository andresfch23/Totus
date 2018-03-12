import React, { Component } from 'react';
import Advertisement from '../Advertisement.js';
import FirstImage from '../../assets/images/interviews/interview17/1.jpeg';
import SecondImage from '../../assets/images/interviews/interview17/2.jpeg';
import ThirdImage from '../../assets/images/interviews/interview17/3.jpeg';
import FourthImage from '../../assets/images/interviews/interview17/4.jpeg';

class Interview17 extends Component {
    render() {
        return(
            <div className="grid">
                <div className="grid__item three-quarters">
                    <div><h2 className="interview__main-title interview__main-title-head interview__main-title-head--seventeenth"> Dumas y Mary</h2></div>
                    <div className="interview-seventeen__profile"> 
                        <img className="interview-seventeen__first-image" src={FirstImage} alt="Dumas y Mary cantando"></img>
                    </div>
                    <div className="interview__question interview__question-seventeen">
                        <p className="interview__question-answer interview__question-answer-space">Somos esposos y músicos católicos dedicados 100% al servicio a DIOS y a nuestra santa iglesia católica. </p>
                        <p className="interview__question-answer">Llevamos dos años y 9 meses de casados; antes de casarnos cada cual servía en los coros de la parroquia a la que pertenecía y a varias parroquias donde éramos invitados. </p>
                        <p className="interview__question-answer interview__question-answer-space">También colaboramos como integrantes de la banda musical de artistas católicos de mucho recorrido como por ejemplo Felipe Gómez (2 años que vivió en Barranquilla), Guelmis Tabares (1° visita a Barranquilla), Javier Maldonado (2°visita a Barranquilla), Marvin Marcano.</p>
                    </div>
                    <div className="interview__question interview__question-space--seventeenth">
                        <p className="interview__question-answer interview__question-answer-space">(1° visita a Barranquilla) y también con grupos locales como Alfredo
                        acosta y grupo Ixthys. Ahora nos dedicamos a servir juntos, como familia.</p>
                        <p className="interview__question-answer">Dumas nació en Barranquilla y es licenciado en música graduado en la universidad del Atlántico, facultad de bellas artes y Mary es de Puerto Colombia y es estudiante de música profesional en la misma universidad.</p>
                        <p className="interview__question-answer">Tenemos dos hermosas bebés, una de un año y 9 meses llamada María del Cielo Martínez Cepeda, la segunda llamada Guadalupe Martínez Cepeda y estamos abiertos a la vida y a la voluntad de DIOS. Decidimos dedicar nuestra vida y familia al servicio a DIOS por medio de la música porque sabemos que a DIOS debemos todo y que sin EL nada podemos hacer, nuestra música se centra en nuestra fe, en nuestra doctrina por eso la fundamentamos en JESUS Eucaristía, aquel que nos da el alimento espiritual y corporal. También en la Virgencita María, nuestra mamá celestial y en la vida de los santos que son un ejemplo a seguir en este camino.</p>
                        <p className="interview__question-answer interview__question-answer-space">Por Gracia de DIOS hemos participado en la segunda versión del
                        festival de música del caribe “FEMUSICA” en Cartagena y en el primer festival internacional de música católica “gracias a Dios” en Perú donde participaron más de 450 grupos y solistas de todo el mundo, saliendo ganadores con la canción “eucaristía”. </p>
                        <p className="interview__question-answer">Dumas y Mary, nació como un deseo de servir desde la música, como familia en el momento en que nos unimos en el matrimonio, y cumplir con nuestro compromiso laical. Fue un deseo que pusimos en oración y mucho discernimiento cuando éramos novios, donde nos ayudaron muchísimo Felipe Gómez quien nos motivó a organizarnos y quien todavía nos guía a través de su experiencia musical y de fe, y el Padre William Pino, nuestro director espiritual, quien nos ha apoyado en todo y nos orienta en cada paso que queremos dar.</p>
                        <p className="interview__question-answer">Con la Virgencita tenemos una relación bastante cercana e íntima.
                        Sabemos que siempre ha estado con nosotros, acompañándonos y en su honor nombramos a nuestras hijas y dedicamos nuestra segunda producción musical con canciones inéditas. Ella nos ha regalado muchas muestras de su presencia y cada día nos enamoramos más de ella. Como testimonio, cuando hablamos sobre el paso del matrimonio lo pusimos como intensión en el Rosario diario pidiendo que se haga la voluntad de DIOS, mas no la de nosotros.
                        Nuestros retos y sueños están en las manos de DIOS. Como familia, enseñar a nuestras hijas la doctrina católica, como servidores siempre pedimos que nos regale canciones que toquen corazones y los lleve a JESUS, que nos regale la fuerza para hacer su voluntad porque tenemos claro que donde ÉL quiera vamos a estar.</p>
                        <p className="interview__question-answer">Nuestra primera producción musical se llama “Eucaristía”, la segunda se llama “María, la llena de Gracia” y para diciembre hicimos una de villancicos con ritmos modernos. Actualmente estamos grabando varios proyectos que estamos tratando de compartir a medida que el tiempo y los compromisos nos permitan, por ejemplo, nuestra próxima producción con canciones inéditas donde faltan pocos días para lanzar una nueva, la liturgia de las horas, un proyecto con amigos que esta pronto a salir y uno de covers de música católica. Todo se compartirá en el tiempo de DIOS.</p>
                    </div>
                    <div className="interview-seventeen__container-images">
                        <img className="interview-seventeen__other-images" src={SecondImage} alt="Dumas y Mary con su hija"></img>
                        <img className="interview-seventeen__other-images" src={ThirdImage} alt="Mary cantando"></img>
                        <img className="interview-seventeen__other-images" src={FourthImage} alt="Dumas y Mary cantando"></img>
                    </div>
                </div> 
                <div className="grid__item one-quarter">
                    <Advertisement />
                </div>
            </div>
        )
    }
}

export default Interview17;