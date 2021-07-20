import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import LoginForm from '../forms/LoginForm'
import StatsSection from '../sections/StatsSection'

export default function Home() {
    const auth = useContext(AuthContext);
    return (
        <div>
            {auth[0].loggedIn ? <h1>Logged In!</h1> : <h1>Not Logged in!</h1>}
            <h1>HOME</h1>
             <LoginForm />
             <StatsSection />
        </div>
    )
}
