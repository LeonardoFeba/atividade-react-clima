import { useState } from "react";
import "./App.css";

function App() {
  const diasSemana = [
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sabado",
    "Domingo",
  ];

  const [entrada, setEntrada] = useState("");
  const [cidade, setCidade] = useState(""); //FORMA DE UTILIZAR VARIÁVEI PARA RENDEREIZAR A TELA
  const [tempMax, setTempMax] = useState(0);
  const [temMin, setTempMin] = useState(0);
  const [descricaco, setDescricao] = useState("Nublado");
  const [veloVento, setVeloVento] = useState(0);

  function buscarCidade() {
    setCidade(entrada); //cidade = entrada
    // chamar API
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${entrada}&lang=pt_br&units=metric&appid=777fd6c175f16899b669ab9b22be7638`
    )
      .then((response) => {
        return response.json();
      })
      .then((dado) => {
        console.log(dado);
        console.log(dado.main.temp);
        setTempMax(dado.main.temp_max);
      })
      .catch(() => {
        alert("deu erro");
      });
  }

  function gerenciaBusca(vasco) {
    setEntrada(vasco.target.value); //entrada = vasco.traget.value
  }

  return (
    <div className="App">
      <h1>Insira a cidade:</h1>
      <input onChange={gerenciaBusca}></input>
      <h2>{cidade}</h2>
      <button onClick={buscarCidade}>Buscar</button>
      <p>30°C</p>
      <ul>
        <li>
          <p>{diasSemana[0]}</p>
          <p>{tempMax}</p>
        </li>
        <li>
          <p>{diasSemana[1]}</p>
          <p>{tempMax}</p>
        </li>
        <li>
          <p>{diasSemana[2]}</p>
          <p>{tempMax}</p>
        </li>
        <li>
          <p>{diasSemana[3]}</p>
          <p>{tempMax}</p>
        </li>
        <li>
          <p>{diasSemana[4]}</p>
          <p>{tempMax}</p>
        </li>
        <li>
          <p>{diasSemana[5]}</p>
          <p>{tempMax}</p>
        </li>
        <li>
          <p>{diasSemana[6]}</p>
          <p>{tempMax}</p>
        </li>
      </ul>
    </div>
  );
}

export default App;
