import Navegador from "../components/navagador";

function FormBook(){
    return(
        <div>
            <Navegador/>

            <form>
                <label>Nome do Livro
                    <input type="text"/>
                </label>

                <br/>

                <label>Código
                    <input type="number"/>
                </label>

                <br/>

                <button>Cadastrart</button>
            </form>
        </div>
    )
}

export default FormBook;