import { WebToolIcon } from './Icons.jsx'
import './Header.css'

export function Header() {
    return (
        <>
            <header>
                <div id='web-tool-logo'><WebToolIcon/></div>
                <div id='header-principal-container'>
                    <div id='document-title-container'>
                        <span>Documento sin título</span>
                    </div>
                    <div id='document-options-container'>
                        <div className='document-option'>Archivo</div>
                        <div className='document-option'>Editar</div>
                        <div className='document-option'>Ver</div>
                    </div>
                </div>

            </header>

        </>
    )
}