import { PropTypes } from 'prop-types'
import { useMenu } from '../hooks/useMenu'
import './EditMenuOptions.css'
import { useMouse } from '../hooks/useMouse'
import {
    TextAlignLeftIcon, TextAlignCenterIcon, TextAlignRightIcon,
    TextAlignJustifyIcon
} from './Icons.jsx'
import { useElements } from '../hooks/useElements.js'
import { FUENTES } from '../constants.js'

export function EditMenuOptionHtmltag({ htmltag }) {
    const { selectedTag, setSelectedTag } = useMenu()
    const { setDraggedElement } = useMouse()

    var selected = ""
    if (htmltag == selectedTag) { selected = " selected" }
    const optionClass = 'edit-option-text' + selected

    const handleClick = () => {
        setSelectedTag(htmltag)
    }

    const handlePointerDown = (event) => {
        document.body.style.userSelect = 'none'

        const elementoPulsado = event.target.cloneNode(true)
        elementoPulsado.className = elementoPulsado.className + " selected"

        elementoPulsado.style.position = 'absolute'
        elementoPulsado.style.zIndex = 1000

        setDraggedElement(elementoPulsado)
    }

    return (
        <div
            className={optionClass}
            onClick={handleClick}
            onPointerDown={handlePointerDown}
        >
            {htmltag}
        </div>
    )
}

EditMenuOptionHtmltag.propTypes = {
    htmltag: PropTypes.string.isRequired
}

export function EditElementOptions() {
    const { elementoEditando, elementos, setElementos } = useElements()

    var index = -1
    var elementoActual = undefined

    if (elementoEditando) {
        index = elementos.findIndex(
            (element) => element.id == elementoEditando
        )

        elementoActual = elementos[index]
    }

    const handleOnChangeColor = (event) => {
        if(elementoActual==undefined) return
        const newElementos = structuredClone(elementos)
        if (newElementos[index].style == undefined) newElementos[index].style = {}
        newElementos[index].style.color = event.target.value
        setElementos(newElementos)
    }

    var fontSize = '0'

    if (elementoActual && elementoActual.style && elementoActual.style.fontSize) {
        fontSize = elementoActual.style.fontSize
    }

    const numFontSize = parseFloat(fontSize)

    const handleOnChangeSize = (event) => {
        if(elementoActual==undefined) return
        const newElementos = structuredClone(elementos)
        var value = event.target.value
        if(value==''|| value==undefined || value<0) value = 0
        if (newElementos[index].style == undefined) newElementos[index].style = {}
        newElementos[index].style.fontSize = value + 'px'
        setElementos(newElementos)
    }

    var fontSelected = FUENTES[0]

    if (elementoActual && elementoActual.style && elementoActual.style.fontFamily) {
        fontSelected = elementoActual.style.fontFamily
    }

    const handleOnChangeFont= (event)=>{
        if(elementoActual==undefined) return
        const newElementos = structuredClone(elementos)
        if (newElementos[index].style == undefined) newElementos[index].style = {}
        newElementos[index].style.fontFamily = event.target.value
        setElementos(newElementos)
    }

    return (
        <>
            <div className='edit-option-font'>
                <select name='select-option-font' value={fontSelected}
                    onChange={handleOnChangeFont}
                >
                    {
                        FUENTES.map((fuente)=>{
                            return(
                                <option key={fuente} value={fuente}>
                                    {fuente}
                                </option>
                            )
                        })
                    }
                </select>
            </div>
            <div className='edit-option-size'>
                <input type='number' value={numFontSize}
                    onChange={handleOnChangeSize}
                />
            </div>
            <div className='edit-option-color'>
                <input
                    type='color'
                    value={
                        (elementoActual && elementoActual.style
                            && elementoActual.style.color
                        )
                            ? elementoActual.style.color
                            : '#000000'
                    }
                    onChange={handleOnChangeColor}
                />
            </div>
            <div className='edit-option-icon'><TextAlignLeftIcon /></div>
            <div className='edit-option-icon'><TextAlignCenterIcon /></div>
            <div className='edit-option-icon'><TextAlignRightIcon /></div>
            <div className='edit-option-icon'><TextAlignJustifyIcon /></div>
        </>
    )
}