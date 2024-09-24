import { createContext, useState } from "react";
import { useId } from "react";
import { ELEMENT_TYPES, HTML_TAG_TYPES } from "../constants.js";
import { PropTypes } from 'prop-types'

export const ElementsContext = createContext()

export function ElementsProvider({ children }) {
    const [elementos, setElementos] = useState(
        [
            {
                id: useId(),
                type: ELEMENT_TYPES.ADD_ELEMENT
            },
            {
                id: useId(),
                type: ELEMENT_TYPES.TITULO,
                param: {
                    text: 'Titulo h1 mock',
                    type: HTML_TAG_TYPES.H1
                }
            },
            {
                id: useId(),
                type: ELEMENT_TYPES.ADD_ELEMENT
            },
            {
                id: useId(),
                type: ELEMENT_TYPES.TITULO,
                param: {
                    text: 'Titulo h2 mock',
                    type: HTML_TAG_TYPES.H2
                }
            },
            {
                id: useId(),
                type: ELEMENT_TYPES.ADD_ELEMENT
            }
        ]
    )

    return (
        <ElementsContext.Provider value={{
            elementos,
            setElementos
        }}>
            {children}
        </ElementsContext.Provider>
    )
}

ElementsProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ]).isRequired
}