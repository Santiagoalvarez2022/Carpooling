import React , {useState}from 'react'
import { useSearchParams } from 'react-router-dom';
export default function DriverPanel() {
    const [searchParams] = useSearchParams();
    const first_name = searchParams.get('name')
    const last_name = searchParams.get('surname')
    const [form,setForm] = useState({
        departureLocation:"",
        destinationLocation:"",
        tripDate:"",
        departureTime:"",
        estimatedArrivalTime:"",
        availability:""
    })

    //tomo los valores de query de manera provizoria para probrar el sistema, debo agregar token para la validacion de datos 



    return (
        <div className="bg-gray-200 min-h-screen flex flex-col items-center p-6">
          {/* Header */}
          <div className="bg-blue-700 w-full max-w-md flex items-center p-4 rounded-lg mb-6">
            <img
              src="https://via.placeholder.com/50" // Reemplázalo con la URL de la imagen del usuario
              alt="Perfil"
              className="w-12 h-12 rounded-full mr-4"
            />
            <h1 className="text-white text-lg font-bold">Martin Perez</h1>
          </div>
    
          {/* Mis Viajes Programados */}
          <div className="w-full max-w-md mb-6">
            <h2 className="text-gray-800 font-bold text-lg mb-4">MIS VIAJES PROGRAMADOS</h2>
            <div className="bg-blue-500 w-full h-32 rounded-lg"></div>
          </div>
    
          {/* Programar Nuevo Viaje */}
          <div className="w-full max-w-md">
            <h2 className="text-gray-800 font-bold text-lg mb-4">PROGRAMAR NUEVO VIAJE</h2>
            <div className="bg-white p-6 rounded-lg shadow">
              {/* Seleccionar Fecha */}
              <div className="mb-6">
                <h3 className="text-blue-600 font-bold text-sm">SELECCIONAR FECHA</h3>
                <p className="text-gray-500 text-sm mb-2">Selecciona la fecha en la que deseas realizar el viaje</p>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
    
              {/* Seleccionar Horario */}
              <div className="mb-6">
                <h3 className="text-blue-600 font-bold text-sm">SELECCIONAR HORARIO DE SALIDA</h3>
                <p className="text-gray-500 text-sm mb-2">Selecciona el horario de comienzo del viaje</p>
                <input
                  type="time"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-6">
                <h3 className="text-blue-600 font-bold text-sm">SELECCIONAR HORARIO DE LLEGADA</h3>
                <p className="text-gray-500 text-sm mb-2">Selecciona el horario aproximado de llegada del viaje</p>
                <input
                  type="time"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <input className="mb-6 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type="number" placeholder='Asientos disponibles'  />


    
              {/* Selects de Salida y Llegada */}
              <div className="flex justify-between">
                <div className="w-[45%]">
                  <label className="block text-blue-600 font-bold text-sm mb-2">SALIDA</label>
                  <select className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>
                <div className="w-[45%]">
                  <label className="block text-blue-600 font-bold text-sm mb-2">LLEGADA</label>
                  <select className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>
                
              </div>
              <button 
                onClick={()=>sendLogin()}
                type="submit" 
                className=" mt-8 w-full p-3 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-400 focus:outline-none"
                >
                Crear nuevo viaje
                </button>
            </div>
          </div>
        </div>
      );
    };
