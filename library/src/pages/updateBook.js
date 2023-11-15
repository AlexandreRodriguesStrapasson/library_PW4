import { useState } from 'react';
import Navegador from '../components/navagador';

function FormBook() {
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
      const response = await fetch(`http://localhost:3500/books/${bookData.id}`, {
        method: 'PUT', // Use PUT para atualizar com o ID fornecido
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: bookData.name,
          author: bookData.author,
        }),
      });

      if (response.ok) {
        console.log('Livro cadastrado/atualizado com sucesso!');
        // Limpar os campos de input após o cadastro/atualização
        setBookData({
          id: '',
          name: '',
          author: '',
        });
      } else {
        console.error('Erro ao cadastrar/atualizar livro.');
      }
    } catch (error) {
      console.error('Erro ao conectar com o servidor:', error);
    }
  };

  

  return (
    <div>
      <Navegador />

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

        <button type="submit">Cadastrar/Atualizar</button>
      </form>
    </div>
  );
}

export default FormBook;
