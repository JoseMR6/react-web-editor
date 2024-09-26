import { WebToolIcon } from './Icons.jsx'
import './Header.css'
import { useEffect, useState } from 'react'
import { ArchivoOption, EditarOption, VerOption } from './DocumentMenuOptions.jsx'

export function Header() {
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
                        <ArchivoOption/>
                        <EditarOption/>
                        <VerOption depVer={depVer} setDepVer={setDepVer}/>
                    </div>
                </div>

            </header>

        </>
    )
}