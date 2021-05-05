import React from 'react'
import { Switch, Route , Redirect } from 'react-router-dom'
import Absent from "../absent/Absent"
import Login from "../login/Login"
import Attendance from '../attendance/Attendance'

export default () => (
    <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/ApplyLeave" component={Absent} />
        <Route exact path="/Attendance" component={Attendance} />
        <Redirect to="/" />
    </Switch>
)