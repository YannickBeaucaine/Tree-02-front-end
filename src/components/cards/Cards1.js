import React, { Component } from 'react';
import Card1 from './Card1'

export default class Cards1 extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card1/>
                    </div>
                    <div className="col-md-4">
                        <Card1/>
                    </div>
                    <div className="col-md-4">
                        <Card1/>
                    </div>
                </div>
             </div>
        )
    }
}
