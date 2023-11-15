import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Adicione useLocation aqui
import Navegador from '../components/navagador';

function UpdateBook() {
  const navigate = useNavigate();
  const location = useLocation(); // Use useLocation para acessar a propriedade state
  const [bookData, setBookData] = useState({
    id: '',
    name: '',
    author: '',
  });

  useEffect(() => {
    // Preencher os campos com os dados do livro ao iniciar o componente
    if (location.state && location.state.bookData) {
      setBookData(location.state.bookData);
    }
  }, [location.state]);

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
        method: 'PUT',
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
        // Redirecionar de volta para a lista de livros após o cadastro/atualização
        navigate('/Livros');
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
            readOnly // O ID não deve ser alterado
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

        <button type="submit">Atualizar</button>
      </form>
    </div>
  );
}

export default UpdateBook;
