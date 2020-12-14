import { useState } from "react";

const Main = (props) => {
  const [tripulante, setTripulante] = useState(props.tripulantes);
  const anyadirTripulante = () => {
    setTripulante(tripulante + 1);
  };
  return (
    <>
      <h2>{props.nombre}</h2>
      <p>Eslora: {props.eslora}</p>
      <p>Tripulantes: {tripulante}</p>
      <button onClick={anyadirTripulante}>Añadir tripulante</button>
    </>
  );
};

export default Main;
