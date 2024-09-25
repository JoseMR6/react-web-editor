import { Header } from './components/Header.jsx'
import { Document } from './components/Document.jsx'
import './App.css'
import { TIndex } from './components/template_components/TIndex.jsx'
import { useModo } from './hooks/useModo.js'
import { ElementsProvider } from './contexts/ElementsContext.jsx'
import { MenuProvider } from './contexts/MenuContext.jsx'

function App() {
  const {modo, toggleModo} = useModo()

  return (
    <ElementsProvider>
    <MenuProvider>
      {modo == 'edicion' && <div id='general-container'>
        <Header toggleModo={toggleModo}/>
        <Document />
      </div>}
      {modo == 'visualizacion' && <TIndex />}
      </MenuProvider>
    </ElementsProvider>
  )
}

export default App
