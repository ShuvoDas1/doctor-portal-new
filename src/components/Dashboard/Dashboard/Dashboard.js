import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { useState, useEffect } from 'react'
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate'
import { connect } from 'react-redux'
import { appointmentsByDate } from '../../../Redux/AppointmentsByDate/AppointmentsByDateAction'
import axios from 'axios'
import './Dashboard.scss'
const Dashboard = ({ appointmentsByDate }) => {
  const [selectedDate, setSelectedDate] = new useState(new Date())
  const [appointments, setAppointments] = new useState([])

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }

  useEffect(() => {
    appointmentsByDate(selectedDate.toDateString())
  }, [selectedDate])

  return (
    <section className="dashboard__wrapper">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="dashboard">
        <h5 className="dashboard_title">Dashboard</h5>
        <div className="counter">
          <div className="counter__item" style={{backgroundColor: "#F1536E"}}>
            <span className='total'>10</span>
            <span>Pending Appointments</span>
          </div>
          <div className="counter__item" style={{backgroundColor: "#3DA5F4"}}>
            <span className='total'>10</span>
            <span>Pending Appointments</span>
          </div>
          <div className="counter__item" style={{backgroundColor: "#00C689"}}>
            <span className='total'>10</span>
            <span>Pending Appointments</span>
          </div>
          <div className="counter__item" style={{backgroundColor: "#FDA006"}}>
            <span className='total'>10</span>
            <span>Pending Appointments</span>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default connect(null, { appointmentsByDate })(Dashboard)
