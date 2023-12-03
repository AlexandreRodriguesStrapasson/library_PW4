import Browser from "../components/browser";
import Style from '../style/homeCss.module.css';

import img1 from '../style/img/Senhor dos aneis 1.png'
import img2 from '../style/img/Senhor dos aneis 2.png'
import img3 from '../style/img/Senhor dos aneis 3.png'
import img4 from '../style/img/Harry Potter 1.png'
import img5 from '../style/img/Harry Potter 2.png'
import img6 from '../style/img/Harry Potter 3.png'

function Home(){
    return(
        <div>
            <Browser/>
            <div className={Style.div}>
                <h1>Home Page</h1>
                <p>Ler fornece ao espírito materiais para o conhecimento, mas só o pensar faz nosso o que lemos</p>
                <p>~John Locke</p>
                <h3>Top mais indicados</h3>
                <ul className={Style.ul}>
                    <li className={Style.li}><img src={img1} alt="Senhor dos aneis - A Sociedade do anel" className={Style.book}/></li>
                    <li className={Style.li}><img src={img2} alt="Senhor dos anesi - As Duas Torres" className={Style.book}/></li>
                    <li className={Style.li}><img src={img3} alt="Senhor dos anesi - O Retorno do Rei" className={Style.book}/></li>
                    
                    <li className={Style.li}><img src={img4} alt="Harry Potter - E A Pedra Filosofal" className={Style.book}/></li>
                    <li className={Style.li}><img src={img5} alt="Harry Potter - E A Camara Secreta" className={Style.book}/></li>
                    <li className={Style.li}><img src={img6} alt="Harry Potter - E o Prisoneiro de Azkaban" className={Style.book}/></li>
                </ul>        
            </div>
        </div>
    )
}


export default Home;