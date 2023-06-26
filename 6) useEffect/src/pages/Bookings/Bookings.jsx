import { useNavigate } from 'react-router-dom';

import bookingsConfig from './config.js';
import Booking from '../../components/Booking/Booking.jsx';

function Bookings() {
  const navigate = useNavigate();

  return (
    <>
      { bookingsConfig.map(bookingConfig =>
        <Booking
          key={ bookingConfig.id }
          { ...bookingConfig }
          onClickHandler={ () => navigate(`/bookingDetail/${bookingConfig.id}`) }
        />
      ) }
    </>
  );
}

export default Bookings;
