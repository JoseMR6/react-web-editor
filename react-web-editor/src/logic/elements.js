import { ELEMENT_TYPES } from "../constants.js"

export function addElements({ idElement, elementType, elementOptions, newIds, elementos, setElementos }) {

    if (elementType == ELEMENT_TYPES.TITULO) {
        
        const posicionAddElement = elementos.findIndex(
            (element) => element.id == idElement
        )

        const newElementos = structuredClone(elementos)
        newElementos.splice(posicionAddElement, 0, 
            {
                id: newIds[1],
                type: ELEMENT_TYPES.ADD_ELEMENT
            },
            {
                id: newIds[2],
                type: ELEMENT_TYPES.TITULO,
                param: {
                    text: elementOptions.text,
                    type: elementOptions.type
                }
            }
        )

        setElementos(newElementos)
    }

}