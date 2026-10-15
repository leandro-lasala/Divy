
import "./beneficios.css";

const beneficios = [
  {
    titulo: "Salidas",
    descripcion: "Cena, bar, delivery o cualquier juntada.",
    imagen: "/imagenes/salidas.png",
  },
  {
    titulo: "Viajes",
    descripcion: "Organizá todos los gastos del viaje en un solo lugar.",
    imagen: "/imagenes/viajes.png",
  },
  {
    titulo: "Casa",
    descripcion: "Compartí los gastos del hogar con tus compañeros.",
    imagen: "/imagenes/compras.png",
  },
  {
    titulo: "Pareja",
    descripcion: "Dividí los gastos sin complicaciones.",
    imagen: "/imagenes/ropa.png",
  },
  {
    titulo: "Regalos",
    descripcion: "Juntá la plata entre todos y llevá las cuentas claras.",
    imagen: "/imagenes/cine.png",
  },
];

function Beneficios() {
  return (
    <section className="beneficios">
      <h2 className="beneficios-titulo">
        Para compartir, no importa el plan.
      </h2>

      <div className="beneficios-lista">
        {beneficios.map((beneficio) => (
          <article className="beneficio" key={beneficio.titulo}>
            <h3>{beneficio.titulo}</h3>

            <p>{beneficio.descripcion}</p>

            <img
              src={beneficio.imagen}
              alt={beneficio.titulo}
            />
          </article>
        ))}
      </div>
    </section>
  );
}

export default Beneficios;
