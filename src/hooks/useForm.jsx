
import { useState } from "react"

export const useForm = ( estadoInicial = {} ) => {
    const [values, setValues] = useState(estadoInicial)

    const handleInputChange = (e) => {
        const { type, name, checked, value } = e.target
        setValues({
          ...values,
          [name]: type === 'checkbox' ? checked : value
        })
      }

    return [ values, setValues, handleInputChange ]

}