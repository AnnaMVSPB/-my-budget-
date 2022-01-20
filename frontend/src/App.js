/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {  useDispatch } from 'react-redux';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';

import Logout from './components/Logout';
import AddCosts from './components/AddCosts';
import { useEffect } from 'react';
import ExpenseStatistics from './components/ExpenseStatistics';
import Income from './components/Income';
import Logo from './components/Logo';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('http://localhost:4000/sessionRouter', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      },
    })
      .then(res => res.json())
      .then(data => {
        dispatch({ type: 'SAVE_USER_SESSION', payload: data.user })

      })

  }, [])
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact>
            <Logo />
          </Route>
          <Route path='/signup' exact>
            <Signup />
          </Route>
          <Route path='/login' exact>
            <Login />
          </Route>
          <Route path='/logout' exact>
            <Logout />
          </Route>
          <Route path='/addCosts' exact>
            <AddCosts />
          </Route>
          <Route path='/ExpenseStatistics' >
            <ExpenseStatistics />
          </Route>
          <Route path='/income'>
            <Income />
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
