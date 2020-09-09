import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { loginUser } from '../../Services/auth'

export default function SignIn(props) {


  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = await loginUser(formData);
    props.setCurrentUser(userData);
    props.history.push(`/users/${userData.id}`)
  }

  return (

    <form onSubmit={handleSubmit}>
      <h3>Sign In</h3>
      <label>
        Username:
      <input
          name="username"
          type="text"
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
      <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <p>Don't have an account? <Link to="/register">Register</Link> </p>
      <button>Submit</button>
    </form>

  )
}
