function Gasto({ gasto, seleccionado, onSeleccionar }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={seleccionado}
        onChange={onSeleccionar}
      />

      <h3>{gasto.nombre}</h3>
      <p>Precio: ${gasto.precio}</p>
    </div>
  )
}

export default Gasto