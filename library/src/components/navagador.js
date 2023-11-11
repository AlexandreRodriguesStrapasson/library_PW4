import { useNavigate } from "react-router-dom";

function Navegador(){
    const navigate = useNavigate();
    const goToHome = () => {
        navigate("/");
    }
    const goToFormBook = () => {
        navigate("/Cadastro_Livro");
    }
    const goToEmprestimo = () => {
        navigate("/Emprestimo");
    }

    return(
        <div id="navegation">
            <button onClick={goToHome}>Home</button>
            <button onClick={goToFormBook}>Cadastrar Livro</button>
            <button onClick={goToEmprestimo}>Emprestimo</button>
        </div>
    )
}

export default Navegador;