import { PropTypes } from 'prop-types'
import { useMenu } from '../hooks/useMenu'
import './EditMenuOptions.css'
import { useMouse } from '../hooks/useMouse'

export function EditMenuOptionHtmltag({htmltag}) {
    const {selectedTag, setSelectedTag} = useMenu()
    const {setDraggedElement} = useMouse()
    
    var selected = ""
    if(htmltag == selectedTag){selected=" selected"}
    const optionClass = 'edit-option-text'+selected

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