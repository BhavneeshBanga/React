import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'




createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App />
  // </StrictMode>,
  //strict mode development mai aapke code ko do baar run karta hia , first check akrne k liye, second real mai
)
