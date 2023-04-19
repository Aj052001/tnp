import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from "axios";
import '../cssFiles/changePassword.css';
import Loader from './Loader';

export default function ChangePassword(props) {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('jwtToken_tnpWebsite');
        axios.get('http://localhost:5000/api/checkLoginStatus', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                if(response.data.isLoggedIn){
                    props.updateLoggedIn(response.data.isLoggedIn);
                  }else{
                    props.updateLoggedIn(false);
                  }
                setTimeout(()=>{
                    setLoading(false);
                }, 800); 
            })
            .catch(error => {
                console.log(error);
            });
    }, [props]);

    if (loading) {
        return <Loader/>;
    }

    if (!props.isLoggedIn) {
        <Navigate to='/login' />
    }

    return (
        <div className="changePassword" style={{ height: props.windowSize[1] - 2 }}>
            <div className="changePasswordPopup">
                <div className="instructions">
                    <h1>Change Password</h1>
                    <p>Password must contain:</p>
                    <ul className="instructionsForPassword">
                        <li className="instructionsItems">At least 8 characters</li>
                        <li className="instructionsItems">At least 1 number (0 - 9)</li>
                        <li className="instructionsItems">At least 1 special character .-$*#@!+</li>
                    </ul>
                </div>
                <div className="inputBoxes">
                    <form>
                        <input type="password" id="oldPassword" name="oldPassword" placeholder='Old Password' />
                        <input type="password" id="newPassword" name="newPassword" placeholder='New Password' />
                        <input type="password" id="confirmPassword" name="cofirmPassword" placeholder='Confirm Password' />
                        <div>
                            <input type="submit" value="Save" id='submit' />
                            <input type="reset" value="Reset" id='reset' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
