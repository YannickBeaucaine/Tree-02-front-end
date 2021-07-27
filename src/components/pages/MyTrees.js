import React, { useContext } from 'react';
import './Header-style.css';
import TreesCard from '../cards/TreesCard';
import { AuthContext } from '../context/AuthProvider'


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

    return (
        <div>
            <div className="header">
                <div className="header-title">
                        <h1 className="header-font">MY TREES</h1>
                </div>
            </div>
            <TreesCard />
        </div>
    )
}


// export default class Mytrees extends Component {
//     render() {
//         return (
            
//         )
//     }
// }
