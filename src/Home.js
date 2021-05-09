import React,{ Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect,} from 'react-router-dom'
import './App.css';
import Navbar from './component/navbar/Navbar'
import Absent from './component/absent/Absent'
import Attendance from './component/attendance/Attendance'
import Profile from './component/profile/Profile'
import SignInOutContainer from './component/login/index'
import hello from './component/picture/hello.svg'

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
          <Route path="/" exact>
            {welcome}
          </Route>
          <Route path="/Profile" exact>
            <Profile />
          </Route>
          <Route path="/Applyleave" exact>
            <Absent />
          </Route>
          <Route path="/Attendance" exact>
            <Attendance />
          </Route>
          <Route path="/Login" exact>
            <SignInOutContainer />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}
}