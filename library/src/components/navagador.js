import { useNavigate } from "react-router-dom";

function Navegador(){
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
        <div id="navegation">
            <button onClick={goToHome}>Home</button>
            <button onClick={goToFormBook}>Cadastrar Emprestimo</button>
            <button onClick={goToBooks}>Livros</button>
        </div>
    )
}

export default Navegador;