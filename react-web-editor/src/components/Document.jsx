import './Document.css'
import {
    TextColorIcon, TextAlignLeftIcon, TextAlignCenterIcon, TextAlignRightIcon, 
    TextAlignJustifyIcon 
} from './Icons.jsx'
import { TIndex } from './template_components/TIndex.jsx'

export function Document() {
    return (
        <>
            <div id='edit-menu-container'>
                <div className='edit-option-text'>h1</div>
                <div className='edit-option-text'>h2</div>
                <div className='edit-option-text'>h3</div>
                <div className='edit-option-text'>h4</div>
                <div className='edit-option-text'>h5</div>
                <div className='edit-option-text'>h6</div>
                <div className='edit-option-text'>p</div>
                <div className='edit-option-text'>ul</div>
                <div className='edit-option-text'>ol</div>
                <div className='edit-option-text'>form</div>
                <div className='menu-separator'/>
                <div className='edit-option-text'>Arial</div>
                <div className='edit-option-text'>- 13 +</div>
                <div className='edit-option-icon'><TextColorIcon/></div>
                <div className='edit-option-icon'><TextAlignLeftIcon/></div>
                <div className='edit-option-icon'><TextAlignCenterIcon/></div>
                <div className='edit-option-icon'><TextAlignRightIcon/></div>
                <div className='edit-option-icon'><TextAlignJustifyIcon/></div>
            </div>

            <div id='document-edit-container'>
                <TIndex/>
            </div>

        </>
    )
}