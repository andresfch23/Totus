import React, { Component } from 'react';
import Advertisement from '../Advertisement.js';
import FirstImage from '../../assets/images/interviews/interview10/1.jpg';

class Interview10 extends Component {
    render() {
        return(           
            <div className="grid">
                <div className="grid__item three-quarters">
                    <div><h2 className="interview__main-title interview__main-title-head interview__main-title-head--tenth">“No te me vas a escapar, Yo te elegí para esto”
                    </h2></div>
                    <div className="interview-ten__profile">
                        <img className="interview-ten__first-image" src={FirstImage} alt="Foto de presentacion de Joan Sanchez tocando guitarra"></img>
                        <h3 className="interview__main-title interview-ten__tag">Joan Sanchez</h3>
                    </div>
                    <div className="interview__question interview__question-space">
                        <span className="interview__question-text">TOTUS TUUS ¿Por qué Joan Sánchez decidió cantarle a Dios?</span>
                        <p className="interview__question-answer">R/: Cuando tuve mi primer encuentro personal con Dios yo era un joven muy rebelde, pero por medio de la música católica toco mi vida. Cuando estuve en el concierto de Jon Carlo me acerque a él y le dije que quería estar con su grupo de música, el me pregunto: ¿Tú cantas o tocas algún instrumento? Y yo le dije: No, no se hacer nada. Él continúo diciendo: entonces ayúdanos detrás de bambalinas. Y así, me fui dando cuenta como Dios tocaba a las personas por medio de las alabanzas y al mismo tiempo tocaba mi vida. Yo decía “algún día yo quiero hacer eso”, así que, poco a poco aprendí a tocar la guitarra y a cantar, y Jon empezó a regalarme canciones desde el principio, con el paso del tiempo comprendí que no era un deseo mío, sino, que era un llamado de Dios.</p>
                    </div>
                    <div className="interview__question interview__question-space">
                        <span className="interview__question-text">TOTUS TUUS ¿En alguna adoración has tenido alguna experiencia que te ha marcado tu vida espiritual?</span>
                        <p className="interview__question-answer">R/: Una vez me paso algo muy interesante, yo había tenido una relación sentimental cuando empecé con esto de la música, pero esa relación llego a su fin. Yo estaba muy enamorado, y realmente creía que esa era la mujer para mí, entonces yo me enoje mucho con Dios y le dije que ya no iba a cantarle más, incluso llegue a irme de mi casa porque eso realmente me afecto mucho. Cuando regrese nuevamente a mi casa, mi madre me dijo: La hermana del grupo de oración te manda a decir que vayas por última vez a cantar, pues ellos no tienen a nadie, solo será por este jueves. Decidí ir y le dije a Dios: te voy a cantar, pero lo hare solo por hacerlo,sin el corazón.Comencé a cantar “Dios está aquí”, y empiezo a sentir la presencia de Dios y cuando me doy cuenta todos los presentes estaban llorando, sentí como el Señor me decía “no te me vas a escapar, aunque tú no quieras o busques otro camino, yo estoy contigo,yo te elegí para esto”. Desde ese momento mi vida cambio.</p>
                    </div>
                    <div className="interview__question interview__question-space">
                        <span className="interview__question-text">TOTUS TUUS ¿Cómo ha sido tu experiencia con Cielo Abierto?</span>
                        <p className="interview__question-answer">R/: ¡Increíble!, el proyecto de Cielo Abierto es de Dios. Hemos visto cosas muy lindas, es un concierto hermoso. El concierto que más me impacto fue en Houston, en el momento de la adoración sentí que debía hacer un llamado, pero, yo me estaba restringiendo de decirlo, finalmente decidí llamar a los jóvenes, y habían cinco en especial que sentían la vocación a ser sacerdotes, si yo me hubiera quedado callado probablemente ellos no se hubieran decidido.</p>
                    </div>
                    <div className="interview__question interview__question-space">
                        <span className="interview__question-text">TOTUS TUUS ¿Cómo es tu relación con la Virgen María?</span>
                        <p className="interview__question-answer">R/: cuando inicie los caminos de Dios, tenía como un poco de problema con respecto a María, entonces en mi oración decidí decirle a Dios: Señor yo quiero que tú me releves, que no sea por medio de nadie sino, a través de tu palabra que yo descubra a María. Termino la oración y justo cuando abro mi biblia leo una cita que dice: ella es la madre de todos los que hacen la voluntad de Dios. Desde ese día yo acepte a María como mi madre y he pasado experiencias muy lindas con ella, sin duda alguna ella fue la primera adoradora.</p>
                    </div>
                    <div className="interview__question interview__question-space">
                        <span className="interview__question-text">TOTUS TUUS ¿Tienes alguna relación especial con algún cantante católico?</span>
                        <p className="interview__question-answer">R/: Si, tengo muchos hermanos músicos que admiro y son una bendición en mi vida, por ejemplo: Ambiorix Padilla, Jorge Morel, Celinés, Kairy Marquez, Alfareros, entre otros. Realmente tengo una relación muy bonita con cada uno de ellos, y los admiro no solo por lo que hacen en la música, sino, la manera de ser como persona.</p>
                    </div>
                </div> 
                <div className="grid__item one-quarter">
                    <Advertisement />
                </div>
            </div>
        )
    }
}

export default Interview10;