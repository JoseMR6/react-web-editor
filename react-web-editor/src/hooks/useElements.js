import { useContext } from "react";
import { ElementsContext } from "../contexts/ElementsContext.jsx";
import { ELEMENT_TYPES, HTML_TAG_TYPES } from "../constants.js";

export function useElements() {
    const context = useContext(ElementsContext)


    if (context == undefined) {
        throw new Error('useElements must be used whithin a ElementsProvider')
    }

    const { elementos, setElementos, contElements, elementoEditando,setElementoEditando
    } = context

    const addElements = ({idElement, addTag}) => {
        var elementType = undefined
        var tagText = "undefined de add element"

        if (addTag == HTML_TAG_TYPES.H1 ||
            addTag == HTML_TAG_TYPES.H2 ||
            addTag == HTML_TAG_TYPES.H3 ||
            addTag == HTML_TAG_TYPES.H4 ||
            addTag == HTML_TAG_TYPES.H5 ||
            addTag == HTML_TAG_TYPES.H6
        ) {
            elementType = ELEMENT_TYPES.TITULO
            tagText = "Título " + addTag + " de add element"
        } else if (addTag == HTML_TAG_TYPES.P) {
            elementType = ELEMENT_TYPES.PARRAFO
            tagText = "Párrafo " + addTag + " de add element"
        }

        const elementOptions = {
            text: tagText,
            type: addTag
        }

        const newIds = {
            1: "el" + contElements.current.toString(),
            2: "el" + (contElements.current + 1).toString()
        }
        contElements.current += 2

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

        var newElement = { id: newIds[2] }

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

    const removeElement = ({idElement})=> {
        const posicionElement = elementos.findIndex(
            (element) => element.id == idElement
        )

        if (posicionElement < 0) {
            throw new Error('undefined element cant be removed')
        }

        const newElementos = structuredClone(elementos)
        newElementos.splice(posicionElement, 2)

        setElementos(newElementos)
    }

    return { elementos, setElementos, contElements, elementoEditando,setElementoEditando, 
        addElements, removeElement 
    }
}