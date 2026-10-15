import './Gasto.css'

function Gasto({ gasto, seleccionado, onSeleccionar }) {
  return (
    <label className="gasto-item">
      <input
        type="checkbox"
        checked={seleccionado}
        onChange={onSeleccionar}
      />

      <span className="gasto-nombre">
        {gasto.nombre}
      </span>

      <span className="gasto-precio">
        ${gasto.precio.toLocaleString('es-AR')}
      </span>
    </label>
  )
}

export default Gasto