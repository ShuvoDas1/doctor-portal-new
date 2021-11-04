import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import { connect } from 'react-redux'
import './AppointmentsByDate.scss'
import { getAppointmentsByDate } from '../../../Redux/AppointmentsByDate/AppointmentsByDateAction'
import { Dropdown, Table } from 'react-bootstrap'


const AppointmentsByDate = ({ getAppointmentsByDate, appointments }) => {
  const [date, setDate] = useState(new Date());
  const [isVisited,setIsVisited] = useState("");
  const [selectedId,setSelectedId] = useState(null)

  console.log(isVisited);

  const handleIsVisited = (e,id) => {
    setIsVisited(e.target.value);
    setSelectedId(id);
    
  }

  useEffect(()=>{
    const updateData =  {selectedId, isVisited};
    // console.log(updateData);
    fetch(`http://localhost:4000/appointments/update/${selectedId}`,{
      method: 'PATCH',
      headers: { 'content-type': 'application/json'},
      body: JSON.stringify(updateData)

    })
    .then(res=>res.json())
    .then(data=>console.log(data))
  },[selectedId])


  

  useEffect(() => {
    getAppointmentsByDate(date.toDateString())
  }, [date])


  return (
    <div className="appointments__wrapper">
      <div className="calendar__wrapper">
        <Calendar className='calender' onChange={setDate} value={date} />
      </div>
      <div className="appointments">
        <div className="appointments__header">
          <p>Appointments</p>
          <span>{date.toDateString()}</span>
        </div>
        <Table hover className='appointments__table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Schedule</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments == 0 && (
              <div className="d-flex justify-content-center ">
                <h5 className='text-center'>No Appointments Today</h5>
              </div>
            )}
            {appointments.map((appointment) => (
              <tr>
                <td>{appointment.name}</td>
                <td>{appointment.visitingHour}</td>
                <td>
                  <select
                    className="form-select action form-control"
                    aria-label="Default select example"
                   
                  onChange={(e)=>handleIsVisited(e,appointment._id)}
                  // onChange={()=>getId(appointment._id)}                    
                  >
                    <option   selected  value="not visited">Not Visited</option>
                    <option value="visited">Visited</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    appointments: state.appointmentsByDate.appointments,
  }
}

export default connect(mapStateToProps, { getAppointmentsByDate })(
  AppointmentsByDate,
)
