import React, {useContext} from 'react';

import { ListGroup, Button } from 'react-bootstrap';
import './MyAccountCard-style.css'
import { AuthContext } from '../context/AuthProvider'

const MyAccountCard = (props) => {
    
    const [auth, setAuth] = useContext(AuthContext);

    return (
        <div className='card-container'>
        <div className='card-long'>
            <div className='row'>
            
                {/* mid column */}
                <div className='col-md-12'>
                    <ListGroup variant="flush">
                        {/* email line  */}
                        <ListGroup.Item>
                            < div className='name-left line-one'>
                            {auth.email}
                            </div>
                        </ListGroup.Item>
                            <Button className='edit-button' variant="outline-dark" size="sm">
                                Edit Email
                            </Button>
                        {/* end of email line  */}
                          {/* username line  */}
                          <ListGroup.Item>
                            < div className='name-left line-one'>
                            {auth.name}
                            </div>
                        </ListGroup.Item>
                            <Button className='edit-button' variant="outline-dark" size="sm">
                                Edit Username
                            </Button>
                        {/* end of username line  */}
                          {/* change password line  */}
                          <Button className='edit-button' variant="secondary" size="sm">
                                Change Password
                            </Button>
                        {/* end of change password line  */}
                        {/* delete account line  */}
                            <Button className='edit-button' variant="danger" size="sm">
                                Delete Account
                            </Button>
                        {/* end of delete account line  */}
                    </ListGroup>
                </div>
                {/* end of mid column*/}
            </div>
        </div>
    </div>
    )
}

export default MyAccountCard;
                             
                       
                        
                      
                       