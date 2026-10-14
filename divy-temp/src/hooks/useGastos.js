import { useState, useEffect } from 'react'

function useGastos() {
  const [gastos, setGastos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('/gastos.json')
      .then(respuesta => {
        if (!respuesta.ok) {
          throw new Error('No se pudieron cargar los gastos')
        }

        return respuesta.json()
      })
      .then(datos => {
        setGastos(datos)
      })
      .catch(() => {
        setError('No se pudieron cargar los gastos')
      })
      .finally(() => {
        setCargando(false)
      })
  }, [])

  return { gastos, cargando, error }
}

export default useGastos