import React, { Component } from 'react'
import LoginForm from '../forms/LoginForm'
import DataCard from '../cards/DataCard'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>HOME</h1>
                <LoginForm />
                <DataCard />
            </div>
        )
    }
}
