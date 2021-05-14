import React,{ Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect,} from 'react-router-dom'
import './App.css';
import Navbar from './component/navbar/Navbar'
import AbsentForm from './component/absent/AbsentForm'
import Attendance from './component/attendance/Attendance'
import Profile from './component/profile/Profile'
import hello from './component/picture/hello.svg'
import EditProfile from './component/profile/EditProfile';

export default class Home extends Component {
 
  render()  {
    const welcome =(
      <div className="welcome">Welcome to Employee System!<br/><br/><img src={hello} alt="hello" /></div>  
    )
    return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route path="/Home" exact>
            {welcome}
          </Route>
          <Route path="/Profile" exact>
            <Profile />
          </Route>
          <Route path="/Applyleave" exact>
            <AbsentForm />
          </Route>
          <Route path="/Attendance" exact>
            <Attendance />
          </Route>
          <Route path="/Edit" exact>
            <EditProfile />
          </Route>
          <Redirect to="/Home" />
        </Switch>
      </main>
    </Router>
  );
}
}