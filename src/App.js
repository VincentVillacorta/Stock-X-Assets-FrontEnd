import React, {useEffect, useState} from 'react';
import './App.css';
import Login from './components/Login'
import MainPage from './components/MainPage'
import AboutMe from './components/AboutMe'

import logo from './images/stock-x-assets-logo.png'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [userInfo, changeUserInfo] = useState({})
  const [waitingForLogin, setWaitingForLogin] = useState(true)
  const [mainPageCanUpdate, setMainPageCanUpdate] = useState(false)

  return (
    <div className="App">
      <Router>
        <div className="full-page">
            <div className="navbar">
              <img src={logo}/>
                <div className="link-group">
                    <Link className="link" to="/">Login</Link>
                    <Link className="link" to="/dashboard">Dashboard</Link> 
                    <button className="link about-button">About</button>   
                </div>
            </div>
            <Switch>
            <Route exact path="/">
                <Login changeUserInfo={changeUserInfo} waitingForLogin={waitingForLogin} setWaitingForLogin={setWaitingForLogin}/>
            </Route>
            <Route path="/dashboard">
                <MainPage userInfo={userInfo}changeUserInfo={changeUserInfo}/>
            </Route>
            </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
