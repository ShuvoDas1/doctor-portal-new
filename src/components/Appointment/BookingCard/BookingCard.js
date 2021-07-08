import React from "react";
import './BookingCard.css'
const BookingCard = ({booking}) => {
  return (
    <div className="col-md-4 mb-3">
      <div class="card text-center appointment-card" style={{ width: "18rem" }}>
        <div class="card-body">
          <h5 class="card-title text-info">{booking.subject}</h5>
          <h6 class="card-subtitle mb-2">{booking.visitingHour}</h6>
          <small class="card-text"> {booking.totalSpace} SPACES AVAILABLE </small>
          <button className='btn btn-info text-white mt-2' style={{borderRadius: '0'}}>BOOK APPOINTMENT</button>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
