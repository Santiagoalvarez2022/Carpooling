import React, { useEffect } from 'react';

export default function TripDetail() {
  useEffect(() => {
    // Inicializar el mapa
    // const map = new window.google.maps.Map(document.getElementById("map-pergamino"), {
    //   center: { lat: -34.6075682, lng: -58.4370894 }, // Coordenadas de ejemplo
    //   zoom: 12,
    // });
  }, []);
 

  return (
    <div className="min-h-screen bg-blue-600 flex items-center justify-center">
      
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-[90%] max-w-sm sm:max-w-md md:max-w-[40vw]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="bg-blue-600 text-white font-bold py-1 px-3 rounded-md">PERG</span>
            <span className="text-blue-600 font-bold text-lg">→</span>
            <span className="bg-blue-600 text-white font-bold py-1 px-3 rounded-md">ROS</span>
          </div>
          <p className="text-blue-600 font-bold">LUNES, 2 DICIEMBRE</p>
        </div>

        {/* Travel Time */}
        <div  className="mb-4 text-left">
          <h3 className="text-blue-600 font-bold uppercase text-xs">Comienzo de viaje</h3>
          <p className="text-gray-700 text-xs">9:00 AM</p>
        </div>

        {/* Formulario */}
        <div className="space-y-4">
          {/* Salida */}
          <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
            <div className="text-left">
              <label className="text-blue-600 font-bold text-sm block">SALIDA:</label>
              <p className="text-gray-500 text-sm">Marque el lugar de salida</p>
            </div>
            <span className="text-red-500 text-xl">
              <i className="fas fa-map-marker-alt"></i>
            </span>
          </div>

          {/* Llegada */}
          <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
            <div className="text-left">
              <label className="text-blue-600 font-bold text-sm block">LLEGADA:</label>
              <p className="text-gray-500 text-sm">Marque el lugar a donde desea ir</p>
            </div>
            <span className="text-red-500 text-xl">
              <i className="fas fa-map-marker-alt"></i>
            </span>
          </div>
        

          {/* Datos del pasajero */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="text-blue-600 font-bold text-sm mb-2">DATOS DEL PASAJERO</h4>
            <p className="text-gray-500 text-xs mb-4">
              Necesitamos que nos proporciones tus datos para el viaje
            </p>
            {/* Nombre */}
            <div className="mb-2">
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2 text-sm"
                placeholder="Ingrese su nombre completo"
              />
            </div>
            {/* WhatsApp */}
            <div>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2 text-sm"
                placeholder="Ingrese su número de WhatsApp"
              />
            </div>
          </div>
        </div>

        {/* Botón */}
        <div className="mt-6">
          <button className="bg-yellow-400 text-blue-600 font-bold py-2 px-4 w-full rounded-lg shadow-md hover:bg-yellow-500">
            SOLICITAR
          </button>
        </div>
      </div>
    </div>
  );
}
