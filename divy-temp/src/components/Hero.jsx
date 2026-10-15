import './Hero.css'
import fotoCena from '../assets/images/cena.png'
import fotoValija from '../assets/images/valija.png'
import fotoBilletera from '../assets/images/billetera.png'
import { Link } from 'react-router'

function Hero(){
    return(
    <section className="hero" id="inicio">
        <div className="hero-contenido" >
            <h1>con <span>Divy</span> es muy facil dividir gastos :)</h1>
            <p>Registrá tus gastos, dividilos entre quienes participaron y sabé en segundos cuánto tiene que pagar o recibir cada persona.</p>

            <Link to="/demo" className="hero-boton">Probá Divy</Link>
        </div>

        <div className="hero-imagenes">
  <img className="foto-cena" src={fotoCena} alt="Comida compartida" />

  <div className="forma-verde-superior"></div>
  <div className="forma-circulo"></div>

  <div className="forma-verde-inferior"></div>
  <img className="foto-valija" src={fotoValija} alt="Valijas de viaje" />
  <img className="foto-billetera" src={fotoBilletera} alt="Billetera" />
</div>
    </section>
    )
}

export default Hero;