
import React, { Component } from 'react';
import './Header-style.css';
import LoadingSpinner from '../cards/LoadingSpinner'
import './Success-style.css';
import  { Redirect } from 'react-router-dom'



export default class Loading extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }

    componentDidMount(){
        this.setState({ loading: true })
    }

    render() {

        if(this.state.loading) {
            return <Redirect to='/about'/>
        }

        return (
            <div>
                <div className="header">
                  <div className="header-title">
                       <h1 className="header-font">ONE TREE AT A TIME!</h1>
                    </div>
                </div>
                    <LoadingSpinner />
             
       
            </div>
        )
    }
}

