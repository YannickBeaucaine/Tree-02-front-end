import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import './LoginForm-style.css'

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
      id: Math.random().toString(36).slice(2),
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
    sessionStorage.setItem(method, JSON.stringify(data.result));

  }


  const loginUser = e => {
    e.preventDefault();
    postLogin();
    treeAPIrequest('getCurrentPartner', sessionStorage.getItem('store_key'));
    treeAPIrequest('getAdopters', sessionStorage.getItem('store_key'));
  }

  
  return (
    <div className="container login-form">
        <div className='row text-center login-field'>
          <form onSubmit={loginUser}>
             <div className="email-field">
                <label>Email</label><br />
                <input className="email-input" type="text" value={loginForm.email} onChange={changeInput} name='email'/><br />
              </div>
              <div className="password-field">
                <label>Password</label><br />
                <input  className="password-input" type="password" value={loginForm.password} onChange={changeInput} name='password'/><br />
              </div>
              <input className="submit-button" type="submit" value="Login"/>

          </form>
        </div>
    </div>
  )
}
