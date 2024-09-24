import { ELEMENT_TYPES } from "../constants.js"

export function addElements({ idElement, elementType, elementOptions, newIds, elementos, setElementos }) {

    const posicionAddElement = elementos.findIndex(
        (element) => element.id == idElement
    )

    if (posicionAddElement < 0) {
        throw new Error('undefined element cant be added')
    }

    const addButton = {
        id: newIds[1],
        type: ELEMENT_TYPES.ADD_ELEMENT
    }

    var newElement = {id: newIds[2]}

    if (elementType == ELEMENT_TYPES.TITULO ||
        elementType == ELEMENT_TYPES.PARRAFO
    ) {
        newElement = {
            id: newIds[2],
            type: elementType,
            param: {
                text: elementOptions.text,
                type: elementOptions.type
            }
        }
    } else {
        throw new Error('undefined element cant be added')
    }

    const newElementos = structuredClone(elementos)
    newElementos.splice(posicionAddElement, 0,
        addButton,
        newElement
    )

    setElementos(newElementos)

}