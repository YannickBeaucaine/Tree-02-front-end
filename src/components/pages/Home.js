import React, { Component } from 'react'
import LoginForm from '../forms/LoginForm'
import StatsSection from '../sections/StatsSection'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>HOME</h1>
                <LoginForm />
                <StatsSection />
            </div>
        )
    }
}
