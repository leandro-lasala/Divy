import { useState } from "react";
import Gasto from "../components/Gasto.jsx";
import useGastos from "../hooks/useGastos.js";
import useSeleccionados from "../hooks/useSeleccionados.js";
import { Link } from "react-router";
import "./Demo.css";

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
    <main className="demo">
      <Link to="/" className="demo-volver">
        ← Volver al inicio
      </Link>
      <h1 className="demo-titulo">Probá Divy</h1>
      <p className="demo-descripcion">
        Seleccioná los gastos y dividí la cuenta.
      </p>
      <div className="demo-contenido">
        <section className="demo-gastos">
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
        </section>
        <section className="demo-resumen">
          <h2>Resumen de la cuenta</h2>
          <h3>Total: ${total}</h3>

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

          <div className="demo-resultado">
            <p>CADA PERSONA PAGA</p>

            <h2>
              $
              {Number(personas) > 0
                ? (total / Number(personas)).toFixed(2)
                : "0.00"}
            </h2>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Demo;
