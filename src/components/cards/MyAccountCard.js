import React, {useContext, useState} from 'react';
import { useHistory } from "react-router-dom";
import { ListGroup, Button } from 'react-bootstrap';
import './MyAccountCard-style.css'
import { AuthContext } from '../context/AuthProvider'

const MyAccountCard = (props) => {
    const history = useHistory();
    const [auth, setAuth] = useContext(AuthContext);
    const [isEdit, setIsEdit] = useState(false);
    const [editedUser, setEditedUser] = useState({
        email:auth.email,
        name:auth.name
    });
    const handleSubmit = (e) => {
        //api to update
        e.preventDefault();
        postUpdate().then((response) => {
            sessionStorage.setItem('name', response.name)
            sessionStorage.setItem('email', response.email)
            sessionStorage.setItem('token', response.token)
            setAuth({
                ...auth,
                name: response.name,
                email: response.name
            })
        })
    }

    const changeInput = e => {
        setEditedUser({
            ...editedUser,
            [e.target.name] : e.target.value
        })
      }

    const postUpdate = async () => {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/update`, {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
              'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            },
            body: JSON.stringify(editedUser)
          })
          return await response.json();
    }

    const postDestroy = async () => {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/destroy`, {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
              'Authorization': `Bearer ${auth.token}`
            },
            body: JSON.stringify(editedUser)
          })
          return await response.json();
    }

    const handleDestroy = e => {
        if(window.confirm("Are you sure?")) {
            postDestroy().then(response => console.log(response));
            sessionStorage.clear();
            setAuth({})
            history.push('/');
        }
    }

    return (
        <div className='card-container'>
        <div className='card-long'>
            <div className='row'>
            
            <Button className='edit-button' variant="outline-dark" size="sm" onClick={() => setIsEdit(!isEdit)}>
                                {isEdit?"Cancel":"Edit"}
                            </Button>
                {/* mid column */}
                <div className='col-md-12'>
                    <ListGroup variant="flush">
                        {/* email line  */}
                        {isEdit?<>
                        <ListGroup.Item>
                            <input placeholder="name" value={editedUser.name} onChange={changeInput} name="name"/>
                        
                        </ListGroup.Item>
                        {/* end of email line  */}
                          {/* username line  */}
                          <ListGroup.Item>
                          <input placeholder="email" value={editedUser.email} onChange={changeInput} name="email"/>
                            
                        
                        </ListGroup.Item>

            <Button className='edit-button' variant="outline-dark" size="sm" onClick={handleSubmit}>
                                Submit
                            </Button>
                        </>:<>
                        
                        <ListGroup.Item>
                            < div className='name-left line-one'>
                            {auth.email}
                            </div>
                        </ListGroup.Item>
                        {/* end of email line  */}
                          {/* username line  */}
                          <ListGroup.Item>
                            < div className='name-left line-one'>
                            {auth.name}
                            </div>
                        </ListGroup.Item>
                        </>}
                        {/* end of username line  */}
                          {/* change password line  */}
                        {/* end of change password line  */}
                        {/* delete account line  */}
                        {/* end of delete account line  */}
                    </ListGroup>
                </div>

                <Button onClick={handleDestroy}className='edit-button' variant="danger" size="sm">
                                Delete Account
                            </Button>
                {/* end of mid column*/}
            </div>
        </div>
    </div>
    )
}

export default MyAccountCard;
                             
                       
                        
                      
                       