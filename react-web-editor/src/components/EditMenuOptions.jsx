import { PropTypes } from 'prop-types'
import { useMenu } from '../hooks/useMenu'
import './EditMenuOptions.css'
import { useMouse } from '../hooks/useMouse'
import {
    TextAlignLeftIcon, TextAlignCenterIcon, TextAlignRightIcon,
    TextAlignJustifyIcon
} from './Icons.jsx'
import { useElements } from '../hooks/useElements.js'
import { ALIGN_TYPES, FUENTES, SELECTED_ELEMENT_TYPES } from '../constants.js'

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
    const { elementoEditando, elementos, setElementos, globalEstyles,
        setGlobalEstyles 
    } = useElements()
    const { selectedElementType } = useMenu()

    var index = -1
    var elementoActual = undefined

    var color = '#000000'
    var fontSize = '0'
    var fontSelected = FUENTES[0]
    var align = ALIGN_TYPES.LEFT

    if (selectedElementType == SELECTED_ELEMENT_TYPES.GLOBAL_DOCUMENT) {
        elementoActual = { style: globalEstyles.general }
    }else{
        if (globalEstyles.general.color) {
            color = globalEstyles.general.color
        }
        if (globalEstyles.general.fontSize) {
            fontSize = globalEstyles.general.fontSize
        }
        if (globalEstyles.general.fontFamily) {
            fontSelected = globalEstyles.general.fontFamily
        }
        if (globalEstyles.general.textAlign) {
            align = globalEstyles.general.textAlign
        }
    }


    if (selectedElementType == SELECTED_ELEMENT_TYPES.SELECTED_ELEMENT
        && elementoEditando) {
        index = elementos.findIndex(
            (element) => element.id == elementoEditando
        )

        elementoActual = elementos[index]
    }

    if (elementoActual && elementoActual.style) {
        if (elementoActual.style.color) {
            color = elementoActual.style.color
        }
        if (elementoActual.style.fontSize) {
            fontSize = elementoActual.style.fontSize
        }
        if (elementoActual.style.fontFamily) {
            fontSelected = elementoActual.style.fontFamily
        }
        if (elementoActual.style.textAlign) {
            align = elementoActual.style.textAlign
        }
    }

    var numFontSize = parseFloat(fontSize)
    const seleted = ' selected'

    const changeStyleOption = (option, value) => {
        if (elementoActual == undefined) return

        if (selectedElementType == SELECTED_ELEMENT_TYPES.GLOBAL_DOCUMENT) {
            const newGlobalEstyles = structuredClone(globalEstyles)
            if (newGlobalEstyles.general == undefined) newGlobalEstyles.general = {}
            newGlobalEstyles.general[option] = value
            setGlobalEstyles(newGlobalEstyles)
        } else if (selectedElementType == SELECTED_ELEMENT_TYPES.SELECTED_ELEMENT) {
            const newElementos = structuredClone(elementos)
            if (newElementos[index].style == undefined) newElementos[index].style = {}
            newElementos[index].style[option] = value
            setElementos(newElementos)
        }
    }

    const handleOnChangeColor = (event) => {
        changeStyleOption('color', event.target.value)
    }

    const handleOnChangeSize = (event) => {
        var value = event.target.value
        if (value == '' || value == undefined || value < 0) value = 0

        changeStyleOption('fontSize', value + 'px')
    }

    const handleOnChangeFont = (event) => {
        changeStyleOption('fontFamily', event.target.value)
    }

    const handleOnChangeAlign = (value) => {
        changeStyleOption('textAlign', value)
    }

    return (
        <>
            <div className='edit-option-font'>
                <select className='select-option-font' value={fontSelected}
                    onChange={handleOnChangeFont}
                >
                    {
                        FUENTES.map((fuente) => {
                            return (
                                <option key={fuente} value={fuente}>
                                    {fuente}
                                </option>
                            )
                        })
                    }
                </select>
            </div>
            {selectedElementType != SELECTED_ELEMENT_TYPES.GLOBAL_DOCUMENT &&
                <div className='edit-option-size'>
                    <input type='number' value={numFontSize}
                        onChange={handleOnChangeSize}
                    />
                </div>
            }
            <div className='edit-option-color'>
                <input
                    type='color'
                    value={color}
                    onChange={handleOnChangeColor}
                />
            </div>
            <div className=
                {
                    'edit-option-icon edit-align ' +
                    ((align == ALIGN_TYPES.LEFT) ? seleted : '')
                }
                onClick={() => { handleOnChangeAlign(ALIGN_TYPES.LEFT) }}
            >
                <TextAlignLeftIcon />
            </div>
            <div className=
                {
                    'edit-option-icon edit-align ' +
                    ((align == ALIGN_TYPES.CENTER) ? seleted : '')
                }
                onClick={() => { handleOnChangeAlign(ALIGN_TYPES.CENTER) }}
            >
                <TextAlignCenterIcon />
            </div>
            <div className=
                {
                    'edit-option-icon edit-align ' +
                    ((align == ALIGN_TYPES.RIGHT) ? seleted : '')
                }
                onClick={() => { handleOnChangeAlign(ALIGN_TYPES.RIGHT) }}
            >
                <TextAlignRightIcon />
            </div>
            <div className=
                {
                    'edit-option-icon edit-align ' +
                    ((align == ALIGN_TYPES.JUSTIFY) ? seleted : '')
                }
                onClick={() => { handleOnChangeAlign(ALIGN_TYPES.JUSTIFY) }}
            >
                <TextAlignJustifyIcon />
            </div>
        </>
    )
}