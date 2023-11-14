import Navegador from "../components/navagador";
import { fetchAllBooks } from "../api/fetchBooks";
import { useEffect } from "react";

function Books(){
    useEffect(() => {
        (async () => {
            await fetchAllBooks()

        })()
    }, [])
    
    return(
        <div>
            <Navegador/>
        </div>
    )
}

export default Books;