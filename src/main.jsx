import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
// import {Practice} from './Practice.jsx'
// import Profile from './components/Profile.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Practice/> */}
    {/* <Profile/> */}
  </StrictMode>,
)
