import React, { useState } from 'react'

export default function SignupForm() {
  const [signUpForm, setSignUpForm] = useState({
    user:{
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      store_id: ''
    }
  })

  const [errorMessage, setErrorMessage] = useState('')

  const changeInput = e => {
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
      localStorage.setItem('token', data.token)
      localStorage.setItem('name', data.name)
      localStorage.setItem('key', data.key)
      localStorage.setItem('store_id', data.store_id)

    }else{
      setErrorMessage(data)
    }
  }

  const signUpUser = e => {
    e.preventDefault()
    postSignUp()
  }

  const {name, email, password, password_confirmation} = signUpForm
  return (
    <div>
      {errorMessage && Object.keys(errorMessage).map((key) => <p>{key} {errorMessage[key][0]}</p>)}
      <form onSubmit={signUpUser}>
        <label>Name</label><br />
        <input type="text" value={name} onChange={changeInput} name='name'/><br />
        <label>Email</label><br />
        <input type="text" value={email} onChange={changeInput} name='email'/><br />
        <label>Password</label><br />
        <input type="password" value={password} onChange={changeInput} name='password'/><br />
        <label>Confirm Password</label><br />
        <input type="password" value={password_confirmation} onChange={changeInput} name='password_confirmation'/><br />
        <label>Select local store</label><br />
        <select name='store_id' onChange={changeInput} ><br />
          <option value="1">The Corner Store Network</option>
        </select><br />
        <input type="submit" value="Sign Up"/>
      </form>
    </div>
  )
}
