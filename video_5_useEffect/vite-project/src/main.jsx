// https://www.notion.so/Lecture05-useEffect-Hook-2bd3a78e0e228000a7a0f4f80a1cc793?source=copy_linkk-2b83a78e0e228082aa6ef6bd539a9f32%3Fsource%3Dcopy_link
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Clock from './Clock.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // <App />
    <Clock />
  // </StrictMode>
)