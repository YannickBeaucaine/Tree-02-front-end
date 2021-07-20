import React, { Component } from 'react'
import AboutCard from '../cards/AboutCard'
import './About.css'

export default class About extends Component {
    render() {
        return (
            <div>
                <div className="about-header">
                    <div className="about-title">
                         <h1 className="about-font"> ABOUT US</h1>
                    </div>
                </div>
                <AboutCard />
            </div>
        )
    }
}
