import React, { useState, useEffect } from 'react';
import './App.css';
import Main from './Components/Main/Main'
import { verifyUser } from './Services/auth'

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    handleVerify()
  }, [])

  const handleVerify = async () => {
    const userData = await verifyUser()
    setCurrentUser(userData)
  }
  return (
    <Main setCurrentUser={setCurrentUser} currentUser={currentUser} />
  );
}

export default App;
