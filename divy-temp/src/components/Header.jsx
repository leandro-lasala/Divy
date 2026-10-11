import isotipo from '../assets/images/isotipo.svg';
import './Header.css';


function Header() {
    return (
        <header className="header">
            <a href="#inicio" className="header-logo">
                <img src={isotipo} alt="Isotipo de la aplicación"  />
            </a>

            <nav className="nav">
                <a href="#inicio">Inicio</a>
                <a href="#beneficios">Beneficios</a>
                <a href="#usos">Usos</a>
                <a href="#como-funciona">Cómo funciona</a>
                <a href="#descargar">Descargar</a>
            </nav>
        </header>

        

    );
}


export default Header;
