import './ComoFunciona.css';
import logo from '../assets/images/Logo.svg';

function ComoFunciona() {
  return (
    <>
      <section className="como-funciona" id="como-funciona">
        <h2 className="como-titulo">
          Así de simple funciona <span className="como-logo-texto">divy</span>
        </h2>

        <div className="como-tarjetas">
          <article className="como-tarjeta tarjeta-verde">
            <h3>Creá tu grupo</h3>
            <p>Elegí el nombre y sumá a tus amigos</p>
            <span className="tarjeta-ejemplo">Cena de Viernes</span>
          </article>

          <article className="como-tarjeta tarjeta-negra">
            <h3>Anotá tus gastos</h3>
            <p>Cargá cuánto gastaste</p>
            <span className="tarjeta-ejemplo">Fernét y hielo</span>
          </article>

          <article className="como-tarjeta tarjeta-azul">
            <h3>Mirá quién le debe a quién en tiempo real y marcá como saldado</h3>
            <div className="tarjeta-checks" aria-hidden="true">
              <span className="check-vacio"></span>
              <span className="check-listo">✓</span>
            </div>
          </article>
        </div>
      </section>

      <section className="descargar-divy" id="descargar">
        <div className="descargar-contenido">
          <h2>Escaneá, <span>descargá</span> y empezá a <span>dividir</span> sin vueltas</h2>
          <p>
            Escaneá el código QR con la cámara de tu celu o elegí tu tienda para
            descargar Divy gratis y empezar a dividir gastos en segundos.
          </p>
          <a className="descargar-boton" href="#descargar">Descargá App</a>
        </div>

        <div className="descargar-qr" aria-label="Código QR ilustrativo">
          <div className="qr-cuadricula">
            <span className="qr-esquina qr-arriba-izq"></span>
            <span className="qr-esquina qr-arriba-der"></span>
            <span className="qr-esquina qr-abajo-izq"></span>
            <span className="qr-puntos"></span>
          </div>
        </div>

        <div className="ticket-divy" aria-label="Ejemplo de ticket de gastos">
          <img src={logo} alt="Divy" className="ticket-logo" />
          <p className="ticket-subtitulo">COMPARTIR ES FÁCIL</p>
          <div className="ticket-linea">Grupo: Asado del finde</div>
          <div className="ticket-linea">18/10/26 · 21:30 hs</div>
          <div className="ticket-linea">Participantes: 3</div>
          <div className="ticket-separador"></div>
          <div className="ticket-fila"><span>GASTO / CONCEPTO</span><span>PRECIO</span></div>
          <div className="ticket-fila"><span>Carne & chorizo</span><span>$28.500</span></div>
          <div className="ticket-fila"><span>Bebidas & hielo</span><span>$8.200</span></div>
          <div className="ticket-fila"><span>Ensalada & pan</span><span>$4.300</span></div>
          <div className="ticket-separador"></div>
          <div className="ticket-fila ticket-total"><span>TOTAL GASTOS</span><span>$41.000</span></div>
          <div className="ticket-separador"></div>
          <p className="ticket-mensaje">¡MÁS MOMENTOS, MENOS CUENTAS!</p>
          <div className="ticket-codigo">▥ ▥ ▥ ▥ ▥ ▥ ▥ ▥</div>
          <p className="ticket-web">divy.app</p>
        </div>
      </section>

      <footer className="footer-divy">
        <div className="footer-contenedor">
          <div className="footer-superior">
            <div className="footer-marca">
              <img src={logo} alt="Divy" />
              <p>Más momentos juntos, menos cuentas.</p>
            </div>
          </div>

          <div className="footer-centro">
            <nav className="footer-nav" aria-label="Navegación del pie de página">
              <h3>Navegación</h3>
              <a href="#inicio">Inicio</a>
              <a href="#beneficios">Beneficios</a>
              <a href="#como-funciona">Usos</a>
              <a href="#como-funciona">Cómo funciona</a>
              <a href="#descargar">Descargar</a>
            </nav>
            <div className="footer-frase">
              <p>Compartir gastos nunca fue tan fácil.</p>
              <p>Organizá, dividí y listo.</p>
            </div>
          </div>

          <div className="footer-inferior">
            <span>© 2026 Divy</span>
            <span>Compartir es fácil. Dividir también.</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default ComoFunciona;
