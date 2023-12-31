import { useState } from 'react';
import Style from '../style/backGround.module.css';

function FormBook() {
  const [bookData, setBookData] = useState({
    id: '',
    name: '',
    author: '',
    dataRetirada: '',
    clienteNome: '', 
    telefone: '', 
    valorEmprestimo: '', 
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
          dataRetirada: bookData.dataRetirada,
          clienteNome: bookData.clienteNome,
          telefone: bookData.telefone,
          valorEmprestimo: bookData.valorEmprestimo,
        }),
      });

      if (response.ok) {
        console.log('Livro cadastrado com sucesso!');
        setBookData({
          id: '',
          name: '',
          author: '',
          dataRetirada: '',
          clienteNome: '',
          telefone: '',
          valorEmprestimo: '',
        });
      } else {
        console.error('Erro ao cadastrar livro.');
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
          <input
            className={Style.inputId}
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
            className={Style.inputName}
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
            className={Style.inputAuthor}
            type="text"
            name="author"
            value={bookData.author}
            onChange={handleInputChange}
          />
        </label>

        <br />

        <label>
          Data de Retirada
          <input
            className={Style.inputDate}
            type="date"
            name="dataRetirada"
            value={bookData.dataRetirada}
            onChange={handleInputChange}
          />
        </label>

        <br />

        <label>
          Nome do Cliente
          <input
            className={Style.inputClient}
            type="text"
            name="clienteNome"
            value={bookData.clienteNome}
            onChange={handleInputChange}
          />
        </label>

        <br />

        <label>
          Telefone
          <input
            className={Style.inputPhone}
            type="text"
            name="telefone"
            value={bookData.telefone}
            onChange={handleInputChange}
          />
        </label>

        <br />

        <label>
          Valor do Empréstimo
          <input
            className={Style.inputLoan}
            type="text"
            name="valorEmprestimo"
            value={bookData.valorEmprestimo}
            onChange={handleInputChange}
          />
        </label>

        <br />

        <button className={Style.button} type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default FormBook;
