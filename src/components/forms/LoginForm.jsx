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
      sessionStorage.setItem('token', data.token)
      sessionStorage.setItem('name', data.name)
      sessionStorage.setItem('email', data.email)
      sessionStorage.setItem('key', data.key)
      sessionStorage.setItem('store_key', data.store.key)
      setAuth({
        ...auth,
        loggedIn: true,
        name: data.name,
        email: data.email,
        key: data.key,
        token: data.token
      });
    }
    else{
      setErrorMessage(data)
      console.log(errorMessage)
    }
  }

  function error(value) {
    if (console) {
        console.error(value)
    }
}

  const treeAPIrequest = async (method, token) => {
    
    let body = {
      jsonrpc: '2.0',
      id: Math.random().toString(36).slice(2),
      method: `${method}`
    }
    
    try {
      const response = await fetch('https://cors-anywhere.herokuapp.com/https://api.test.treeo2.org/rpc', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json, charset=utf-8',
          'X-AppType': 'Partner',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(body) 
      });
    const data = await response.json();
    sessionStorage.setItem(method, JSON.stringify(data.result))
    } catch(err) {
      error(err)
    }
  }


  const loginUser = e => {
    e.preventDefault();
    postLogin();
    treeAPIrequest('getCurrentPartner', sessionStorage.getItem('store_key'));
    treeAPIrequest('getAdopters', sessionStorage.getItem('store_key'));
  }

  
  return (
    <div>
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
