import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App, PersonalInfo, Education, Experience} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PersonalInfo />
    <Education />
    <Experience />
  </StrictMode>,
)
