import React, { Component } from 'react';
import './Header-style.css';
import LoadingSpinner from '../cards/LoadingSpinner'
import './Success-style.css';
import queryString from 'query-string';
import  { Redirect } from 'react-router-dom'


export default class SuccessPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false
        }
    }

    componentDidMount() {
        if(!this.state.isLoaded) {
            console.log('start treeo2 call')
            let query = queryString.parse(window.location.search)
            let trees = query.trees
            let store_key = sessionStorage.getItem('store_key')

            let body = {
                jsonrpc: '2.0',
                id: Math.random().toString(36).slice(2),
                method: 'adoptTrees',
                params: {
                    adopter: {
                        name: sessionStorage.getItem('name'),
                        key: sessionStorage.getItem('key'),
                        email: sessionStorage.getItem('email')
                    },
                    trees: trees
                }
            }
            fetch('https://cors-anywhere.herokuapp.com/https://api.test.treeo2.org/rpc', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json, charset=utf-8',
                    'X-AppType': 'Partner',
                    'Authorization': `Bearer ${store_key}`

                },
                body: JSON.stringify(body)
                })
            .then(res => res.json())
            .then(json => {
                sessionStorage.setItem('getAdopter', JSON.stringify(json.result))
            }
            )
        console.log('force update?')
        this.setState({loggedIn: true})
        this.forceUpdate()
        }
    }


    render() {
        if(this.state.isLoaded) {
            console.log('redirect?')
            return <Redirect to='/about'/>
        }
        return (
            <div>
            <div className="header">
                <div className="header-title">
                     <h1 className="header-font"> THANK YOU!</h1>
                </div>
            </div>
            <LoadingSpinner />
            <div>
             
            </div>
        </div>
        )
    }
}
      