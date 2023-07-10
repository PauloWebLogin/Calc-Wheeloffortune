import Booking from '../../components/Booking/Booking.jsx';
import bookingsConfig from "./config.js";

function Bookings() {
  return (
    <>
      <h1>Bookings</h1>
      <div className="bookings-container">
        {bookingsConfig.map(bookingConfig =>
          <Booking 
            key={bookingConfig.description} 
            {...bookingConfig} 
          />)
          }
      </div>
    </>
  );
}

export default Bookings;
