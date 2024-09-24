import { PropTypes } from 'prop-types'
import { addElements } from '../../logic/elements.js'
import { HTML_TAG_TYPES, ELEMENT_TYPES } from '../../constants.js'
import { useId } from 'react'
import { useElements } from '../../hooks/useElements.js'
import './TElements.css'

export function Titulo({ id, text, type }) {
    var textHtml = "<" + type + ">" + text + "</" + type + ">"

    return (
        <>
            <div id={id} className='element-container'
                dangerouslySetInnerHTML={{ __html: textHtml }}
            />
        </>
    )
}

Titulo.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

export function AddElement({id}) {
    const {elementos, setElementos} = useElements()

    const elementType = ELEMENT_TYPES.TITULO
    const elementOptions = {
        text: "Titulo de add element",
        type: HTML_TAG_TYPES.H3
    }
    const newIds = {
        1: useId(),
        2: useId()
    }
    const idElement = id

    return (
        <>
            <div id={idElement} className='add-element'>
                <span onClick={() =>
                    addElements({ idElement, elementType, elementOptions, 
                        newIds, elementos, setElementos 
                    })}
                >
                    +
                </span>
            </div>
        </>
    )
}

AddElement.propTypes = {
    id: PropTypes.string.isRequired
}