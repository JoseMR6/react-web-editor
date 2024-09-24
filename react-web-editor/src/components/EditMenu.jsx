import {
    TextColorIcon, TextAlignLeftIcon, TextAlignCenterIcon, TextAlignRightIcon,
    TextAlignJustifyIcon
} from './Icons.jsx'
import './EditMenu.css'
import { EditMenuOptionHtmltag } from './EditMenuOptions.jsx'
import { HTML_TAG_TYPES } from '../constants.js'

export function EditMenu() {
    var cont = 0;
    const htmlTagArray = Object.values(HTML_TAG_TYPES)

    return (
        <div id='edit-menu-container'>
            {htmlTagArray.map(tag => {
                const id = "em" + cont.toString()
                cont++

                return (
                    <>
                        <EditMenuOptionHtmltag key={id} htmltag={tag} />
                    </>
                )
            })}
            
            <div className='menu-separator' />
            <div className='edit-option-text'>Arial</div>
            <div className='edit-option-text'>- 13 +</div>
            <div className='edit-option-icon'><TextColorIcon /></div>
            <div className='edit-option-icon'><TextAlignLeftIcon /></div>
            <div className='edit-option-icon'><TextAlignCenterIcon /></div>
            <div className='edit-option-icon'><TextAlignRightIcon /></div>
            <div className='edit-option-icon'><TextAlignJustifyIcon /></div>
        </div>
    )
}