import { PropTypes } from 'prop-types'
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
                        addElements({idElement, addTag})
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