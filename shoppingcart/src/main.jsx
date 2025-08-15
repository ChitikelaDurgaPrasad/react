import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppRoutes} from './index'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={AppRoutes}/>
  </StrictMode>,
)
