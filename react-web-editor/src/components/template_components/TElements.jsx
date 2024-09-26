import { PropTypes } from 'prop-types'
import { useElements } from '../../hooks/useElements.js'
import './TElements.css'
import { useMenu } from '../../hooks/useMenu.js'
import { useState } from 'react'
import { ELEMENT_TYPES } from '../../constants.js'

export function Element({ id, type, param }) {
    const [seeEditOptions, setSeeEditOptions] = useState(false)
    const {removeElement} = useElements()
    var component = <div>error</div>

    if (type == ELEMENT_TYPES.ADD_ELEMENT) {
        component = (
            <AddElement
                id={id}
            />
        )
    } else if (type == ELEMENT_TYPES.TITULO) {
        component = (
            <Titulo
                id={id}
                text={param.text}
                type={param.type}
            />
        )
    } else if (type == ELEMENT_TYPES.PARRAFO) {
        component = (
            <Parrafo
                id={id}
                text={param.text}
            />
        )
    } else {
        throw new Error('Elemento tiene un tipo no esperado')
    }

    return (
        <div
            onMouseEnter={() => { setSeeEditOptions(true) }}
            onMouseLeave={() => { setSeeEditOptions(false) }}
        >
            {type != ELEMENT_TYPES.ADD_ELEMENT &&
                <span className='delete-element'
                    style={{ visibility: !seeEditOptions && 'hidden' }}
                    onClick={()=>removeElement({idElement:id})}
                >-</span>
            }
            {component}
        </div>
    )
}

Element.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    param: PropTypes.object
}

export function Titulo({ id, text, type }) {
    var textHtml = "<" + type + ">" + text + "</" + type + ">"

    return (
        <>
            <div id={id} className='element-container'>
                <div dangerouslySetInnerHTML={{ __html: textHtml }} />
            </div>
        </>
    )
}

Titulo.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

export function Parrafo({ id, text }) {
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

export function AddElement({ id }) {
    const { addElements } = useElements()
    const { selectedTag } = useMenu()

    const idElement = id
    const addTag = selectedTag

    return (
        <>
            <div id={id} className='add-element'>
                <span
                    className='add-element-button'
                    onClick={() =>
                        addElements({ idElement, addTag })
                    }
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