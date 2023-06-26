import { useNavigate, useParams } from 'react-router-dom';
import bookingsConfig from '../Bookings/config';

function BookingDetail() {
  const navigate = useNavigate();

  const { id } = useParams();
  const bookingConfig = bookingsConfig.find(bookingConfig => bookingConfig.id === id);

  return (
    <>
      <h1> Descripción: { bookingConfig.description } </h1>
      <h1> Fecha: { bookingConfig.date } </h1>
      <h1> Nombre del cliente: { bookingConfig.client } </h1>
      <h1> Servicio: { bookingConfig.service } </h1>
      <h1> Precio: { bookingConfig.price } </h1>
      <button onClick={ () => navigate('/bookings') }>Volver a las citas</button>
    </>
  );
}

export default BookingDetail;
