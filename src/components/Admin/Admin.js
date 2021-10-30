// import { Router } from '@material-ui/icons'
import React from 'react'
import Switch from 'react-bootstrap/esm/Switch'
import { Route } from 'react-router'
import AppointmentsByDate from '../Dashboard/AppointmentsByDate/AppointmentsByDate'
import Dashboard from '../Dashboard/Dashboard/Dashboard'
import Sidebar from '../Dashboard/Sidebar/Sidebar'
import './Admin.scss'
const Admin = () => {
  const dashboard = () => <div>Login Part</div>
  return (
    <div className="admin__wrapper">
      <div className="sidebar">
        <Sidebar />
      </div>
      <Switch>
        <Route exact path="/admin/dashboard" component={Dashboard} />
        <Route exact path="/admin/appointments" component={AppointmentsByDate} />
        {/* <Route exact path="/Register" component={RegisterPart} /> */}
      </Switch>
    </div>
  )
}

export default Admin
