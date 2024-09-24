//import { MenuProvider } from '../contexts/MenuContext.jsx'
import './Document.css'
import { EditMenu } from './EditMenu.jsx'
import { TIndex } from './template_components/TIndex.jsx'

export function Document() {
    return (
        <>
            <EditMenu />
            <div id='document-edit-container'>
                <TIndex />
            </div>
        </>
    )
}