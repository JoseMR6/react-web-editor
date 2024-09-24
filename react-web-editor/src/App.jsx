import { Header } from './components/Header.jsx'
import { Document } from './components/Document.jsx'
import './App.css'
import { TIndex } from './components/template_components/TIndex.jsx'
import { useModo } from './hooks/useModo.js'
import { ElementsProvider } from './contexts/ElementsContext.jsx'
import { MenuProvider } from './contexts/MenuContext.jsx'
//import { toggleFullscreen, openWindowScreen } from './logic/window.js'

function App() {
  const {modo/*, toggleModo*/} = useModo()

  return (
    /*
    <button onClick={toggleFullscreen}>Pantalla Completa</button>
    <button onClick={openWindowScreen}>Ventana nueva</button>
    <button onClick={toggleModo}>Cambiar modo</button>
    */

    <ElementsProvider>
    <MenuProvider>
      {modo == 'edicion' && <div id='general-container'>
        <Header />
        <Document />
      </div>}
      {modo == 'visualizacion' && <TIndex />}
      </MenuProvider>
    </ElementsProvider>

  )
}

export default App
