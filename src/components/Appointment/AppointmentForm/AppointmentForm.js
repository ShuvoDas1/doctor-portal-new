import React,{useState} from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import {connect} from 'react-redux'
import { addAppointment } from "../../../Redux/AppointmentDetails/AppointmentDetailsActions";

const customStyles = {
  content: {
    // width: "550px",
    padding: "30px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};
Modal.setAppElement("#root");

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn,date, addAppointment }) => {
  // const [appointment, setAppointment] = useState({
  //   // name: '',
  //   // phoneNumber: '',
  //   // email: '',
  //   // age: '',
  //   // weight: ''
  // })

  const {register, handleSubmit,formState: { errors }} = useForm();

  const onSubmit = data => {
        data.service = appointmentOn;
        data.date= date;
        data.created= new Date();
        
        addAppointment(data);
      
      // fetch('http://localhost:4000/addAppointment',{
      //       method: 'POST',
      //       headers:{'Content-Type': 'application/json'},
      //       body: JSON.stringify(data)
      //   })
      //   .then(res => res.json())
      //   .then(success => {
      //       closeModal();
      //       alert('Appointment submit successfully')
      //   })       
  };

  

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
          <h3 className='text-center text-info'>{appointmentOn}</h3>
          <p className='text-center text-secondary'><small>On {date.toDateString()}</small></p>
        <form className='p-5' onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              name="name"
              className="form-control"
              placeholder="Enter Your Name"
              {...register("name", { required: true })}
            />
            {errors.name && <span>This field is required</span>}
          </div>
          <div className="form-group my-3">
            <input
              name="phoneNumber"
              className="form-control"
              placeholder="Enter Your Phone Number"
              {...register("phoneNumber", { required: true })}
            />
            {errors.phoneNumber && <span>This field is required</span>}
          </div>
          <div className="form-group">
            <input
              name="email"
              className="form-control"
              placeholder="Enter Your email"
              {...register("email", { required: true })}
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className="form-row row my-3">
            <div className="form-group col-md-4">
              <select
                className="custom-select mr-sm-2"
                name="gender"
                className="form-control"
                id="inlineFormCustomSelect"
                {...register("gender", { required: true })}
              >
                <option selected value="Male">
                  Male
                </option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
              {errors.gender && <span>This field is required</span>}
            </div>
            <div className="form-group col-md-4">
              <input
                type="text"
                placeholder="Age"
                name="age"
                className="form-control"
                {...register("age", { required: true })}
              />
              {errors.age && <span>This field is required</span>}
            </div>
            <div className="form-group col-md-4">
              <input
                type="text"
                placeholder="Weight"
                name="weight"
                className="form-control"
                {...register("weight", { required: true })}
              />
              {errors.weight && <span>This field is required</span>}
            </div>
          </div>
          <div className="form-group ">
            <input type="submit" className="btn btn-info w-100 text-white text-uppercase"/>
          </div>
        </form>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) =>{
    return{
        date: state.appointmentDate.date
    }
}

export default connect(mapStateToProps,{addAppointment}) (AppointmentForm);
