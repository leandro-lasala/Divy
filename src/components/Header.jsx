import isotipo from '../assets/images/isotipo.svg';
import './Header.css';
import { Link } from 'react-router'


function Header() {
    return (
        <header className="header">
            <a href="#inicio" className="header-logo">
                <img src={isotipo} alt="Isotipo de la aplicación"  />
            </a>

            <nav className="nav">
                <a href="#inicio">Inicio</a>
                <a href="#beneficios">Beneficios</a>
                <Link to="/demo">Probá Divy</Link>
                <a href="#como-funciona">Cómo funciona</a>
                <a href="#descargar">Descargar</a>
            </nav>
        </header>

    );
}


export default Header;
