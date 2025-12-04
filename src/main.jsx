import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Stair1 from "./component/common/Stair1.jsx"
createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <BrowserRouter>
    <Stair1 />
     <App />
    </BrowserRouter>
   
  </StrictMode>,
)
