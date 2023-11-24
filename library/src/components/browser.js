import { useNavigate } from "react-router-dom";
import browserStyle from "../style/browser.module.css"

function Browser(){
    const navigate = useNavigate();
    const goToHome = () => {
        navigate("/");
    }
    const goToFormBook = () => {
        navigate("/Cadastro_Livro");
    }
    const goToBooks = () => {
        navigate("/Livros");
    }

    return(
        <div className={browserStyle.backGround} id="navegation">
            <button className={browserStyle.btn} onClick={goToHome}>Home</button>
            <button className={browserStyle.btn} onClick={goToFormBook}>Cadastrar Emprestimo</button>
            <button className={browserStyle.btn} onClick={goToBooks}>Livros</button>
        </div>
    )
}

export default Browser;