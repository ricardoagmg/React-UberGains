import React, { useState } from "react";
import Results from "./result";

const BoxInputs = () => {
  
  const [inputValue, setInputValue] = useState({
    kmRodados: "",
    kmPorLitro: "",
    precoGasolina: "",
    ganhosApp: "",
  });

  const [resultValues, setResultValues] = useState({
    gastos: "",
    ganhosApp: "",
    lucroLiquido: "",
  });

  const handleInputChange = (event) => {
    setInputValue({
      ...inputValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const gastos =
      (inputValue.kmRodados / inputValue.kmPorLitro) * inputValue.precoGasolina;
    const ganhosApp = parseFloat(inputValue.ganhosApp);
    const lucroLiquido = ganhosApp - gastos;

    setResultValues({
      gastos: gastos.toFixed(2),
      ganhosApp: ganhosApp.toFixed(2),
      lucroLiquido: lucroLiquido.toFixed(2),
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="km-rodados">Quantos km você rodou hoje?</label>
        <input
          type="number"
          id="km-rodados"
          name="kmRodados"
          value={inputValue.kmRodados}
          onChange={handleInputChange}
        />

        <label htmlFor="preco-gasolina">
          Quanto você pagou pelo litro de gasolina?
        </label>
        <input
          type="number"
          id="preco-gasolina"
          name="precoGasolina"
          value={inputValue.precoGasolina}
          onChange={handleInputChange}
        />
        
        <label htmlFor="km-por-litro">
          Quantos km por litro seu carro fez?
        </label>
        <input
          type="number"
          id="km-por-litro"
          name="kmPorLitro"
          value={inputValue.kmPorLitro}
          onChange={handleInputChange}
        />
        

        <label htmlFor="ganhos-app">
          Quantos reais você fez nos apps hoje?
        </label>
        <input
          type="number"
          id="ganhos-app"
          name="ganhosApp"
          value={inputValue.ganhosApp}
          onChange={handleInputChange}
        />
        

        <input type="submit" value="Enviar" />
      </form>

      {resultValues && <Results resultValues={resultValues} />}
    </div>
  );
};

export default BoxInputs;
