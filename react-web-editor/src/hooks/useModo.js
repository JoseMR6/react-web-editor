import { useState } from "react"

export function useModo() {
    const [modo, setModo] = useState('edicion')

    const toggleModo = () => {
        if (modo == 'edicion') {
            setModo('visualizacion')
        } else {
            setModo('edicion')
        }
    }
    return {modo, toggleModo}
}