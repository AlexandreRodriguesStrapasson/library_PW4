import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';  
import Browser from "../components/browser";

function Emprestimo() {
  const location = useLocation();  
  const [dataRetirada, setDataRetirada] = useState("");
  const [dataDevolucao, setDataDevolucao] = useState("");
  const [atrasado, setAtrasado] = useState(null);
  const [bookDetails, setBookDetails] = useState(null);
  const [valorComAtraso, setValorComAtraso] = useState(null);

  useEffect(() => {
    if (location.state && location.state.bookDetails) {
      const { dataRetirada, clienteNome, telefone, valorEmprestimo } = location.state.bookDetails;
      setDataRetirada(dataRetirada);
      setBookDetails({ clienteNome, telefone, valorEmprestimo });
    }
  }, [location.state]);

  function handleDataDevolucaoChange(event) {
    setDataDevolucao(event.target.value);
  }

  function calculateAtraso() {
    const dataRetiradaObj = new Date(dataRetirada);
    const dataDevolucaoObj = new Date(dataDevolucao);

    const diffEmDias = Math.floor(
      (dataDevolucaoObj - dataRetiradaObj) / (1000 * 60 * 60 * 24)
    );

    setAtrasado(diffEmDias > 30);

    if (diffEmDias > 30) {
      const mesesAtraso = Math.floor(diffEmDias / 30);
      const percentualAumento = mesesAtraso * 0.1; 
      const valorAumentado = parseFloat(bookDetails.valorEmprestimo) * (1 + percentualAumento);
      setValorComAtraso(valorAumentado.toFixed(2));
    } else {
      setValorComAtraso(null);
    }
  }

  return (
    <div>
      <Browser />
      <h2>Dados do Empréstimo</h2>
      <p>
        <strong>Data de Retirada:</strong> {dataRetirada}
      </p>

      {bookDetails && (
        <div>
          <h3>Dados do Cliente</h3>
          <p>
            <strong>Cliente:</strong> {bookDetails.clienteNome}
          </p>
          <p>
            <strong>Telefone:</strong> {bookDetails.telefone}
          </p>
          <p>
            <strong>Valor do Empréstimo:</strong> {bookDetails.valorEmprestimo}
          </p>
        </div>
      )}

      <form>
        <label>
          Data de devolução
          <input
            type="date"
            value={dataDevolucao}
            onChange={handleDataDevolucaoChange}
          />
        </label>

        <br />

        <button type="button" onClick={calculateAtraso}>
          Conferir Empréstimo
        </button>
      </form>

      {atrasado !== null && (
        <p>
          {atrasado
            ? `O empréstimo está atrasado. Valor com atraso: R$ ${valorComAtraso}`
            : "O empréstimo está dentro do prazo."}
        </p>
      )}
    </div>
  );
}

export default Emprestimo;
