import "./App.css";
import { useState } from "react";
import TempCard from "./components/temp-card";

function App() {
  // let temperatura = 30;
  const [stateTemperatura, setStateTemperatura] = useState(30);
  const [descricao, setDescricao] = useState("");
  const [city, setCity] = useState("Cidade");

  const diasSemana = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];

  const callApi = () => {
    // API openweather
    console.log("Vai chamar a API de temperatura");
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&units=metric&appid=777fd6c175f16899b669ab9b22be7638`
    )
      .then((resposta) => {
        return resposta.json();
      })
      .then((dadoTemperatura) => {
        // console.log(temperatura);
        setDescricao(dadoTemperatura.weather[0].description);
        setStateTemperatura(dadoTemperatura.main.temp);
      })
      .catch(() => {
        alert("Cidade não encontrada");
      });
  };

  const inputCidade = (evento) => {
    setCity(evento.target.value); //consigo pegar a tecla digitada
  };
  return (
    <div className="App">
      <input type="text" onChange={inputCidade}></input>
      <button onClick={callApi}>Buscar</button>
      {/* <p>{temperatura}</p> */}
      <p>{city}</p>
      <p>{stateTemperatura}</p>
      <p>{descricao}</p>
      {diasSemana.map((dia) => {
        return <TempCard diaDaSemana={dia} />;
      })}
    </div>
  );
}

export default App;
