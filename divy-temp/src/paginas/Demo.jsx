import { useState } from "react";
import Gasto from "../components/Gasto.jsx";
import useGastos from "../hooks/useGastos.js";
import useSeleccionados from "../hooks/useSeleccionados.js";

function Demo() {
  const [personas, setPersonas] = useState("2");
  const { gastos, cargando, error } = useGastos();
  const { seleccionados, cambiarSeleccion } = useSeleccionados();

  const total = gastos
    .filter((gasto) => seleccionados.includes(gasto.id))
    .reduce((acumulador, gasto) => {
      return acumulador + gasto.precio;
    }, 0);

  return (
    <main>
      <h1>Probá Divy</h1>
      <p>Acá vamos a crear nuestra demo de gastos compartidos</p>
      {cargando && <p>Cargando gastos...</p>}
      {error && <p>{error}</p>}
      {gastos.map((gasto) => (
        <Gasto
          key={gasto.id}
          gasto={gasto}
          seleccionado={seleccionados.includes(gasto.id)}
          onSeleccionar={() => cambiarSeleccion(gasto.id)}
        />
      ))}
      <h2>Total: ${total}</h2>

      <label htmlFor="personas">Cantidad de personas: </label>

      <input
        id="personas"
        type="text"
        inputMode="numeric"
        value={personas}
        onChange={(e) => {
          const valor = e.target.value;

          if (/^\d*$/.test(valor)) {
            setPersonas(valor);
          }
        }}
      />

      <h2>
        Por persona: $
        {Number(personas) > 0 ? (total / Number(personas)).toFixed(2) : "0.00"}
      </h2>
    </main>
  );
}

export default Demo;
