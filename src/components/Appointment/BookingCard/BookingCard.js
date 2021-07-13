import React,{useState} from "react";
import ReactDOM from 'react-dom';
import AppointmentForm from "../AppointmentForm/AppointmentForm";
import './BookingCard.css'


const BookingCard = ({booking}) => {
  
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = #f00;
  // }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="col-md-4 mb-3">
      <div class="card text-center appointment-card" style={{ width: "18rem" }}>
        <div class="card-body">
          <h5 class="card-title text-info">{booking.subject}</h5>
          <h6 class="card-subtitle mb-2">{booking.visitingHour}</h6>
          <small class="card-text"> {booking.totalSpace} SPACES AVAILABLE </small>
          <button onClick={openModal} className='btn btn-info text-white mt-2' style={{borderRadius: '0'}}>BOOK APPOINTMENT</button>
          <AppointmentForm modalIsOpen={modalIsOpen} closeModal={closeModal} appointmentOn={booking.subject}></AppointmentForm>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
