import { useState } from 'react';

function FormBook(){
    const [bookData, setBookData] = useState({
        id: '',
        name: '',
        author: '',
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBookData({
          ...bookData,
          [name]: value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('http://localhost:3500/books', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id: bookData.id,
              name: bookData.name,
              author: bookData.author,
            }),
          });
    
          if (response.ok) {
            console.log('Livro cadastrado com sucesso!');
            setBookData({
              id: '',
              name: '',
              author: '',
            });
          } else {
            console.error('Erro ao cadastrar livro.');
          }
        } catch (error) {
          console.error('Erro ao conectar com o servidor:', error);
        }
      };

    
    return(
        <div>
        <form onSubmit={handleSubmit}>
            <label>
            ID do Livro
            <input
                type="text"
                name="id"
                value={bookData.id}
                onChange={handleInputChange}
            />
            </label>

            <br />

            <label>
            Nome do Livro
            <input
                type="text"
                name="name"
                value={bookData.name}
                onChange={handleInputChange}
            />
            </label>

            <br />

            <label>
            Autor
            <input
                type="text"
                name="author"
                value={bookData.author}
                onChange={handleInputChange}
            />
            </label>

            <br />

            <button type="submit">Cadastrar</button>
        </form>
        </div>
    )
}

export default FormBook;