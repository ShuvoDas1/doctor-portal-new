import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { useState, useEffect } from 'react'
// import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate'
import { connect } from 'react-redux'
// import { appointmentsByDate } from '../../../Redux/AppointmentsByDate/AppointmentsByDateAction'
import axios from 'axios'
import './Dashboard.scss'
import { Dropdown, Table } from 'react-bootstrap'
const Dashboard = () => {
  const tableHeader = [
    'Sl',
    'Date',
    'Time',
    'Name',
    'Contact',
    'Prescriptions',
    'Action',
  ]

  return (
    <section className="dashboard__wrapper">
      <div className="dashboard">
        <h5 className="dashboard_title">Dashboard</h5>
        <div className="counter">
          <div className="counter__item" style={{ backgroundColor: '#F1536E' }}>
            <span className="total">10</span>
            <span>Pending Appointments</span>
          </div>
          <div className="counter__item" style={{ backgroundColor: '#3DA5F4' }}>
            <span className="total">10</span>
            <span>Pending Appointments</span>
          </div>
          <div className="counter__item" style={{ backgroundColor: '#00C689' }}>
            <span className="total">10</span>
            <span>Pending Appointments</span>
          </div>
          <div className="counter__item" style={{ backgroundColor: '#FDA006' }}>
            <span className="total">10</span>
            <span>Pending Appointments</span>
          </div>
        </div>

        {/* Appointments Table */}

        <div className="appointments__table">
          <div className='name__weeks'>
            <h5>Recent Appointments</h5>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Weeks
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Week 1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Week 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Week 3</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Week 4</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <Table responsive>
            <thead>
              <tr>
                {tableHeader.map((header) => (
                  <th>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                {Array.from({ length: 6 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
                ))}
              </tr>
              <tr>
                <td>2</td>
                {Array.from({ length: 6 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
                ))}
              </tr>
              <tr>
                <td>3</td>
                {Array.from({ length: 6 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
                ))}
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
