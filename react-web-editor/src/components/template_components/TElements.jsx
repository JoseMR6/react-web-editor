import { PropTypes } from 'prop-types'
import { addElements } from '../../logic/elements.js'
import { HTML_TAG_TYPES, ELEMENT_TYPES } from '../../constants.js'
import { useElements } from '../../hooks/useElements.js'
import './TElements.css'
import { useMenu } from '../../hooks/useMenu.js'

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

export function Parrafo({id, text}) {
    return (
        <>
            <div id={id} className='element-container'>
                <p>{text}</p>
            </div>
        </>
    )
}

Parrafo.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export function AddElement({id}) {
    const {elementos, setElementos, contElements} = useElements()
    const {selectedTag} = useMenu()

    var elementType = undefined
    var tagText = "undefined de add element"

    if(selectedTag == HTML_TAG_TYPES.H1 ||
        selectedTag == HTML_TAG_TYPES.H2 ||
        selectedTag == HTML_TAG_TYPES.H3 ||
        selectedTag == HTML_TAG_TYPES.H4 ||
        selectedTag == HTML_TAG_TYPES.H5 ||
        selectedTag == HTML_TAG_TYPES.H6
    ){
        elementType = ELEMENT_TYPES.TITULO
        tagText = "Título "+selectedTag+" de add element"
    }else if(selectedTag == HTML_TAG_TYPES.P){
        elementType = ELEMENT_TYPES.PARRAFO
        tagText = "Párrafo "+selectedTag+" de add element"
    }

    const elementOptions = {
        text: tagText,
        type: selectedTag
    }

    const newIds = {
        1: "el" + contElements.current.toString(),
        2: "el" + (contElements.current+1).toString()
    }
    contElements.current += 2
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