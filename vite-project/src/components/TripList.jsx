// TripList.jsx
import TripCard from "./TripCard";

const TripList = ({ trips , idDriver}) => {
  return (
    <div className="p-4 ">
      {trips.map((trip, index) => (
       <TripCard
          idDriver={idDriver}
          key={index}
          date={trip.date}
          trips={trip.trips}
        />
      ))}
    </div>
  );
};

export default TripList;
