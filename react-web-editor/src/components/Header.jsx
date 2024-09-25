import { WebToolIcon } from './Icons.jsx'
import './Header.css'
import { useEffect, useState } from 'react'
import { openWindowScreen, toggleFullscreen } from '../logic/window.js'
import { PropTypes } from 'prop-types'

export function Header({ toggleModo }) {
    const [depVer, setDepVer] = useState(false)

    useEffect(() => {
        const resetOptionsMenu = () => {
            setDepVer(false)
        }

        const nombreEvento = 'pointerdown'
        
        window.addEventListener(nombreEvento, resetOptionsMenu)

        return () => {
            window.removeEventListener(nombreEvento, resetOptionsMenu)
        }

    }, [depVer])

    return (
        <>
            <header>
                <div id='web-tool-logo'><WebToolIcon /></div>
                <div id='header-principal-container'>
                    <div id='document-title-container'>
                        <span>Documento sin título</span>
                    </div>
                    <div id='document-options-container'>
                        <div className='document-option'><span>Archivo</span></div>
                        <div className='document-option'><span>Editar</span></div>
                        <div className={'document-option'}>
                            <span
                                onClick={() => { setDepVer(!depVer) }}
                                className={depVer ? 'deployed' : ''}
                            >Ver</span>
                            <ul style={{ visibility: !depVer && 'hidden' }}>
                                <li onMouseDown={toggleFullscreen}>Pantalla Completa</li>
                                <li onMouseDown={openWindowScreen}>Ventana nueva</li>
                                <li onMouseDown={toggleModo}>Modo Visualizacion</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </header>

        </>
    )
}

Header.propTypes = {
    toggleModo: PropTypes.func.isRequired
}