function Booking({ description, date, onClickHandler }) {

  return (
    <div onClick={ onClickHandler }>
      <div>
        Descripción: { description }
      </div>
      <div>
        Fecha: { date }
      </div>
    </div>
  );
}

export default Booking;
