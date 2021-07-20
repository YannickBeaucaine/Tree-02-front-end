import React, { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

export default function LoginForm() {

  const [auth, setAuth] = useContext(AuthContext);

  const [loginForm, setLoginForm] = useState({
      email: '',
      password: ''
  });

  const [errorMessage, setErrorMessage] = useState('');

  const changeInput = e => {
    setLoginForm({
        ...loginForm,
        [e.target.name] : e.target.value
    })
  }

  const postLogin = async () => {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(loginForm)
    })

    const data = await response.json();

    if(data.token){
      localStorage.setItem('token', data.token)
      localStorage.setItem('name', data.name)
      localStorage.setItem('key', data.key)
      localStorage.setItem('store_id', data.store_id)
      setAuth({
        ...auth,
        loggedIn: true,
        name: data.name,
        email: data.email,
        key: data.key,
        store_id: data.store_id,
        token: data.token
      });
    }
    else{
      setErrorMessage(data)
    }
  }


  const loginUser = e => {
    e.preventDefault();
    postLogin()
  }

  
  return (
    <div>
      {errorMessage && Object.keys(errorMessage).map((key1) => <p>{key1} {errorMessage[key1][0]}</p>)}
      <form onSubmit={loginUser}>
        <label>Email</label><br />
        <input type="text" value={loginForm.email} onChange={changeInput} name='email'/><br />
        <label>Password</label><br />
        <input type="password" value={loginForm.password} onChange={changeInput} name='password'/><br />
        <input type="submit" value="Login"/>
      </form>
    </div>
  )
}
