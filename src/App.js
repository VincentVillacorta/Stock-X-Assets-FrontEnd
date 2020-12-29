import React from 'react';
import './App.css';
import Login from './components/Login'
import MainPage from './components/MainPage'
import AboutMe from './components/AboutMe'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  return (
    <div className="App">
      <Router>
        <div>
            <div className="sideNav">
                <div className="sideNav-link-group">
                    <Link class="sideNav-link" to="/">Login</Link>
                    <Link class="sideNav-link" to="/dashboard">Dashboard</Link>         
                    <Link class="sideNav-link" to="/about">About</Link>
                </div>
            </div>
            <Switch>
            <Route exact path="/">
                <Login />
            </Route>
            <Route path="/dashboard">
                <MainPage />
            </Route>
            <Route path="/about">
                <AboutMe />
            </Route>
            </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
