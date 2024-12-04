import { Link } from "react-router-dom";

const TripCard = ({ date, trips, idDriver }) => {

  //obtener id del id del conductor


  return (
    <div className=" rounded-lg pb-4 mb-4 shadow-md  bg-white ">
      <h3 className="text-blue-600 font-bold p-2">{date}</h3>
      {trips.map((trip, index) => {
        return (

        <Link to={`/drivers/:${idDriver}/trips/:${trip.tripId}`} key={index} 

        className={`flex flex-col mb-4 p-4rounded-lg shadow-sm ${index % 2 === 0 ? 'bg-blue-200' : 'bg-blue-300'} ` }>

         <div className="flex justify-between mb-2 px-4 pt-2">
          <div className="flex flex-col sm:flex-row">
            <span className="font-medium text-gray-700">{trip.departureLocation} → {trip.destinationLocation}</span>
          </div>

          <div className="flex sm:ml-2">
            <button className="bg-blue-600 text-white py-1 px-4 rounded-md text-sm">
              {trip.availability} Disponibles
            </button>
          </div>
        </div>

          <div className="flex justify-between px-3 pb-2" >
            {/* Horarios */}
            <div className="text-gray-600 text-xs">Salida {trip.departureTime} AM</div>
            
          </div>
        </Link>
      )})}
    </div>
  );
};

export default TripCard;
