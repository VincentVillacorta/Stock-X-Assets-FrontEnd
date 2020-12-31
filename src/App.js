import React, {useEffect, useState} from 'react';
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
  const [userInfo, changeUserInfo] = useState({})
  useEffect(() => {
    console.log(userInfo.item_collection)
  })

  return (
    <div className="App">
      <Router>
        <div>
            <div className="sideNav">
                <div className="sideNav-link-group">
                    <Link className="sideNav-link" to="/">Login</Link>
                    <Link className="sideNav-link" to="/dashboard">Dashboard</Link>         
                    <Link className="sideNav-link" to="/about">About</Link>
                </div>
            </div>
            <Switch>
            <Route exact path="/">
                <Login changeUserInfo={changeUserInfo}/>
            </Route>
            <Route path="/dashboard">
                <MainPage userInfo={userInfo}changeUserInfo={changeUserInfo}/>
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
