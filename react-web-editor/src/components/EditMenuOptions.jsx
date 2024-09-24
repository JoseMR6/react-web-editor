import { PropTypes } from 'prop-types'
import { useMenu } from '../hooks/useMenu'
import './EditMenuOptions.css'

export function EditMenuOptionHtmltag({htmltag}) {
    const {selectedTag, setSelectedTag} = useMenu()
    
    var selected = ""
    if(htmltag == selectedTag){selected=" selected"}
    const optionClass = 'edit-option-text'+selected

    const handleClick = () => {
        setSelectedTag(htmltag)
    }
    
    return (
        <div
            className={optionClass}
            onClick={handleClick}
        >
            {htmltag}
        </div>
    )
}

EditMenuOptionHtmltag.propTypes = {
    htmltag: PropTypes.string.isRequired
}