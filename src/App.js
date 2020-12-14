// 7. Crea una aplicación en la que tienes el siguiente objeto de JavaScript en el componente App:

// Muestra el nombre del muelle en un componente Cabecera, la lista de barcos en un componente Main y el teléfono de contacto en un componente Footer. En la lista de los barcos, haz que cada uno de ellos tenga un botón de añadir tripulante, y cuando se pulsa haz que se sume uno al número de tripulantes en el barco con el botón al que se le ha pulsado.

import "./App.css";
import muelle from "./muelle";
import Cabecera from "./Cabecera";
import Footer from "./Footer";
import Main from "./Main";

function App() {
  const mostrarBarcos = muelle.barcos.map(function (barco) {
    return (
      <div key={barco.nombre}>
        <Main
          nombre={barco.nombre}
          eslora={barco.eslora}
          tripulantes={barco.tripulantes}
        />
      </div>
    );
  });
  return (
    <>
      <Cabecera nombrePuerto={muelle.nombre} />
      {mostrarBarcos}
      <Footer telefono={muelle.contacto.telefono} />
    </>
  );
}

export default App;
