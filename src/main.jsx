import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header.jsx'
import Body from './components/Body.jsx'
import './style.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Body />
    

  </StrictMode>,
)
