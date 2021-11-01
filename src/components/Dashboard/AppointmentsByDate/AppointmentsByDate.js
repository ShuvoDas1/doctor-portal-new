import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import { connect } from 'react-redux'
import './AppointmentsByDate.scss'
import { getAppointmentsByDate } from '../../../Redux/AppointmentsByDate/AppointmentsByDateAction'
import { Dropdown, Table } from 'react-bootstrap'
const AppointmentsByDate = ({ getAppointmentsByDate, appointments }) => {
  const [date, setDate] = useState(new Date())
  // console.log(appointments);
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
                <td>{appointment.visitingTime}</td>
                <td>
                  <select
                    className="form-select action form-control"
                    aria-label="Default select example"
                  >
                    <option selected>Select Status</option>
                    <option value="Pending">Not Visited</option>
                    <option value="On Going">Visited</option>
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
