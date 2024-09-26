import { useModo } from '../hooks/useModo.js'
import { openWindowScreen, toggleFullscreen } from '../logic/window.js'
import { PropTypes } from 'prop-types'
import './DocumentMenuOptions.css'

export function VerOption({depVer,setDepVer}) {
    const {toggleModo} = useModo()
    
    return (
        <>
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
        </>
    )
}

VerOption.propTypes = {
    depVer: PropTypes.bool.isRequired,
    setDepVer: PropTypes.func.isRequired
}

export function ArchivoOption(){
    return(
        <>
            <div className='document-option'><span>Archivo</span></div>
        </>
    )
}

export function EditarOption(){
    return(
        <>
            <div className='document-option'><span>Archivo</span></div>
        </>
    )
}