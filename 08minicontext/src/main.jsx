import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Login, Profile, UserContextProvider} from './index.js'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  </StrictMode>,
)
