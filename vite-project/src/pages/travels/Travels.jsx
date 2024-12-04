import React from 'react'
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import TripList from '../../components/TripList';
import img from '../../assets/perfil.png'
import style from './Travels.module.css'

export default function Travels() {
    const { id } = useParams();
    const trips = [
      {
        date: "Lunes, 2 de diciembre",
        trips: [{
          tripId: "0",
          departureLocation: "Pergamino",
          destinationLocation:"Rosario",
          tripDate: "Lunes, 2 de diciembre",
          departureTime: "9:00",
          estimatedArrivalTime: "11:00",
          availability: 2,
          totalCapacity: 4,
          vehicleId: "123",
        },
        { tripId: "1",
          departureLocation: "Rosario" ,
          destinationLocation:"Pergamino",
          tripDate: "Lunes, 2 de diciembre",
          departureTime: "15:00",
          estimatedArrivalTime: "17:00",
          availability: 3,
          totalCapacity: 4,
          vehicleId: "124",
        },
        
      ],
      },
      {
        date: "Lunes, 2 de diciembre",
        trips: [{
          tripId: "0",
          departureLocation: "Pergamino",
          destinationLocation:"Rosario",
          tripDate: "Lunes, 2 de diciembre",
          departureTime: "9:00",
          estimatedArrivalTime: "11:00",
          availability: 2,
          totalCapacity: 4,
          vehicleId: "123",
        },
        { tripId: "1",
          departureLocation: "Rosario" ,
          destinationLocation:"Pergamino",
          tripDate: "Lunes, 2 de diciembre",
          departureTime: "15:00",
          estimatedArrivalTime: "17:00",
          availability: 3,
          totalCapacity: 4,
          vehicleId: "124",
        },
        
      ],
      },
      {
        date: "Lunes, 2 de diciembre",
        trips: [{
          tripId: "0",
          departureLocation: "Pergamino",
          destinationLocation:"Rosario",
          tripDate: "Lunes, 2 de diciembre",
          departureTime: "9:00",
          estimatedArrivalTime: "11:00",
          availability: 2,
          totalCapacity: 4,
          vehicleId: "123",
        },
        { tripId: "1",
          departureLocation: "Rosario" ,
          destinationLocation:"Pergamino",
          tripDate: "Lunes, 2 de diciembre",
          departureTime: "15:00",
          estimatedArrivalTime: "17:00",
          availability: 3,
          totalCapacity: 4,
          vehicleId: "124",
        },
        
      ],
      },
      {
        date: "Lunes, 2 de diciembre",
        trips: [{
          tripId: "0",
          departureLocation: "Pergamino",
          destinationLocation:"Rosario",
          tripDate: "Lunes, 2 de diciembre",
          departureTime: "9:00",
          estimatedArrivalTime: "11:00",
          availability: 2,
          totalCapacity: 4,
          vehicleId: "123",
        },
        { tripId: "1",
          departureLocation: "Rosario" ,
          destinationLocation:"Pergamino",
          tripDate: "Lunes, 2 de diciembre",
          departureTime: "15:00",
          estimatedArrivalTime: "17:00",
          availability: 3,
          totalCapacity: 4,
          vehicleId: "124",
        },
        
      ],
      },
      {
        date: "Lunes, 2 de diciembre",
        trips: [{
          tripId: "0",
          departureLocation: "Pergamino",
          destinationLocation:"Rosario",
          tripDate: "Lunes, 2 de diciembre",
          departureTime: "9:00",
          estimatedArrivalTime: "11:00",
          availability: 2,
          totalCapacity: 4,
          vehicleId: "123",
        },
        { tripId: "1",
          departureLocation: "Rosario" ,
          destinationLocation:"Pergamino",
          tripDate: "Lunes, 2 de diciembre",
          departureTime: "15:00",
          estimatedArrivalTime: "17:00",
          availability: 3,
          totalCapacity: 4,
          vehicleId: "124",
        },
        
      ],
      },
     
    ];

    const bgImage = {
      backgroundImage : `url(${img})`
    }

    // <Header name="Martin Perez" profilePicture="/path-to-image.jpg" />
    //
    return (
      <div className="min-h-screen pt-8 pr-4">
        <div className="bg-bgBlueDark flex items-center justify-between p-4 rounded-r-custom-1-5em  text-white">
          <div className="flex items-center space-x-4">
            <div style={bgImage} alt="Imagen de perfil" className={`w-12 h-12 rounded-full ${style.imgPerfil}`} />
            <span className="font-bold">MARTIN PEREZ</span>
          </div>
          <span className="text-sm font-medium text-xs">CONTACTO</span>
        </div>

        <TripList idDriver={id} trips={trips} /> 
      </div>
  )
}