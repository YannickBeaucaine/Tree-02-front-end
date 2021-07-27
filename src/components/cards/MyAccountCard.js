import React, {useContext, useState} from 'react';

import { ListGroup, Button } from 'react-bootstrap';
import './MyAccountCard-style.css'
import { AuthContext } from '../context/AuthProvider'

const MyAccountCard = (props) => {
    
    const [auth] = useContext(AuthContext);
    const [isEdit, setIsEdit] = useState(false);
    const [editedUser, setEditedUser] = useState({
        email:auth.email,
        name:auth.name
    });
    const handleSubmit = () => {
        //api to update
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
                            <input placeholder="email" value={editedUser.email} onChange={value => setEditedUser({...editedUser,email:value})}/>
                        
                        </ListGroup.Item>
                        {/* end of email line  */}
                          {/* username line  */}
                          <ListGroup.Item>
                          <input placeholder="email" value={editedUser.name} onChange={value => setEditedUser({...editedUser,name:value})}/>
                            
                        
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

                <Button className='edit-button' variant="danger" size="sm">
                                Delete Account
                            </Button>
                {/* end of mid column*/}
            </div>
        </div>
    </div>
    )
}

export default MyAccountCard;
                             
                       
                        
                      
                       