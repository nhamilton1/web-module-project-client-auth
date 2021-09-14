import axios from 'axios';
import React, { useState } from 'react'



const initialFormValues = {
    username: '',
    password: ''
}



const Login = () => {

    const [formValues, setFormValues] = useState(initialFormValues)

    const handleChange = e => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
      }
    
    const handleSubmit = e => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/login", formValues)
          .then(resp => {
            console.log(resp);
            localStorage.setItem("token", resp.data.token);
          })
          .catch(err => {
            console.log(err);
          })
    }


    return (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              value={formValues.username}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
            />
            <button>Log in</button>
          </form>
        </div>
      )
}

export default Login
