import React, { Component } from 'react';
import Advertisement from '../Advertisement.js';
import FirstImage from '../../assets/images/interviews/interview11/1.jpg';
import SecondImage from '../../assets/images/interviews/interview11/2.jpeg';
import ThirdImage from '../../assets/images/interviews/interview11/3.jpeg'; 

class Interview11 extends Component {
    render() {
        return(
            <div className="grid">
                <div className="grid__item three-quarters">
                    <div><h2 className="interview__main-title interview__main-title-head interview__main-title-head--eleventh">“El corazón de cada uno de nosotros, es el territorio que María quiere conquistar para Dios.”
                    </h2></div>
                    <div className="interview-eleven__profile">
                        <img className="interview-eleven__first-image" src={FirstImage}></img>
                        <h3 className="interview__main-title interview-eleven__tag">Juan Manuel Cotelo</h3>
                    </div>
                    <div className="interview__question interview__question-space">
                        <span className="interview__question-text">TOTUS TUUS. ¿Quién es Juan Manuel Cotelo?</span>
                        <p className="interview__question-answer">R/: Soy uno más, nací en Madrid en el año 66 tengo ahora 49 años, nací en una familia muy bonita de 9 hermanos, estudie periodismo, a los 21 años trabaje en televisión, de niño quería ser biólogo pero luego cambie de plan. Estoy casado con Simona que es de Rumania tenemos 3 hijas, conté con la suerte de conocer a Dios por mis padres y en los últimos 10 años a través de varias personas descubrí una fe diferente, y decidí trabajarle a eso, a contarlo, todo esto me parece interesante, creo que nadie lo cuenta y así fue que nació “infinito+” una productora que es un regalo muy grande, y me lleva a lugares que no he planificado.
                        </p>
                    </div>
                    <div className="interview__question interview__question-space">
                        <span className="interview__question-text">TOTUS TUUS ¿Cómo empieza todo esto de las películas dedicadas a Dios? Hay alguna que te ha marcado en lo personal?</span>
                        <p className="interview__question-answer">R/: Fue un proceso lento y del cual no fui consiente hasta después, no sé cuándo empezó, debió haber empezado antes de nacer, desde el momento que alguien está orando por ti ya está pasando algo en ti y tu no conoces, no lo controlas, a los 40 años mi fe se había vuelto bastante teórica y rutinaria y surgen personas con las que me cruzo y me hablan de su conversión, me contaban su modo de vivir y yo les entrevistaba por curiosidad, son historias interesantes Ej.: este que era pandillero y ahora es sacerdote, aquella persona que se dedicó a prostitución y ahora tiene un grupo de oración y asi tantas historias que realice sin pensar que eso iba afectar mi vida, la sorpresa fue que esas entrevistas me afectaron mucho y desee vivir del modo de que ellos vivían, fui entrando en un proceso en el que aún sigo, de descubrir una belleza que antes la daba por supuesta perorealmente no la conocía del amor de Dios, la Iglesia, los sacramentos. En todo este proceso me di cuenta que el autor de todo es Dios que me va hablando a través de las personas que pone en el camino o por un libro, película, la fuerza la llevando Él siempre.
                        </p>
                    </div>
                    <div className="interview__question interview__question-space">
                        <span className="interview__question-text">TOTUS TUUS ¿Qué película te ha impactado más como persona y por que?</span>
                        <p className="interview__question-answer">R/: En mi vida han habido unas cuantas películas que me han gustado mucho, pero que me hayan afectado, la última cima, que la hice yo pero la viví más como espectador que como autor, yo me sentí espectador de lo que
                        iba pasando y viendo, esa película no es que me gustara, sino que disfrute haciéndola, es una película que me
                        afecto y me sigue afectando.</p>
                    </div>
                    <div className="interview__question interview__question-space">
                        <img className="interview-eleven__second-image" src={SecondImage}></img>
                        <span className="interview__question-text">TOTUS TUUS ¿Tienes para contarnos una anécdota en
                        especial de algunas de las películas?</span>
                        <p className="interview__question-answer interview__question-answer-space">R/:No hay anécdotas, esto es mucho más que anecdótico, si me quedara ahí sería muy pobre.</p>
                        <p className="interview__question-answer">Lo que nosotros vivimos son transformaciones de personas,
                        cuando una personas me escribe que se quiere confesar después de 30 años, pues eso no es una anécdota, eso es una bomba, transformación milagrosa, hay tantos relatos de personas que nos han contado el efecto de la película que han tenido en su vida que podríamos pasar días aplaudiendo y dando gracias a Dios. Todo es extraordinariamente ordinario, a mi todo me parece extraordinario; que tú puedas hablar, escuchar, pensar, mirar es algo extraordinario, que nosotros estemos quietos a pesar de que la tierra se está moviendo a miles de kilómetros por hora, pero todo eso nos parece ordinario porque lo vemos todo los días, analiza lo que quieras; un espermatozoide y un ovulo los juntas y sales tú ¡Increíble!. Pensar que en eso está la capacidad de saltar, correr, odiar, amar, sonreír, soñar ¿y esto como es posible? ¿ De casualidad? ¿sin causa? para ver a Dios hay que abrir un poquitos los ojos, no mucho y ahí lo tienes, intenta respirar sin Dios ¡No puedes!.</p>
                    </div>
                    <div className="interview__question interview__question-space">
                        <span className="interview__question-text">TOTUS TUUS. En una palabra defina Última cima y Tierra de María.</span>
                        <p className="interview__question-answer">R/: Última cima: cielo y amor, Tierra de María, en una palabra no puedo, es el corazón de cada uno de nosotros, el territorio que María quiere conquistar para Dios. Dejar que María ponga su bandera en nuestro corazón que diga -¡Tú eres mío!- es la misma tierra de Jesús.</p>
                    </div>
                    <div className="interview-eleven__third-image-container"><img className="interview-eleven__third-image" src={ThirdImage} alt="Maria Angelica y su esposo"></img></div>
                    <div className="interview__question interview__question-space">
                        <span className="interview__question-text">TOTUUS TUUS. ¿Que fue lo que te motivo a dedicarle una película a María?</span>
                        <p className="interview__question-answer interview__question-answer-space">R/:No se contestarlo salvo, con una palabra “Obsesión” fue una obsesión, no un razonamiento, fue algo en oración que sentí y dije ¡Esto es importante! si alguien te dice que te van a presentar el ministro de Justicia, es muy interesante; te voy a presentar a un jugador de Futbol famoso, muy interesante, pero si alguien nos dice, te voy presentar a tu Madre a la que no conoces, Nadie dice que ¡no!.</p>
                        <p className="interview__question-answer">Porque es palabra que no necesita traducción es demasiado Fuerte, yo puedo vivir sin conocer al escritor, al ministro, al futbolista, pero pasar por la vida sin conocer a mi Madre es una pena, pero saber que hay una madre que es mía y pensar que ella me está viendo en cada momento que se preocupa por mí, y no es una madre cualquiera, no es poca cosa, además es la madre de Jesús y su tarea es llevarte a la escuela de Jesús a la escuela de la vida, mas que decisión mía de hacer esta película fue decisión de Dios. </p>
                    </div>
                    <div className="interview__question interview__question-space">
                        <span className="interview__question-text">TOTUS TUUS.¿Qué relación tienes con la Virgen María?</span>
                        <p className="interview__question-answer">R/: La misma que cualquier persona, la virgen María no tiene hijos predilectos ni preferidos, yo soy un hijo de María y lo importante de esa relación no es lo que yo sé de ella o yo hago por ella, sino lo que ella sabe de mí y hace por mí, con ella me siento protegido, me siento mimado, cuando eres mimado te pueden consentir muchos caprichos, yo me veo como hijo consentido.</p>
                    </div>
                </div> 
                <div className="grid__item one-quarter">
                    <Advertisement />
                </div>
            </div>
        )
    }
}

export default Interview11;