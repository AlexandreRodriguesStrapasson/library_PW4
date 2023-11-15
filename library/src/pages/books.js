import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navegador from '../components/navagador';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

const Books = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

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

  const handleEditClick = (bookId) => {
    const selectedBook = books.find((book) => book.id === bookId);
    navigate('/Atualiza_Livro', { state: { bookData: selectedBook } });
  };

  const handleDeleteClick = async (bookId) => {
    try {
      const response = await fetch(`http://localhost:3500/books/${bookId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Livro excluído com sucesso!');
        // Atualizar a lista de livros após a exclusão
        const updatedBooks = books.filter((book) => book.id !== bookId);
        setBooks(updatedBooks);
      } else {
        console.error('Erro ao excluir livro.');
      }
    } catch (error) {
      console.error('Erro ao conectar com o servidor:', error);
    }
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
            <AiFillDelete onClick={() => handleDeleteClick(book.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;