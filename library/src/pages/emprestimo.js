import React, { useState } from "react";
import Navegador from "../components/navagador";

function Emprestimo() {
  const [dataRetirada, setDataRetirada] = useState('');
  const [dataDevolucao, setDataDevolucao] = useState('');

  function handleDataRetiradaChange(event) {
    setDataRetirada(event.target.value);
  }

  function handleDataDevolucaoChange(event) {
    setDataDevolucao(event.target.value);
  }

  function calculate() {
    const dataRetiradaObj = new Date(dataRetirada);
    const dataDevolucaoObj = new Date(dataDevolucao);

    const diffEmDias = Math.floor((dataDevolucaoObj - dataRetiradaObj) / (1000 * 60 * 60 * 24));

    if (diffEmDias > 30) {
      console.log("Empréstimo atrasado");
    } else {
      console.log("Empréstimo dentro do prazo");
    }
  }

  return (
    <div>
      <Navegador />
      <form>
        <label>
          Data de retirada
          <input type="date" value={dataRetirada} onChange={handleDataRetiradaChange} />
        </label>

        <br />

        <label>
          Data de devolução
          <input type="date" value={dataDevolucao} onChange={handleDataDevolucaoChange} />
        </label>

        <br />

        <button type="button" onClick={calculate}>
          Conferir Emprestimo
        </button>
      </form>
    </div>
  );
}

export default Emprestimo;
