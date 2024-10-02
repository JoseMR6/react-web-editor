import './EditMenu.css'
import { EditMenuOptionHtmltag } from './EditMenuOptions.jsx'
import { HTML_TAG_TYPES, SELECTED_ELEMENT_TYPES } from '../constants/constants.js'
import { EditElementOptions } from './EditMenuOptions.jsx'
import { useMenu } from '../hooks/useMenu.js'
import { useElements } from '../hooks/useElements.js'

export function EditMenu() {
    const { selectedElementType, setSelectedElementType } = useMenu()
    const { elementoEditando } = useElements()

    const handleChangeSelectedElement = (event) => {
        const value = event.target.value
        if (value == SELECTED_ELEMENT_TYPES.SELECTED_ELEMENT &&
            elementoEditando == undefined) return
        setSelectedElementType(value)
    }

    let cont = 0;
    const htmlTagArray = Object.values(HTML_TAG_TYPES)

    return (
        <div id='edit-menu-container'>
            {htmlTagArray.map(tag => {
                const id = "em" + cont.toString()
                cont++

                return (
                    <div key={id}>
                        <EditMenuOptionHtmltag htmltag={tag} />
                    </div>
                )
            })}

            <div className='menu-separator' />
            <select className='edit-option-element'
                value={selectedElementType}
                onChange={handleChangeSelectedElement}
            >
                <option value={SELECTED_ELEMENT_TYPES.GLOBAL_DOCUMENT}>
                    {SELECTED_ELEMENT_TYPES.GLOBAL_DOCUMENT}
                </option>
                <option value={SELECTED_ELEMENT_TYPES.GLOBAL_TAG}>
                    {SELECTED_ELEMENT_TYPES.GLOBAL_TAG}
                </option>
                <option value={SELECTED_ELEMENT_TYPES.SELECTED_ELEMENT}>
                    {SELECTED_ELEMENT_TYPES.SELECTED_ELEMENT}
                </option>
            </select>
            <div className='menu-separator' />
            <EditElementOptions />
        </div>
    )
}