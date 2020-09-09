import React, { useState } from 'react'
import { registerUser } from '../../Services/auth';

export default function Register(props) {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
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
    const userData = await registerUser(formData)
    props.setCurrentUser(userData)
    props.history.push(`/users/${userData.id}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Register</h3>
      <label>
        Email:
    <input
          name="email"
          type="text"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
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
      <button>Submit</button>
    </form>
  )
}
