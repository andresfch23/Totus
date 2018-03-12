import React, { Component } from 'react';
import Advertisement from '../Advertisement.js';
import FirstImage from '../../assets/images/interviews/interview18/1.jpg';

class Interview18 extends Component {
    render() {
        return(
            <div className="grid">
                <div className="grid__item three-quarters">
                    <div><h2 className="interview__main-title interview__main-title-head interview__main-title-head--eighteenth">“Soy un sacerdote muy feliz”</h2></div>
                    <div className="interview-eighteen__profile"> 
                        <img className="interview-eighteen__first-image" src={FirstImage} alt="Foto del Padre Angel Espinosa"></img>
                        <h3 className="interview__main-title interview-eighteen__tag">Padre Ángel Espinosa</h3>
                    </div>
                    <div className="interview__question interview__question-space-profile">
                        <span className="interview__question-text">TOTUS TUUS. Háblenos un poco de su vida ¿Quién es el Padre Ángel Espinosa? </span>
                        <p className="interview__question-answer interview__question-answer-space">R/: Yo soy el Padre Ángel Espinosa Montero, pertenezco a la comunidad Legionarios de Cristo, tengo 23 años de orden sacerdotal y 33 años de vida religiosa. Me dedico hace cinco años a dar charlas de tiempo completo aunque mi primera charla la di hace 20 años. Principalmente estuve en misiones, encomiendas y trabajos fijos en: Guadalajara, París, Roma y Colombia. Actualmente viajo a más de 20 países dictando charlas sobre el matrimonio y la familia, me gusta mucho esos temas porque son la base de la sociedad. Soy un sacerdote muy feliz.</p>
                    </div>
                    <div className="interview__question interview__question-space">
                        <span className="interview__question-text">TOTUS TUUS. ¿Cómo nació su vocación?</span>
                        <p className="interview__question-answer interview__question-answer-space">R/: Cuando tenía 16 años un sacerdote de Legionarios de Cristo fue a dictar un retiro en el colegio, al final de este preguntó: “¿Quién desearía recibir algún tipo de orientación vocacional? Porque hay gente que se casa, estudia cualquier carrera profesional y están los que se dedican a Dios de tiempo completo, a difundirlo, a predicar su evangelio; los que estén interesados me lo escriben en un papelito” y yo puse que estaría encantado de conocerlos. </p>
                        <p className="interview__question-answer">Continúe asistiendo a retiro a los 17 y 18 años, después de eso yo ya estaba convencido que debía ir a un
                        noviciado porque eso era lo mío. Me gustó mucho el carisma apostólico de los Legionarios de Cristo y desde hace 33 años estoy convencido que está es mi vocación. </p>
                    </div>
                    <div className="interview__question interview__question-space">
                        <span className="interview__question-text">TOTUS TUUS. ¿Qué consejo le da a los noviazgos?</span>
                        <p className="interview__question-answer">R/: Principalmente que se respeten, para que así puedan construir una relación honesta y sincera no basada en
                        el sentimentalismo ni en el placer inmediato, sino, que vean a lo largo de 20 años que él/ella podría ser la madre o el padre de tus hijos, pensar que con esa persona podrías construir toda una vida.</p>
                    </div>
                    <div className="interview__question interview__question-space">
                        <span className="interview__question-text">TOTUS TUUS. Que nos puede decir acerca de la Sagrada Familia.</span>
                        <p className="interview__question-answer">R/: De la Sagrada Familia sabemos muy poco, porque en el evangelio es muy escueto y casi no dice nada, pero
                        ¿Qué podemos saber según el evangelio de la Sagrada Familia? Que era una familia unida, vivieron juntos en Galilea y Egipto, que en un determinado momento José se murió y Jesús siguió con María, sus lazos de amor eran tan estrechos, tanto así que cuando Jesús sabía que ya debía afrontar su muerte, resurrección y ascensión al cielo decidió dejar a María en manos de Juan para que todos nosotros supiéramos que tenemos una madre, además para que Juan se quedara acompañándola y protegiéndola hasta el último día de su vida. Las virtudes de la sagrada familia son: la obediencia de Jesús, la humildad de José y la fe inquebrantable de María. </p>
                    </div>
                    <div className="interview__question interview__question-space">
                        <span className="interview__question-text">TOTUS TUUS. ¿Cómo es su relación con la Santísima Virgen María?</span>
                        <p className="interview__question-answer">R/: Yo todos los días rezo el Santo rosario con todas sus jaculatorias, en las misas me encomiendo
                        constantemente a la Virgen María, la tengo siempre presente en mis estampitas, pensar en ella es algo que
                        siempre tengo en mi corazón y me ayuda a vivir muy tranquilo, además, tengo una frase muy marcada que dice:
                        “¿No estoy yo aquí que soy tu madre? ¿No estás tú bajo mi ventura sobre mi regazo? ¿Por qué temes? ”.</p>
                    </div>
                    <div className="interview__question interview__question-space">
                        <span className="interview__question-text">TOTUS TUUS. ¿Qué tips básicos le recomienda a los laicos comprometidos para llevar una vida espiritual?</span>
                        <p className="interview__question-answer">R/: Primero: Cuando te levantes reza, pueden ser frases cortas o del evangelio pero que nazcan de tu corazón
                        que sean sinceras, segundo: que nadie se vaya a la cama sin antes hacer una oración de gratitud a nuestro Señor por el día que paso, tercero: el desayuno, almuerzo y cena se deben bendecir, porque debemos agradecerle a Dios, cuarto: al finalizar la noche rezar un Avemaría y hacer consiente cada palabra que estas pronunciando y quinto: la misa del domingo no está en discusión, debes ir a misa pase lo que pase, a menos que tengas una enfermedad muy grave o ya estés en un estado de vejez avanzada, si no es el caso, entonces NO debes faltar a misa los domingos.</p>
                    </div>
                    <div className="interview__question interview__question-space">
                        <span className="interview__question-text">TOTUS TUUS. ¿Tiene algún Santo de devoción?</span>
                        <p className="interview__question-answer">R/: La verdad, es que yo estoy muy comprometido con Jesús de la Misericordia y con la Virgen María, pero me
                        encantan muchas frases de San Agustín a quien considero uno de los padres de mi alma, he leído muchísimas obras de él, asimismo de Santa Teresa de Calcuta, realmente admiro a estos dos Santos.</p>
                        <p className="interview__question-answer">Redactado por: @Mariancaselles</p>
                    </div>
                </div> 
                <div className="grid__item one-quarter">
                    <Advertisement />
                </div>
            </div>
        )
    }
}

export default Interview18;