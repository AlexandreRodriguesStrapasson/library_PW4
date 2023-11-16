import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function FormBookUpdate() {
  const navigate = useNavigate();
  const location = useLocation();
  const [bookData, setBookData] = useState({
    id: '',
    name: '',
    author: '',
    dataRetirada: '',
    clienteNome: '',
    telefone: '',
    valorEmprestimo: '',
  });

  useEffect(() => {
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
        body: JSON.stringify(bookData),
      });

      if (response.ok) {
        console.log('Livro cadastrado/atualizado com sucesso!');
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
      <form onSubmit={handleSubmit}>
        <label>
          ID do Livro
          <input type="text" name="id" value={bookData.id} onChange={handleInputChange} readOnly />
        </label>

        <br />

        <label>
          Nome do Livro
          <input type="text" name="name" value={bookData.name} onChange={handleInputChange} />
        </label>

        <br />

        <label>
          Autor
          <input type="text" name="author" value={bookData.author} onChange={handleInputChange} />
        </label>

        <br />

        <label>
          Data de Retirada
          <input type="date" name="dataRetirada" value={bookData.dataRetirada} onChange={handleInputChange} />
        </label>

        <br />

        <label>
          Nome do Cliente
          <input type="text" name="clienteNome" value={bookData.clienteNome} onChange={handleInputChange} />
        </label>

        <br />

        <label>
          Telefone
          <input type="text" name="telefone" value={bookData.telefone} onChange={handleInputChange} />
        </label>

        <br />

        <label>
          Valor do Empréstimo
          <input type="text" name="valorEmprestimo" value={bookData.valorEmprestimo} onChange={handleInputChange} />
        </label>

        <br />

        <button type="submit">Atualizar</button>
      </form>
    </div>
  );
}

export default FormBookUpdate;
