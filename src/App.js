import React,{ Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect,} from 'react-router-dom'
import './App.css';
import Home from "./Home";
import SignInOutContainer from './component/login/index'

export default class App extends Component {
 
  render()  {

    return (
    <Router>
      <main>
        <Switch>
          <Route path="/" exact>
            <SignInOutContainer />
          </Route>
          <Route path="/Home" exact>
            <Home />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}
}


