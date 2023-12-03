import Browser from "../components/browser";
import Style from '../style/homeCss.module.css';

function Home(){
    return(
        <div>
            <Browser/>
            <div className={Style.div}>
                <h1>Home Page</h1>
                <p>Essa página vai ser usada para um apresentação do site</p>
            </div>
        </div>
    )
}


export default Home;