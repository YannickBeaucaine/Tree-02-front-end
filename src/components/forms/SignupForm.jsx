import React, { useState } from 'react';
import './SignupForm-style.css';


export default function SignupForm() {
  const [signUpForm, setSignUpForm] = useState({
    user:{
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    }
  })

  const [errorMessage, setErrorMessage] = useState('')

  const changeInput = e => {
    console.log(e.target.value)
    setSignUpForm({
      user:{
        ...signUpForm.user,
        [e.target.name] : e.target.value
      }
    })
  }

  const postSignUp = async () => {
    const response = await fetch('http://localhost:3000/sign_up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(signUpForm)
    })

    const data = await response.json();
    if(data.token){
      sessionStorage.setItem('token', data.token)
      sessionStorage.setItem('name', data.name)
      sessionStorage.setItem('email', data.email)
      sessionStorage.setItem('key', data.key)
      sessionStorage.setItem('store_key', data.store.key)

    }else{
      setErrorMessage(data)
      console.log(errorMessage)
    }
  }

  const signUpUser = e => {
    e.preventDefault()
    postSignUp()
  }

  const {name, email, password, password_confirmation} = signUpForm
  return (
    <div className='container text-center signup-form'>
      <form onSubmit={signUpUser}>
        <label className='mt-1 mb-1'>Name</label><br />
        <input type="text" value={name} onChange={changeInput} name='name'/><br />
        <label className='mt-1 mb-1'>Email</label><br />
        <input type="text" value={email} onChange={changeInput} name='email'/><br />
        <label className='mt-1 mb-1'>Password</label><br />
        <input type="password" value={password} onChange={changeInput} name='password'/><br />
        <label className='mt-1 mb-1'>Confirm Password</label><br />
        <input type="password" value={password_confirmation} onChange={changeInput} name='password_confirmation'/><br />
        <label className='mt-1 mb-1'>Local store</label><br />
        <select name='store_id' onChange={changeInput} ><br />
           <option value="">Select...</option>
          <option value="1">The Corner Store Network</option>
        </select><br />
        <input className='mt-2 mb-1 signup-button' type="submit" value="Sign Up"/>
      </form>
    </div>
  )
}
