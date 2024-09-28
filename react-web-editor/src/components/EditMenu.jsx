import './EditMenu.css'
import { EditMenuOptionHtmltag } from './EditMenuOptions.jsx'
import { HTML_TAG_TYPES } from '../constants.js'
import { EditElementOptions } from './EditMenuOptions.jsx'

export function EditMenu() {
    var cont = 0;
    const htmlTagArray = Object.values(HTML_TAG_TYPES)

    return (
        <div id='edit-menu-container'>
            {htmlTagArray.map(tag => {
                const id = "em" + cont.toString()
                cont++

                return (
                    <div key={id}>
                        <EditMenuOptionHtmltag  htmltag={tag} />
                    </div>
                )
            })}
            
            <div className='menu-separator' />
            <EditElementOptions/>
        </div>
    )
}