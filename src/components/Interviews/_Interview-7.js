import React, { Component } from 'react';
import Advertisement from '../Advertisement.js';
import FirstImage from '../../assets/images/interviews/interview7/1.jpg';
import SecondImage from '../../assets/images/interviews/interview7/2.jpeg';
import ThirdImage from '../../assets/images/interviews/interview7/3.jpeg';
import FourthImage from '../../assets/images/interviews/interview7/4.jpeg';

class Interview7 extends Component {
    render() {
        return(
            <div className="container container--largest">
                <div className="grid">
                    <div className="grid__item four-fifths">
                        <div><h2 className="interview__main-title interview__main-title-head interview__main-title-head--seventh">Detrás de un gran hombre, existe una gran mujer.</h2></div>
                        <div className="interview-seven__profile">
                            <img className="interview-seven__first-image" src={FirstImage} alt="Foto de Perfil de Maria Angelica"></img>
                            <h3 className="interview__main-title interview-seven__tag">María Angelica</h3>
                        </div>
                        <div className="interview__question interview__question-space">
                            <div className="interview__question-answer-container">
                                <p className="interview__question-answer interview__question-answer-space interview__question-answer-space--preview">Detrás de un gran hombre, existe una gran mujer.</p>
                                <p className="interview__question-answer interview__question-answer-space interview__question-answer-space--preview">En este caso, detrás de Felipe Gómez, existen dos grandes mujeres, la Virgen María a quienes ustedes sirven con tanto amor, y tu, la esposa de nuestro querido músico y predicador católico.</p>
                            </div>
                            <span className="interview__question-text">TOTUS TUUS. María Angelica, cuéntanos un poco de tu vida en general.</span>
                            <p className="interview__question-answer interview__question-answer-space">R/: Nací en Bogotá, en un hogar católico practicante. Dios me dio el regalo de tener unos papás maravillosos y dos hermanas con quienes nos queremos mucho. Tuve una infancia muy feliz y desde muy pequeña sentí un amor muy grande por Nuestro Señor y la Virgencita.</p>
                            <p className="interview__question-answer">Hubo un capítulo corto en mi adolescencia, en el cual me alejé un poco de ellos pensando en las cosas del mundo, pero Dios fue muy misericordioso conmigo y me preservó de caer en muchos pecados.
                            </p>
                        </div>
                        <div className="interview__question interview__question-space">
                            <span className="interview__question-text">TOTUS TUUS ¿Tuviste novios? </span>
                            <p className="interview__question-answer">R/:Si, y más de los que hubiera querido tener. Hoy viendo a mi esposo, me gustaría no haberlo tenido sino a el. Pero todo en esta vida es un aprendizaje y de esto se ha valido Dios, para que en mis charlas, pueda enseñarle a las jovencitas, lo valioso y sagrado que es el noviazgo.</p>
                        </div>
                        <div className="interview__question interview__question-space">
                            <span className="interview__question-text">TOTUS TUUS ¿De la Maria Angelica de tu niñez y tu juventud a la mujer en la cual te has convertido hoy, ves mucha diferencia?</span>
                            <p className="interview__question-answer interview__question-answer-space">R/:Siento que Dios en muchos aspectos de mi vida, me devolvió a ese primer amor que yo le tenía cuando era niña. Fui aplicada, no daba problemas, pero me faltaba carácter, madurez y convicción.</p>
                            <p className="interview__question-answer">De la Ma Angelica de mi juventud, me arrepiento de algunas cosas, pero al mismo tiempo le agradezco a Dios pues de mis errores he podido aprender como mujer, esposa e hija de Dios.</p>
                        </div>
                        <div className="interview__question interview__question-space">
                            <span className="interview__question-text">TOTUS TUUS. Cuéntanos ahora un poco de tu noviazgo con Felipe:</span>
                            <p className="interview__question-answer interview__question-answer-space">R/:Cuando tenía 18 años, me invitaron a un grupo de oración dirigido por Felipe quien tenía en ese momento 22 años. El grupo era en la casa de sus papás, y había más de 500 jóvenes rezando el rosario. El me gustó desde un principio, pues tenía las características de mi hombre ideal, pero el no se fijó en mi en esa ocasión. Después de un año de estar asistiendo a los grupos de oración y de haberme acercado más a Dios, el se me declaró y empezó nuestro noviazgo con la bendición de Monseñor Germán Morales. Esto fue un 13 de Mayo, día de la Virgen de Fátima.</p>
                            <p className="interview__question-answer interview__question-answer-space">Fue un noviazgo difícil pero muy lindo. Felipe hablaba en el grupo sobre el valor de la castidad y la decisión inteligente de esperar hasta el matrimonio para tener relaciones. Así que nuestro noviazgo debía ser ejemplar en ese aspecto y Dios nos regaló esa hermosa gracia.</p>
                            <p className="interview__question-answer interview__question-answer-space">Faltando dos meses para cumplir los dos años de novios, Felipe se fue para Nueva York a la visita del Papa san</p>
                            <p className="interview__question-answer interview__question-answer-space">Juan Pablo II y desde un teléfono publico me llamó</p>
                            <p className="interview__question-answer">y me propuso matrimonio.</p>
                        </div>
                        <div className="interview-seven__second-image-container"><img className="interview-seven__second-image" src={SecondImage} alt="Maria Angelica y su esposo"></img></div>
                        <div className="interview__question interview__question-space">
                            <span className="interview__question-text">TOTUS TUUS. ¿Cómo fue el matrimonio de ustedes?</span>
                            <p className="interview__question-answer interview__question-answer-space">R/:Fue un matrimonio sencillo pero muy concurrido. La misa fue concelebrada por cinco sacerdotes, y nos casó el padre Fernando Umaña Montoya, quien era en ese momento el director del Foyer de Charité.</p>
                            <p className="interview__question-answer interview__question-answer-space">En la recepción le dimos una serenata a la Virgen Reina de la Paz de Medjugorje, consagrando nuestro hogar y poniéndolo bajo su manto.</p>
                            <p className="interview__question-answer">La verdad, fue un matrimonio bastante diferente, éramos un par de niños, yo de 21 años de edad y Felipe de 25 recién cumplidos. No teníamos un centavo, pero estábamos seguros de querer estar juntos por el resto de nuestras vidas.</p>
                            <span className="interview__question-text">7- TOTUS TUUS ¿Fue apresurado casarse a esa edad?</span>
                            <p className="interview__question-answer interview__question-answer-space">R/:Hoy en día le doy gracias a Dios de habernos casado tan jóvenes. Obviamente en muchas cosas éramos unos niños inmaduros, pero Dios nos fue enseñando a construir nuestro hogar</p>
                            <p className="interview__question-answer">Llevamos ya 20 años de matrimonio y vemos como Dios ha pesar de nuestros errores y debilidades, ha sido misericordioso y nos mantiene unidos y perseverantes.</p>
                        </div>
                        <div className="interview__question interview__question-space">
                            <span className="interview__question-text">TOTUS TUUS Cuando uno te ve, se piensa en la mamá de seis (6) hijos sino en una jovencita de máximo 30 años de edad. ¿En que momento decides ser mamá de una familia tan numerosa?</span>
                            <p className="interview__question-answer">R/:Desde que era una niña, siempre quise ser mamá. Felipe por su parte pensaba igual. Los dos, ya de novios estábamos seguros que queríamos un hogar con muchos bebés, planeado por Dios y no por nosotros. Algunas personas nos decían que estábamos locos al pensar así, pero en nuestro corazón teníamos la confianza de saber, que la voluntad de Dios para nuestra familia era perfecta. Por otra parte ni mi marid consideramos que tengamos una familia numerosa.</p>
                        </div>
                        <div className="interview__question interview__question-space">
                            <img className="interview-seven__third-image" src={ThirdImage} alt="Maria Angelica y su familia"></img>
                            <span className="interview__question-text">TOTUS TUUS. ¿Que cualidad crees que les dio nuestro Señor a
                            ustedes, para pensar de esa manera?</span>
                            <p className="interview__question-answer">R/:No hay mérito de nuestra parte, ¡todo es gracia de Dios! El es
                            generoso, bondadoso y providente. Así nosotros hubiéramos querido muchos hijos, estaba en sus manos darnos una familia con muchos hijos o no. Dios es bueno con todos! El nos concedió el honor de cuidar de estos seis hijos suyos para prepararlos para el cielo a María, Juanita, Felipe Josemaría, Ana, Belén y Miguel de María.</p>
                            <span className="interview__question-text">TOTUS TUUS. Hace unos años, hicimos cadenas de oración por la
                            salud de tu hijo Miguel, háblanos un poquito de ese capítulo:</span>
                            <p className="interview__question-answer interview__question-answer-space">R/:Fue un tiempo muy difícil. Miguel tuvo un cáncer en su ojito izquierdo. Tenía un año y cuatro meses de edad. Pasamos por una tribulación muy intensa y dolorosa, todo lo veíamos oscuro.</p>
                            <p className="interview__question-answer">Sin embargo en medio del dolor, vimos también la generosidad de las almas. La gente se volcó hacia nosotros con sus oraciones, vigilias y rosarios. Los sacerdotes ofrecían constantes misas por el niño y gracias a Dios a la Virgen y a la intercesión de san Juan Pablo II, Miguel hoy está sano y feliz.</p>
                        </div>
                        <div className="interview__question interview__question-space">
                            <span className="interview__question-text">TOTUS TUUS. ¿Tu relación con la Virgen María en esos momentos como fue?</span>
                            <p className="interview__question-answer interview__question-answer-space">R/:Yo siempre había amado a la Virgen, pero en esos momentos cuando estas en la cruz, te sientes más cercana a su corazón de Mamá. Sentí su fuerza y su valentía al soportar el dolor de su Hijo.</p>
                            <p className="interview__question-answer interview__question-answer-space">Pienso que mi relación con la Virgen se hizo mucho más fuerte e intima. Descubrí que en medio el dolor se puede sentir paz. Me sentí acompañada por Ella todo el tiempo. 
                            </p>
                        </div>
                        <div className="interview__question interview__question-space">
                            <img className="interview-seven__fourth-image" src={FourthImage} alt="Maria Angelica y su hijo"></img>
                            <span className="interview__question-text">TOTUS TUUS.¿Cómo haces para tener tiempo para tus seis hijos y para tu esposo?</span>
                            <p className="interview__question-answer">R/:He aprendido que debe estar en primer lugar mi esposo y después nuestros hijos. No es fácil y a veces me cuesta trabajo organizarme para que las cosas marchen bien. Sin embargo mis hijos ya no son unos bebés y cada uno colabora con sus deberes.</p>
                            <span className="interview__question-text">TOTUS TUUS. ¿Como podemos educar a los niños en la fe?
                            </span>
                            <p className="interview__question-answer interview__question-answer-space">R/:Primero con el ejemplo y también
                            con mucha paciencia.</p>
                            <p className="interview__question-answer">Mostrándoles desde que son muy niños, lo mucho que los ama Dios, también enseñándoles el valor de la gratitud con El. Mostrarles el amor de Dios por medio de la Virgen María es una tarea más sencilla, Ella sabe transmitirles el amor a Jesús con su delicadeza y pedagogía de mamá.</p>
                        </div>
                        <div className="interview__question interview__question-space">
                            <span className="interview__question-text">TOTUS TUUS. Fuera de las labores diarias, ¿En que más trabajas?</span>
                            <p className="interview__question-answer">Junto con Felipe damos charlas de familia, defensa de la vida, la belleza de la sexualidad para jóvenes y matrimonios. la alegría en medio del dolor, vivir sin miedo, confianza en Dios etc. A mi marido lo invitan todo el tiempo a conciertos, y congresos Marianos y Eucarísticos. Pero nos encanta hacer misión en familia, pues en ellas, todos los niños se involucran en nuestro trabajo apostólico.</p>
                        </div>
                        <div className="interview__question interview__question-space">
                            <span className="interview__question-text">TOTUS TUUS. ¿Cómo ves a tu esposo hoy después de 20 años de casados?</span>
                            <p className="interview__question-answer interview__question-answer-space">Con los mismos ojos que cuando estábamos de novios. Igual de enamorada! Y puedo decir con seguridad que igual de enamorados.</p>
                            <p className="interview__question-answer">Mi esposo trabaja sin descanso (literalmente). Mi Marido no duerme! Vive contestando correos, aconsejando y atendiendo a la gente. Tiene una agenda muy apretada y trata de administrar su tiempo lo mejor que puede, pues no le gusta estar lejos de la casa y para el viajar de misión es un sacrificio que ofrece con amor. Pero mi esposo es un hombre de familia, le encanta estar con los niños, se involucra en todas sus cosas, hace mercado conmigo, cocina, disfruta viajando en familia, pero sobre todo le gusta vernos a todos evangelizando con el.</p>
                        </div>
                        <div className="interview__question interview__question-space">
                            <span className="interview__question-text">TOTUS TUUS. ¿Algún consejo para las mujeres?</span>
                            <p className="interview__question-answer interview__question-answer-space">Procuremos hacer las cosas bien.</p>
                            <p className="interview__question-answer interview__question-answer-space">Esperen, sean pacientes, no se comporten como lo hace el mundo. Valoren la virginidad y la pureza, vale la pena esperar y guardarse para el hombre que Dios nos escogió.</p>
                            <p className="interview__question-answer interview__question-answer-space">No seamos tan vanidosas, hay que cuidar del cuerpo, pero más hay que cuidar del alma.</p>
                            <p className="interview__question-answer interview__question-answer-space">No nos fijemos en el dinero, la plata viene y va, pero Dios siempre permanece. El siempre cuida de nosotros sus hijos.</p>
                            <p className="interview__question-answer interview__question-answer-space">No se cierren a la vida, ni tampoco traigan niños al mundo para que otra persona los críe. Cuiden de sus hijos, ámenlos, estén siempre para ellos y para sus esposos. Disfruten de el honor de ser esposas y madres. No compitan con los hombres, ellos no pueden cumplir con nuestra misión, ni nosotros con la de ellos.</p>
                            <p className="interview__question-answer">No siempre vamos a tener disposición o paciencia, no siempre vamos a estar de buen genio, pero si oramos en la oración encontraremos el descanso, la paciencia y la sabiduría necesarias para velar por nuestros hogares. Recen el rosario, conságrense a la Virgen María y saquen el tiempo para recibir la Sagrada Comunión a diario. Dejen que sea Dios quien lleve las riendas de sus casas, para que todo marche bien.</p>
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

export default Interview7;