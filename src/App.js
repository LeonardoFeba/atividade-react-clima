import { useState } from "react";
import "./App.css";
import "./index.css";
import TempCard from "./components/temp-card";

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
  const [tempMax, setTempMax] = useState();
  const [currentTemp, setCurrentTemp] = useState();
  const [tempMin, setTempMin] = useState();
  const [descricao, setDescricao] = useState("");

  function buscarCidade() {
    setCidade(entrada); //cidade = entrada
    // chamar API
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${entrada}&lang=pt_br&units=metric&appid=777fd6c175f16899b669ab9b22be7638`
    )
      .then((response) => {
        return response.json();
      })
      .then((dado) => {
        console.log(dado);
        setCurrentTemp(dado.list[0].main.temp);
        setTempMax(dado.list[0].main.temp_max);
        setDescricao(dado.list[0].weather[0].description);
        setTempMin(dado.list[0].main.temp_min);
      })
      .catch(() => {
        alert("deu erro");
      });
  }

  function gerenciaBusca(vasco) {
    setEntrada(vasco.target.value); //entrada = vasco.target.value
  }

  return (
    <div className="App">
      <h1>Insira a cidade:</h1>
      <input onChange={gerenciaBusca}></input>
      <h2>{cidade}</h2>
      <button onClick={buscarCidade}>Buscar</button>
      <div id="cardContainer">
        {diasSemana.map((dia) => (
          <TempCard
            key={dia}
            city={cidade}
            description={descricao}
            tempMax={tempMax}
            tempMin={tempMin}
            temp={currentTemp}
            day={dia}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
