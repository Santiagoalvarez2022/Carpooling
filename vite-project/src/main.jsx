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
import Admin from './pages/admin/Admin.jsx';
import AuthDriver from './pages/authDriver/AuthDriver.jsx';
import DriverPanel from './pages/DriverPanel/DriverPanel.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Admin />
    ),
  },
  {
    path: "/authdriver",
    element: (
      <AuthDriver />
    ),
  },
  {
    path: "/panelControl",
    element: (
      <DriverPanel />
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
