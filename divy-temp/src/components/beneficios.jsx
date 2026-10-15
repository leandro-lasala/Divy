
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
      <div className="beneficios-contenedor">
        <h2 className="beneficios-titulo">
          Para compartir, no importa el plan.
        </h2>

        <p className="beneficios-subtitulo">
          Hay muchas formas de compartir. Divy te ayuda a organizar
          los gastos para que disfrutes de cada momento.
        </p>

        <div className="beneficios-grid">
          {beneficios.map((beneficio) => (
            <article
              className="beneficio-card"
              key={beneficio.titulo}
            >
              <div className="beneficio-imagen-contenedor">
                <img
                  className="beneficio-imagen"
                  src={beneficio.imagen}
                  alt={beneficio.titulo}
                />
              </div>

              <h3 className="beneficio-titulo">
                {beneficio.titulo}
              </h3>

              <p className="beneficio-descripcion">
                {beneficio.descripcion}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Beneficios;
