import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import Travels from './pages/travels/Travels.jsx';
import Driver from './pages/driver/Driver.jsx';
import './index.css'
import TripDetail from './pages/tripDetail/TripDetail.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App />
    ),
  },
  
  {
    path: "/drivers/:name/:id", // Ruta con parámetro dinámico :id
    element: <Travels />,
  },
  
  {
    path: "/drivers/:idDriver/trips/:id", // Ruta con parámetro dinámico :id
    element: <TripDetail />,
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
 
)
