import { useState } from 'react'

function useSeleccionados() {
  const [seleccionados, setSeleccionados] = useState([])

  function cambiarSeleccion(id) {
    if (seleccionados.includes(id)) {
      setSeleccionados(
        seleccionados.filter(item => item !== id)
      )
    } else {
      setSeleccionados([...seleccionados, id])
    }
  }

  return { seleccionados, cambiarSeleccion }
}

export default useSeleccionados