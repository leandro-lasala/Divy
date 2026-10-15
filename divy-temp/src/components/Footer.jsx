import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <a href="#top" className="footer-logo" aria-label="Divy, inicio">
          <span className="logo-symbol">●</span>ivy
        </a>
        <p className="footer-tagline">Más momentos juntos, menos cuentas.</p>
        <div className="footer-rule"></div>
        <div className="footer-content">
          <nav className="footer-nav" aria-label="Navegación del pie de página">
            <h2>Navegación</h2>
            <a href="#top">Inicio</a>
            <a href="#beneficios">Beneficios</a>
            <a href="#usos">Usos</a>
            <a href="#como-funciona">Cómo funciona</a>
            <a href="#descargar">Descargar</a>
          </nav>
          <div className="footer-message">
            <p>Compartir gastos nunca fue tan fácil.</p>
            <p>Organizá, dividí y listo.</p>
          </div>
        </div>

        <div className="footer-rule bottom-rule"></div>
        <div className="footer-bottom">
          <span>© 2026 Divy</span>
          <span>Compartir es fácil. Dividir también.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;