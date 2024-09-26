import { createContext, useEffect, useState } from "react";
import { PropTypes } from 'prop-types'

export const ModoContext = createContext()

export function ModoProvider({ children }) {
    const [modo, setModo] = useState('edicion')

    const toggleModo = () => {
        if (modo == 'edicion') {
            setModo('visualizacion')
        } else {
            setModo('edicion')
        }
    }

    useEffect(() => {
        const eventType = 'keydown'

        const resetModo = (event) => {
            const { code } = event

            if (code == 'Escape' &&
                modo != 'edicion'
            ) {
                setModo('edicion')
            }

        }

        window.addEventListener(eventType, resetModo)

        return () => {
            window.removeEventListener(eventType, resetModo)
        }
    }, [modo])

    return (
        <ModoContext.Provider value={{
            modo,
            toggleModo
        }}>
            {children}
        </ModoContext.Provider>
    )
}

ModoProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ]).isRequired
}