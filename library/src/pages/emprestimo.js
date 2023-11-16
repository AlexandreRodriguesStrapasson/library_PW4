import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';  
import Navegador from "../components/navagador";

function Emprestimo() {
  const location = useLocation();  
  const [dataRetirada, setDataRetirada] = useState("");
  const [dataDevolucao, setDataDevolucao] = useState("");
  const [atrasado, setAtrasado] = useState(null);

  useEffect(() => {
    if (location.state && location.state.dataRetirada) {
      setDataRetirada(location.state.dataRetirada);
    }
  }, [location.state]);

  function handleDataRetiradaChange(event) {
    setDataRetirada(event.target.value);
  }

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
  }

  return (
    <div>
      <Navegador />
      <form>
        <label>
          Data de retirada
          <input
            type="date"
            value={dataRetirada}
            onChange={handleDataRetiradaChange}
          />
        </label>

        <br />

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
            ? "O empréstimo está atrasado."
            : "O empréstimo está dentro do prazo."}
        </p>
      )}
    </div>
  );
}

export default Emprestimo;
