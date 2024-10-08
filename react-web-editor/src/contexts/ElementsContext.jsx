import { createContext, useRef, useState } from "react";
import { ELEMENT_TYPES, HTML_TAG_TYPES } from "../constants/constants.js";
import { PropTypes } from 'prop-types'
import basicTemplate from '../../documents_data/basicTemplate.json'
import { GLOBAL_STYLE } from "../constants/globalStyle.js";

export const ElementsContext = createContext()

export function ElementsProvider({ children }) {
    const contElements = useRef(0)

    const [elementos, setElementos] = useState(() => {
        let documentoJson = []

        if (basicTemplate) {
            documentoJson = basicTemplate.elements

            documentoJson.forEach(element => {
                element.id = "el" + (contElements.current).toString()
                contElements.current += 1
            });

        } else {
            documentoJson = [
                {
                    id: "el" + (contElements.current + 0).toString(),
                    type: ELEMENT_TYPES.ADD_ELEMENT
                },
                {
                    id: "el" + (contElements.current + 1).toString(),
                    type: ELEMENT_TYPES.TITULO,
                    param: {
                        text: 'Titulo h1 mock',
                        type: HTML_TAG_TYPES.H1
                    }
                },
                {
                    id: "el" + (contElements.current + 2).toString(),
                    type: ELEMENT_TYPES.ADD_ELEMENT
                },
                {
                    id: "el" + (contElements.current + 3).toString(),
                    type: ELEMENT_TYPES.TITULO,
                    param: {
                        text: 'Titulo h2 mock',
                        type: HTML_TAG_TYPES.H2
                    }
                },
                {
                    id: "el" + (contElements.current + 4).toString(),
                    type: ELEMENT_TYPES.ADD_ELEMENT
                }
            ]

            contElements.current += 5
        }

        return documentoJson
    })
    const [elementoEditando, setElementoEditando] = useState(undefined)
    const [globalEstyles, setGlobalEstyles] = useState(()=>{
        if(basicTemplate.style) return basicTemplate.style
        else{
            return GLOBAL_STYLE
        }
    })

    return (
        <ElementsContext.Provider value={{
            elementos,
            setElementos,
            contElements,
            elementoEditando,
            setElementoEditando,
            globalEstyles, setGlobalEstyles
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