import React, { Component } from 'react'
import AboutCard from '../cards/AboutCard'
import './Header-style.css'

export default class About extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <div className="header-title">
                         <h1 className="header-font"> ABOUT US</h1>
                    </div>
                </div>
                <AboutCard />
            </div>
        )
    }
}
