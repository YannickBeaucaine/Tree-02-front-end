import React, { useContext } from 'react';
import './Header-style.css';
import TreesCard from '../cards/TreesCard';
import GreenWave from '../sections/GreenWave';
import { AuthContext } from '../context/AuthProvider'
import GreenSection from '../sections/GreenSection';
import FarmerCard from '../cards/FarmerCard';


export default function MyTrees() {

    const [auth, setAuth] = useContext(AuthContext);

    if(!auth.loggedIn && sessionStorage.getItem('token')){
        setAuth({
            loggedIn: true,
            name: sessionStorage.getItem('name'),
            email: sessionStorage.getItem('email'),
            token: sessionStorage.getItem('token'),
            key: sessionStorage.getItem('key')
        })
    }

    if (sessionStorage.getAdopter === 'null') {
        sessionStorage.setItem('numberofTrees', 0)
    } else {
        const numberOfTrees = JSON.parse(sessionStorage.getItem('getAdopter')).trees.length
        sessionStorage.setItem('numberofTrees', numberOfTrees)
    }
    

    return (
        <div>
            <div className="header">
                <div className="header-title">
                        <h1 className="header-font">MY TREES</h1>
                </div>
            </div>
            <TreesCard />
            <FarmerCard />
            <GreenWave />
            <GreenSection/>
        </div>
    )
}
