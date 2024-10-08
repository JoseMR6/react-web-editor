import { PropTypes } from 'prop-types'
import { useElements } from '../../hooks/useElements.js'
import './TElements.css'
import { useMenu } from '../../hooks/useMenu.js'
import { useState } from 'react'
import { ELEMENT_TYPES, SELECTED_ELEMENT_TYPES } from '../../constants/constants.js'
import { formatHtmlText } from '../../logic/text.js'
import { stylePropsToCssString } from '../../logic/elements.js'

export function Element({ id, type, param, style }) {
    const [seeEditOptions, setSeeEditOptions] = useState(false)
    const { removeElement, setElementoEditando} = useElements()
    const {setSelectedElementType} = useMenu()

    let component = <div>error</div>

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
                style={style}
            />
        )
    } else if (type == ELEMENT_TYPES.PARRAFO) {
        component = (
            <Parrafo
                id={id}
                text={param.text}
                style={style}
            />
        )
    }else if (type == ELEMENT_TYPES.SEPARADOR) {
        component = (
            <Separador
                id={id}
            />
        )
    } else {
        throw new Error('Elemento tiene un tipo no esperado')
    }

    return (
        <div
            onMouseEnter={() => { 
                setSeeEditOptions(true) 
            }}
            onMouseLeave={() => { setSeeEditOptions(false) }}
            onClick={()=>{
                if(type != ELEMENT_TYPES.ADD_ELEMENT){
                    setElementoEditando(id)
                    setSelectedElementType(SELECTED_ELEMENT_TYPES.SELECTED_ELEMENT)
                }
            }}
        >
            {type != ELEMENT_TYPES.ADD_ELEMENT &&
                <span className='delete-element'
                    style={{ visibility: !seeEditOptions && 'hidden' }}
                    onClick={() => removeElement({ idElement: id })}
                >-</span>
            }
            {component}
        </div>
    )
}

Element.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    param: PropTypes.object,
    style: PropTypes.object
}

export function Separador({id}){
    return(
        <div id={id} className='element-separator'/>
    )
}

Separador.propTypes = {
    id: PropTypes.string.isRequired
}

export function Titulo({ id, text, type, style }) {
    const [textValue, setTextValue] = useState(text)
    const [verInput, setVerImput] = useState(false)
    const handleOnChange = (event) => { setTextValue(event.target.value) }

    let htmlStyle = ''

    const styleObjectToString = (styleObject)=>{
        let output =' style="'

        output += stylePropsToCssString(styleObject)

        output+='"'

        return output
    }

    if(style != undefined){
        htmlStyle=styleObjectToString(style)
    }

    const textHtml = "<" + type + htmlStyle+">" + formatHtmlText(textValue) + "</" + type + ">"

    return (
        <>
            <div id={id} className={'element-container titulo-' + type}
                onMouseLeave={() => { setVerImput(false) }}
            >
                <input type='text' value={textValue} onChange={handleOnChange}
                    style={{ ...style, visibility: !verInput && 'hidden'}}
                />
                <div dangerouslySetInnerHTML={{ __html: textHtml }}
                    onClick={() => { setVerImput(true) }}
                />

            </div>
        </>
    )
}

Titulo.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    style: PropTypes.object
}

export function Parrafo({ id, text, style }) {
    const [textValue, setTextValue] = useState(text)
    const [verInput, setVerImput] = useState(false)
    const handleOnChange = (event) => { setTextValue(event.target.value) }

    const textParrafo = (text) => {
        var formatText = formatHtmlText(text)
        const replacedText = formatText.replaceAll('\n','<br/>')
        return replacedText
    } 

    var htmlStyle={}

    if(style != undefined){
        htmlStyle=style
    }
    
    return (
        <>
            <div id={id} className='element-container parrafo'
                onMouseLeave={() => { setVerImput(false) }}
            >
                <textarea
                    onChange={handleOnChange}
                    style={{...style, visibility: !verInput && 'hidden'}}
                    value={textValue}
                />
                <p onClick={() => { setVerImput(true)}}
                    dangerouslySetInnerHTML={{ __html: textParrafo(textValue) }}
                    style={htmlStyle}
                />
            </div>
        </>
    )
}

Parrafo.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    style: PropTypes.object
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