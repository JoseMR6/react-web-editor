import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ModoProvider } from './contexts/ModoContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ModoProvider>
    <App />
  </ModoProvider>
  </StrictMode>
)
