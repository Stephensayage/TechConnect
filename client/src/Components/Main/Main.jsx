import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'

import Homepage from '../Homepage/Homepage'
import Header from './Shared/Header/Header'
import Register from '../Register/Register';
import UserProfile from '../UserProfile/UserProfile';
import SignIn from '../SignIn/SignIn';

export default function Main(props) {

  const { setCurrentUser, currentUser } = props;



  return (<>
    <Header />
    <Route exact path='/' render={(props) => (
      <Homepage
        {...props} // this is to pass match, history and location props.
        setCurrentUser={setCurrentUser}
      />
    )} />
    <Route exact path='/' render={(props) => (
      <SignIn
        {...props}
        setCurrentUser={setCurrentUser}
      />
    )} />

    <Route path='/register' render={(props) => (
      <Register
        {...props}
        setCurrentUser={setCurrentUser}
      />
    )} />

    <Route path='/users/:id' render={(props) => (
      <UserProfile
        {...props}
        setCurrentUser={setCurrentUser}
        currentUser={currentUser}
      />
    )} />

  </>
  )
}
