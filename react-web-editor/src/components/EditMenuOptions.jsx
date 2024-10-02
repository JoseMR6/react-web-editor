import { PropTypes } from 'prop-types'
import { useMenu } from '../hooks/useMenu'
import './EditMenuOptions.css'
import { useMouse } from '../hooks/useMouse'
import {
    TextAlignLeftIcon, TextAlignCenterIcon, TextAlignRightIcon,
    TextAlignJustifyIcon
} from './Icons.jsx'
import { useElements } from '../hooks/useElements.js'
import { ALIGN_TYPES, FUENTES, SELECTED_ELEMENT_TYPES, STYLE_REFERENCES } from '../constants/constants.js'

export function EditMenuOptionHtmltag({ htmltag }) {
    const { selectedTag, setSelectedTag } = useMenu()
    const { setDraggedElement } = useMouse()

    let selected = ""
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
    const { selectedTag, selectedElementType } = useMenu()

    const editProps = {
        color: '#000000',
        fontSize: '0',
        fontFamily: FUENTES[0],
        textAlign: ALIGN_TYPES.LEFT
    }

    const editPropsKeys = Object.keys(editProps)

    const globalStyleKey = STYLE_REFERENCES.GLOBAL
    const tagStyleKey = STYLE_REFERENCES.G_TAG+' '+selectedTag

    let index = -1
    let elementoActual = undefined

    editPropsKeys.forEach((editPropKey) => {
        if (globalEstyles[globalStyleKey][editPropKey]) {
            editProps[editPropKey] = globalEstyles[globalStyleKey][editPropKey]
        }
    })

    if (selectedElementType == SELECTED_ELEMENT_TYPES.GLOBAL_DOCUMENT) {
        elementoActual = { style: globalEstyles[globalStyleKey] }
    } else if (selectedElementType == SELECTED_ELEMENT_TYPES.SELECTED_ELEMENT
        && elementoEditando) {
        index = elementos.findIndex(
            (element) => element.id == elementoEditando
        )

        elementoActual = elementos[index]
    }else if(selectedElementType == SELECTED_ELEMENT_TYPES.GLOBAL_TAG &&
        selectedTag
    ){
        let tagStyle = {}
        if(globalEstyles[tagStyleKey]) tagStyle = globalEstyles[tagStyleKey]
        elementoActual = { style: tagStyle }
    }

    if (elementoActual && elementoActual.style) {
        editPropsKeys.forEach((editPropKey) => {
            if (elementoActual.style[editPropKey]) {
                editProps[editPropKey] = elementoActual.style[editPropKey]
            }
        })
    }

    const changeStyleOption = (option, value) => {
        if (elementoActual == undefined) return

        if (selectedElementType == SELECTED_ELEMENT_TYPES.GLOBAL_DOCUMENT) {
            const newGlobalEstyles = structuredClone(globalEstyles)
            if (newGlobalEstyles[globalStyleKey] == undefined) newGlobalEstyles[globalStyleKey] = {}
            newGlobalEstyles[globalStyleKey][option] = value
            setGlobalEstyles(newGlobalEstyles)
        } else if (selectedElementType == SELECTED_ELEMENT_TYPES.SELECTED_ELEMENT) {
            const newElementos = structuredClone(elementos)
            if (newElementos[index].style == undefined) newElementos[index].style = {}
            newElementos[index].style[option] = value
            setElementos(newElementos)
        }else if(selectedElementType == SELECTED_ELEMENT_TYPES.GLOBAL_TAG){
            const newGlobalEstyles = structuredClone(globalEstyles)
            if (newGlobalEstyles[tagStyleKey] == undefined) newGlobalEstyles[tagStyleKey] = {}
            newGlobalEstyles[tagStyleKey][option] = value
            setGlobalEstyles(newGlobalEstyles)
        }
    }

    const handleOnChangeColor = (event) => {
        changeStyleOption('color', event.target.value)
    }

    const handleOnChangeSize = (event) => {
        let value = event.target.value
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
                <select className='select-option-font' value={editProps.fontFamily}
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
                    <input type='number' value={parseFloat(editProps.fontSize)}
                        onChange={handleOnChangeSize}
                    />
                </div>
            }
            <div className='edit-option-color'>
                <input
                    type='color'
                    value={editProps.color}
                    onChange={handleOnChangeColor}
                />
            </div>
            <EditTextAlignOption
                value={editProps.textAlign}
                handleOnChangeAlign={handleOnChangeAlign}
            />
        </>
    )
}

export function EditTextAlignOption({ value,  handleOnChangeAlign}) {
    const seleted = ' selected'
    
    return (
        <>
            <div className=
                {
                    'edit-option-icon edit-align ' +
                    ((value == ALIGN_TYPES.LEFT) ? seleted : '')
                }
                onClick={() => { handleOnChangeAlign(ALIGN_TYPES.LEFT) }}
            >
                <TextAlignLeftIcon />
            </div>
            <div className=
                {
                    'edit-option-icon edit-align ' +
                    ((value == ALIGN_TYPES.CENTER) ? seleted : '')
                }
                onClick={() => { handleOnChangeAlign(ALIGN_TYPES.CENTER) }}
            >
                <TextAlignCenterIcon />
            </div>
            <div className=
                {
                    'edit-option-icon edit-align ' +
                    ((value == ALIGN_TYPES.RIGHT) ? seleted : '')
                }
                onClick={() => { handleOnChangeAlign(ALIGN_TYPES.RIGHT) }}
            >
                <TextAlignRightIcon />
            </div>
            <div className=
                {
                    'edit-option-icon edit-align ' +
                    ((value == ALIGN_TYPES.JUSTIFY) ? seleted : '')
                }
                onClick={() => { handleOnChangeAlign(ALIGN_TYPES.JUSTIFY) }}
            >
                <TextAlignJustifyIcon />
            </div>
        </>
    )
}

EditTextAlignOption.propTypes = {
    value: PropTypes.string.isRequired,
    handleOnChangeAlign: PropTypes.func.isRequired
}