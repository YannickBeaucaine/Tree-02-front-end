import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import './LoginForm-style.css'
// rerouting to a page when logged in  1/3
import {useHistory} from 'react-router-dom';

export default function LoginForm() {
  // rerouting to a page when logged in  2/3
  const history = useHistory();
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
    return await response.json();
  }

  function error(value) {
    if (console) {
        console.error(value)
    }
}

  const treeAPIrequest = async (method, token, user_key) => {
    
   
    let body = {
      jsonrpc: '2.0',
      id: Math.random().toString(36).slice(2),
      method: `${method}`,
      params: {}
    }

    if(user_key){
      body.params = { key: user_key }
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
    return await response.json();
    } catch(err) {
      error(err)
      console.log('fail')
    }
    
  }

  const loginUser = e => {
    e.preventDefault();
    postLogin().then((response) => {
      if(response.token){
        sessionStorage.setItem('token', response.token)
        sessionStorage.setItem('name', response.name)
        sessionStorage.setItem('email', response.email)
        sessionStorage.setItem('key', response.key)
        sessionStorage.setItem('store_key', response.store.key)
        setAuth({
          ...auth,
          loggedIn: true,
          name: response.name,
          email: response.email,
          key: response.key,
          token: response.token
        });
        // rerouting to a page when logged in  3/3
  
      }
      else{
        setErrorMessage(response)
        console.log(errorMessage)
      }
    }).then(() => {
      treeAPIrequest('getAdopters', sessionStorage.getItem('store_key')).then((response) => {
        sessionStorage.setItem('getAdopters', JSON.stringify(response.result));
      })
      treeAPIrequest('getCurrentPartner', sessionStorage.getItem('store_key')).then((response) => {
        sessionStorage.setItem('getCurrentPartner', JSON.stringify(response.result));
      })
      treeAPIrequest('getAdopter', sessionStorage.getItem('store_key'), sessionStorage.getItem('key')).then((response) => {
        sessionStorage.setItem('getAdopter', JSON.stringify(response.result));
        history.push('/MyStore')
      })
    })
  }

  
  return (
    <div className="shape-div">
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
    <svg className='shape' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#00FFB4" fill-opacity="1" d="M0,0L130.9,160L261.8,256L392.7,288L523.6,96L654.5,32L785.5,288L916.4,224L1047.3,256L1178.2,128L1309.1,160L1440,160L1440,320L1309.1,320L1178.2,320L1047.3,320L916.4,320L785.5,320L654.5,320L523.6,320L392.7,320L261.8,320L130.9,320L0,320Z"></path></svg>

    </div>
  )
}
