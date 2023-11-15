import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navegador from '../components/navagador';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3500/books');
        if (!response.ok) {
          throw new Error(`Erro ao buscar dados: ${response.statusText}`);
        }

        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  const navigate = useNavigate();

  const handleEditClick = (bookId) => {
    const selectedBook = books.find((book) => book.id === bookId);
    navigate('/Atualiza_Livro', { state: { bookData: selectedBook } });
  };

  return (
    <div>
      <Navegador />
      <h2>Lista de Livros</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>Nome: </strong>
            {book.name}
            <br />
            <strong>Autor: </strong>
            {book.author}
            <br />
            <strong>ID: </strong>
            {book.id}
            <AiFillEdit onClick={() => handleEditClick(book.id)} />
            <AiFillDelete />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
