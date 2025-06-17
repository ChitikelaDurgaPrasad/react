import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Form from './components/Form'
import UseReducerDemo from './components/UseReducerDemo'
import UseEffect from './components/UseEffect'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Form /> */}
    {/* <UseReducerDemo /> */}
    <UseEffect/>
  </StrictMode>,
)
