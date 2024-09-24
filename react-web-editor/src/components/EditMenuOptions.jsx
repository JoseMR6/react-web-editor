import { PropTypes } from 'prop-types'
import { useMenu } from '../hooks/useMenu'

export function EditMenuOptionHtmltag({htmltag}) {
    const {selectedTag} = useMenu()
    
    var selected = ""
    if(htmltag == selectedTag){selected=" selected"}
    const optionClass = 'edit-option-text'+selected
    
    return (
        <div
            className={optionClass}
        >
            {htmltag}
        </div>
    )
}

EditMenuOptionHtmltag.propTypes = {
    htmltag: PropTypes.string.isRequired
}