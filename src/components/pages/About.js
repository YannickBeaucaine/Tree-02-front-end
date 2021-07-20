import React, { Component } from 'react'
import AboutCard from '../cards/AboutCard'
import './About.css'

export default class About extends Component {
    render() {
        return (
            <div>
                <div className="partner-header">
                    <div className="partner-title">
                         <h1> ABOUT US</h1>
                    </div>
                </div>
                <AboutCard />
            </div>
        )
    }
}
