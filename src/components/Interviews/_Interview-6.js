import React, { Component } from 'react';
import Advertisement from '../Advertisement.js';
import FirstImage from '../../assets/images/interviews/interview6/1.jpg';

class Interview5 extends Component {
    render() {
        return(
            <div className="container container--largest">
                <div className="grid">
                    <div className="grid__item four-fifths">
                        <div><h2 className="interview__main-title interview__main-title-head interview__main-title-head--sixth">Católico, Periodista y Padre</h2></div>
                        <div className="interview-six__profile"> 
                            <img className="interview-six__first-image" src={FirstImage} alt="Foto de Felipe Arias"></img>
                            <h3 className="interview__main-title interview-six__tag">Felipe Arias</h3>
                        </div>
                        <div className="interview__question interview-six__profile-space">
                            <span className="interview__question-text">TOTUS TUUS. Bueno Felipe, usted no necesita mucha presentación, lo reconocemos como un excelente periodista, pero también nos permite ver a través de sus notas, a un hombre de bien, porque no nos habla de sus inicios en el periodismo y las comunicaciones.</span>
                            <p className="interview__question-answer">R/: Yo empecé hace 25 años en 1990, tengo 44 años, estudie comunicación social y periodismo porque mi abuelo era escritor y periodista, estaba entre el derecho y el periodismo y finalmente me incline por esta última, he trabajado en grandes medios de comunicación gracias a Dios, como el noticiero nacional, TvHoy, Caracol, y ahora RCN.</p>
                        </div>
                        <div className="interview__question interview__question-space">
                            <span className="interview__question-text">TOTUS TUUS. Usted es un periodista abiertamente católico, cuéntenos un poquito de su camino de fe.</span>
                            <p className="interview__question-answer">R/: Desde pequeño en Manizales con mi mamá en las noches rezábamos el rosario, nos inculco mucho ir a misa,
                            estas fueron enseñanzas como de familia; cuando me case me encontré a la mejor mujer del mundo, católica y practicante, de hecho el primer día que la invite a salir me dijo que estaba en un grupo de oración un viernes, que si quería nos veíamos allá, sino pues no, y por verla a ella fui al grupo de oración. Era de conocimiento de la biblia me enamore tanto de ella como de la biblia, anteriormente iba a misa de vez en cuando no era como ese santico, tuve una época que era como medio rebelde, deje de ir a misa, confesarme, y a raíz de haber conocido a Viviana y de casarnos por la iglesia católica y de empezar a ver la maravilla de los milagros que pasaban en nuestras vidas, como nuestros hijos, el crecimiento espiritual, como el grupo de oración que tenemos de parejas, empecé a tomar más enserio el catolicismo.</p>
                        </div>
                        <div className="interview__question interview__question-space">
                            <span className="interview__question-text">TOTUS TUUS. Cuéntenos de Felipe Arias, esposo y papá</span>
                            <p className="interview__question-answer">R/ Estoy en el propósito de ser el mejor papá y el mejor esposo, me falta mucho y hay que aprender y crecer
                            cada día, soy un papá consagrado en el sentido de que yo salgo del trabajo y me voy para la casa a jugar con mis niños, hacer tareas con ellos, para mí lo más importante en la vida es primero Dios, segundo familia y tercero el trabajo. Infortunadamente me toca trabajar muchas horas diarias pero siempre trato que de esas 3 cosas ninguna afecte a la otra, realmente no soy muy rumbero, soy de poco amigos, nunca me he ido a tomar ni una sola cerveza en mis 15 años que llevo de matrimonio, en realidad ni tomo, lo que más me gusta es la vida familiar estar con los niños y mi esposa y así soy feliz, aunque me digan por ahí “San Felipe” por molestar.</p>
                        </div>
                        <div className="interview__question interview__question-space">
                            <span className="interview__question-text">TOTUS TUUS. ¿Ha recibido críticas o persecuciones por mostrar abiertamente su amor por el Señor y la
                            Iglesia católica?</span>
                            <p className="interview__question-answer">R/: No, por el contrario y si dicen comentario lo dirán en privado, yo soy activo en las redes sociales frente a temas católicos de hecho las uso para la evangelización, mostrando que estoy en familia, el evangelio del día en realidad no me importa tampoco como lo asuman, he recibido comentarios de gente que me apoya.</p>
                        </div>
                        <div className="interview__question interview__question-space">
                            <span className="interview__question-text">TOTUS TUUS.Somos muy cercanos a algunos amigos personales suyos, y dicen que usted es muy
                            llorón, que se conmueve fácilmente, cuentenos que lo hace llorar.</span>
                            <p className="interview__question-answer">R/: Yo lloro por todo, las injusticia, a veces presentando el noticiero no puedo, los cubrimientos especiales que me toca hacer, en el terremoto de Haiti llore los 15 días que estuve allá, todo lo que sea dolor para los demás me hace llorar, de hecho cuando gravo los personajes de “Valientes” hay casos me toca a veces parar. </p>
                        </div>
                        <div className="interview__question interview__question-space">
                            <span className="interview__question-text">TOTUS TUUS .Cuéntenos sus sueños Felipe.</span>
                            <p className="interview__question-answer">R/: Yo quiero 2 cosas, quiero escribir las vivencias que he tenido a nivel espiritual de cómo ha sido el progreso en mí y mostrar otras historia de vida. Y quiero tener un programa propio de televisión con historias de vida de personas, que olvida, sana, supera y que avanzan en los caminos de Dios.</p>
                        </div>
                        <div className="interview__question interview__question-space">
                            <span className="interview__question-text">TOTUS TUUS. Hablemos de la Virgen María, quien es Ella en la vida de Felipe Arias.</span>
                            <p className="interview__question-answer">R/ La Virgencita nos ha hecho muchísimos milagros, me acuerdo que cuando llegue Bogotá, empecé a ir al grupo de oración y me hice muy amigo Felipe Gomez y veía como la virgen se manifestaba a través de él, cuando nos encomendamos mi esposa y yo a los grupos, de hecho no podíamos tener bebes y ya tenemos 3, ella nos hizo el milagrito, intercedió ante Dios para que tuviéramos 3 hijos, anteriormente estuvimos buscando y tuvimos 3 perdidas, hoy por gracia a Dios tenemos a Pablo, Martin y Sofía.</p>
                        </div>
                    </div>
                    <div className="grid__item one-fifth">
                        <Advertisement />
                    </div>
                </div>
            </div>
        )
    }
}

export default Interview5;