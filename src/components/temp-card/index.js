import "./style.css";

export default function TodayTemp({ diaDaSemana }) {
  return (
    <div className="diaTemp">
      <h3>São Paulo</h3>
      <h2>{diaDaSemana}</h2>
      <h1>16ºC</h1>
      <p>nublado</p>
    </div>
  );
}
