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
      localStorage.setItem('email', data.email)
      localStorage.setItem('key', data.key)
      localStorage.setItem('store_key', data.store.key)
      setAuth({
        ...auth,
        loggedIn: true,
        name: data.name,
        email: data.email,
        key: data.key,
        store_id: data.store.id,
        token: data.token
      });
    }
    else{
      setErrorMessage(data)
      console.log(errorMessage)
    }
  }

  const treeAPIrequest = async (method, token) => {

    let body = {
      jsonrpc: '2.0',
      id: '1234',
      method: `${method}`
    }

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
    localStorage.setItem(method, JSON.stringify(data.result));

  }


  const loginUser = e => {
    e.preventDefault();
    postLogin();
    treeAPIrequest('getCurrentPartner', localStorage.getItem('store_key'));
    treeAPIrequest('getAdopters', localStorage.getItem('store_key'));
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
