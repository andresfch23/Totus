import React, { Component } from 'react';
import Advertisement from '../Advertisement.js';
import FirstImage from '../../assets/images/interviews/interview13/1.jpeg';
import SecondImage from '../../assets/images/interviews/interview13/2.jpg';
import ThirdImage from '../../assets/images/interviews/interview13/3.jpg';
import FourthImage from '../../assets/images/interviews/interview13/4.jpg';

class Interview13 extends Component {
    render() {
        return(
            <div className="grid">
                <div className="grid__item three-quarters">
                    <div className="interview__question interview__question-space">
                        <img className="interview-thirteen__first-image" src={FirstImage} alt="Son by 4"></img>
                        <span className="interview__question-text">TOTUS TUUS ¿Cómo empieza Son By 4, en qué momento le dicen sí a Dios?</span>
                        <p className="interview__question-answer interview__question-answer-space">R/: JAVI:Para los que no saben somos familia; Jorge y yo somos hermanos, Pedro es mi primo hermano. Empezamos a emprender, realizando todos los sueños en las artes, la música; a obtener el conocimiento, y persiguiendo el sueño que muchos jóvenes tienen en sus corazones.</p>
                        <p className="interview__question-answer interview__question-answer-space">Comenzamos en los años 90, tocando
                        puertas, buscando quien nos ayudara a materializar nuestra idea. A finales de esos años lanzamos nuestro primer cd como “Son By 4”, pero era de música secular. Se integró un muchacho de Puerto Rico, llamado Ángel López. El Señor permitió que alcanzáramos la fama con el grupo original que éramos 4.</p>
                        <p className="interview__question-answer interview__question-answer-space">La disquera Sony usó el tema de “A puro dolor” para darnos a conocer en Latinoamérica, Estados Unidos y en Europa, y todo esto pasó muy rápido, de la noche a la mañana, alcanzamos la fama en un abrir y cerrar de ojos con esta canción. Soñamos con caminar por la alfombra roja, tener los primeros lugares en las listas de popularidad, vender muchos discos y todo eso lo cumplimos, pero después que alcanzamos todo eso pensábamos que esas cosas nos iban a hacer felices, pero no.</p>
                        <p className="interview__question-answer interview__question-answer-space">Pedro: Nosotros éramos buenos como gran parte de la población y como un gran porcentaje de los católicos, pero pesábamos que “Dios trabaja para ti en vez de tú trabajar para Dios”, ese es el gran problema que tenemos todos. Teníamos aspiraciones y le pedíamos a Dios el éxito, Dios cumplió, pero ese no era el plan que el Señor tenía para nosotros.</p>
                        <p className="interview__question-answer interview__question-answer-space">Yo tenía unos interrogantes bien profundos, mis problemas, mi vida, mi familia, mis heridas del pasado y empecé a buscar respuestas radicales,sentía que me faltaba algo. Cuando tienes cosas por luchar, tú luchas, pero ¿qué pasa cuando la alcanzas?</p>
                        <p className="interview__question-answer interview__question-answer-space">Me di cuenta que en la Iglesia Católica había algo mucho más profundo, a comparación de lo que yo estaba captando como un católico de misas dominicales, y ahí las respuestas fueron más radicales, comencé buscando de Dios. Un poco escondido, avergonzado, empecé asistir a un grupo de la renovación carismática en mi pueblo, y el Señor empezó a darme respuesta en mi vida. Mi esposa, mis hijos, los muchachos (Javi y Jorge) tuvieron su encuentro personal también, pero yo me lancé de una manera radical y renuncié en el grupo, y el Señor los había también tocado a ellos y abandonamos la música secular</p>
                        <p className="interview__question-answer interview__question-answer-space">Ángel ya se había ido del grupo. Esto cronológicamente es un lío, él se quiso ir de solista, había un imperio en
                        la música que nos aplastaba, era algo demasiado injusto, lo perdimos todo y los 3 tratamos de alcanzar otra
                        vez la fama, ahí fue cuando sacamos nuestro CD de “Renacer”. Tuvimos muchos problemas, nos demandaron
                        por más de un millón de dólares, querían arrebatarnos la marca de Son By 4, pero Dios se las ingenió para que
                        perdiéramos todo y conserváramos el nombre, ¿Qué íbamos hacer nosotros con el nombre? Si no teníamos
                        dinero, éramos famosos y quebrados.</p>
                        <p className="interview__question-answer interview__question-answer-space">Llevamos ya en este camino 15 años y el Señor nos confirma paso a paso que fue la decisión correcta; lejos de los escenarios, el dinero, la fama, el poder… quién lo iba a creer, pero irónicamente hemos viajado igual y ahora </p>
                    </div>
                    <div className="interview__question interview__question-space interview-thirteen__profile">
                        <h3 className="interview__main-title interview-thirteen__tag">Jorge</h3>
                        <img className="interview-thirteen__second-image" src={SecondImage} alt="Foto de Jorge"></img>
                        <p className="interview__question-answer">somos felices, tenemos nuestra familia, nuestros hijos, vivimos de la providencia de Dios.
                        </p>
                        <span className="interview__question-text">TOTUS TUUS ¿Por qué cantarle a Dios?</span>
                        <p className="interview__question-answer interview__question-answer-space">Jorge: A mí me impactó mucho la carta de San Juan Pablo II a los artistas, decía: “Encontrad la fuente del arte, de la inspiración”. Darte cuenta que todos las cosas son creadas por Él, la inspiración cambia totalmente a la hora de escribir y expresarte en el arte, no todo los llamados de los artistas son para que exclusivamente compongan música religiosa o arte inspirado de Dios, pero si es responsabilidad de todos que expresen ese amor por Él, y los artistas en algún momento tienen que agradecerle de los éxitos que tienen. Y tener el poder de ser instrumentos para cambiar una vida a través de una canción es muy gratificante y por eso seguimos escribiendo al amor, pero de un punto de vista “Cristocéntrico”, tantas cosas hay que decir como cristiano a la sociedad.</p>
                    </div>
                    <div className="interview__question interview__question-space-profile interview__question-space-paragraph">
                        <span className="interview__question-text">TOTUS TUUS ¿A qué han renunciado para seguir a Dios?</span>
                        <p className="interview__question-answer interview__question-answer-space">Javier: Cuando tomamos la decisión pensaban que estábamos locos, y aún lo piensan por lo que hicimos, tuvimos que morir a muchas cosas, al reconocimiento, al ego como músicos seculares y empezar desde cero. Las personas que estaban ahí por nuestra fama, todos nos dieron la espalda y fue muy difícil pero nos agarramos del Señor.</p>
                        <p className="interview__question-answer interview__question-answer-space">En la crisis es donde te das cuenta quiénes verdaderamente son tus amigos, tus hermanos. Le damos gracias al Señor porque nos ha quitado la venda de los ojos, decidimos vivir de lo que Dios nos ponga en el camino, “nos tiramos” por amor a Dios a un lugar donde somos incomprendidos.</p>
                    </div>
                    <div className="interview__question interview__question-space interview-thirteen__profile">
                        <h3 className="interview__main-title interview-thirteen__tag-right">Javi</h3>
                        <img className="interview-thirteen__third-image" src={ThirdImage} alt="Foto de Jorge"></img>
                        <span className="interview__question-text">TOTUS TUUS ¿Cómo nace la letra de las canciones?</span>
                        <p className="interview__question-answer">Jorge: Llevamos 15 años teniendo experiencia con el Señor, con su Iglesia, sus Santos, con María, en la Eucaristía, las sagradas escrituras. Son tantas vivencias que tenemos e inclusive experiencias de la comunidad y de ahí salen muchas canciones.</p>
                        <span className="interview__question-text">TOTUS TUUS ¿Qué anécdotas recuerdan que les hayan marcado en estos años de evangelización?</span>
                        <p className="interview__question-answer">Javier: La Jornada Mundial de la Juventud (JMJ) en Río, ver tantos jóvenes, lo grande y diversa que es la Iglesia. Nos cautivó ver toda una Iglesia unida, las comunidades con diferentes apostolados y verlos juntos fue una emoción grande.
                        </p>
                        <span className="interview__question-text">TOTUS TUUS ¿Qué experiencias han tenido con la Virgen?</span>
                        <p className="interview__question-answer interview__question-answer-space">Javier: Cuando tomamos la decisión pensaban que estábamos locos, y aún lo piensan por lo que hicimos, tuvimos que morir a muchas cosas, al reconocimiento, al ego como músicos seculares y empezar desde cero. Las personas que estaban ahí por nuestra fama, todos nos dieron la espalda y fue muy difícil pero nos agarramos del Señor.</p>
                        <p className="interview__question-answer">Pedro: Nosotros estudiamos en un colegio salesiano y tenemos una devoción a la Virgen María Auxiliadora, y mirando atrás comprendí que cuando llegué a la Iglesia sentí ese abrazo de María, ella es quien le pone el corazón, ternura y misericordia a un cristiano, es una madre que siempre está ahí. Jorge: cuando sentí que tenía que buscar más a María, me regalan el libro del “Tratado de la verdadera devoción de San Luis Maria Grignon de Monford” me impactó tanto el libro y de ahí sale la canción “Rosa fiel”.</p>
                    </div>
                    <div className="interview__question interview__question-space">
                        <span className="interview__question-text">TOTUS TUUS ¿Qué reto tienen como artistas y evangelizadores?</span>
                        <p className="interview__question-answer">Pedro: El reto como evangelizadores es la encarnación de Cristo en nosotros, que nos reconozcan como cristos vivos, a eso estamos llamados a ser, y que podamos crecer en la Iglesia integralmente sin tener que renunciar a nuestra familia.</p>
                    </div>
                    <div className="interview__question interview__question-space interview-thirteen__profile">
                        <h3 className="interview__main-title interview-thirteen__tag-left">Pedro</h3>
                        <img className="interview-thirteen__fourth-image" src={FourthImage} alt="Foto de Pedro"></img>
                        <span className="interview__question-text">TOTUS TUUS ¿Cómo es la vida espiritual de Son By 4?</span>
                        <p className="interview__question-answer">Pedro: Desde que inició éste proceso de conversión en
                        nuestro pueblo, empezamos con un grupo de oración familiar en casa de mi tía (la mama de Jorge y Carlos Javier), esa era nuestra base, nuestro proyecto comunitario, trabajar para nuestra parroquia. Fray Jorge Betancourt llega siendo nuestro director, él está con nosotros en el programa de televisión. Poco a poco creció la Fundación ABBA NUESTRO, que es una sociedad para mover los medios de comunicación Católicos en Puerto Rico, que tiene base en nuestro pueblo natal, en Ciales.</p>
                        <span className="interview__question-text">TOTUS TUUS ¿Cuáles son sus santos de devoción o advocación mariana en especial?</span>
                        <p className="interview__question-answer interview__question-answer-space">Pedro: María Auxiliadora.</p>
                        <p className="interview__question-answer">Jorge: En éstas diferentes etapas de la vida espiritual
                        a mí me ayudó mucho, en las renuncias y en el cambio de un estilo de vida a la vida de misionero, San Francisco de asís. Nuestra etapa de la niñez fue marcada por San Juan Bosco. Javier: En los momentos de dificultad me refugio en María santísima. </p>
                        <span className="interview__question-text">TOTUS TUUS ¿Qué mensajes le dan a los jóvenes que han perdido la esperanza?</span>
                        <p className="interview__question-answer interview__question-answer-space">Jorge: Todos en algún momento hemos perdido la esperanza, nosotros somos testigos de que en los momentos más duros del ser humano, Jesús y María están más cerca. En dolor es cuando Dios está más cerca, sólo nos hace falta luchar y estar dispuestos a encontrar, le decimos a todos los jóvenes que le permitan entrar en sus corazones Él no los va a defraudar, los puede defraudar el mundo, la familia, los amigos, somos humanos, pero Dios nunca defrauda; Él siempre está y nos da mucho más de lo que merecemos.</p>
                        <p className="interview__question-answer">A través del programa Son By 4 TV, en EWTN, recibimos muchos testimonios y nos escribió una chica de México. Nos cuenta que su mamá estaba viendo un programa en la sala y ella decidió quitarse la vida, estaba sin esperanzas y dice que tomó el cuchillo e iba para el baño, y cuando iba cruzando la sala, su mamá estaba viendo un programa de TV y desde el televisor le dijeron: “¡Detente! Tú eres importante para mí, te amo ¡Detente! Eres importante para mí”, ella se detuvo y se puso a llorar con su mamá. Terminó de ver el programa que su mamá observaba, era el que habíamos grabado 6 meses atrás sobre el suicidio y en ese momento Dios le habló, El Señor siempre llega a tiempo, debemos estar dispuestos a mirar siempre al cielo y no perder la Fe.</p>
                    </div>
                </div> 
                <div className="grid__item one-quarter">
                    <Advertisement />
                </div>
            </div>
        )
    }
}

export default Interview13;