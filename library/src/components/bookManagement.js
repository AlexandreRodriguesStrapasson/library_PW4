import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AiFillEdit, AiFillDelete, AiOutlineFieldTime } from 'react-icons/ai';
import Style from '../style/backGround.module.css'

function Management(){
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
            const updatedBooks = books.filter((book) => book.id !== bookId);
            setBooks(updatedBooks);
        } else {
            console.error('Erro ao excluir livro.');
        }
        } catch (error) {
        console.error('Erro ao conectar com o servidor:', error);
        }
    };

    const handleEmprestimoClick = async (bookId) => {
        try {
        const response = await fetch(`http://localhost:3500/books/${bookId}`);
        if (!response.ok) {
            throw new Error(`Erro ao buscar dados do livro: ${response.statusText}`);
        }
    
        const bookDetails = await response.json();
        navigate('/Emprestimo', {
            state: { bookDetails, dataRetirada: bookDetails.dataRetirada },
        });
        } catch (error) {
        console.error('Erro ao obter dados do livro:', error);
        }
    };

    return(
    <div className={Style.div}>
      <h2>Lista de livros emprestados</h2>
        <ul className={Style.ul}>
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
                <br />
                <AiFillEdit onClick={() => handleEditClick(book.id)} />
                <AiFillDelete onClick={() => handleDeleteClick(book.id)} />
                <AiOutlineFieldTime onClick={() => handleEmprestimoClick(book.id)} />
              </li>
            ))}
          </ul>
      </div>
    )
}

export default Management;