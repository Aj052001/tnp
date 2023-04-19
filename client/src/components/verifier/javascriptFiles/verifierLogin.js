import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';

const initialState = {
    "username": "",
    Password: "",
    Name: ""
}

export default function Login(props) {
    const [userDetails, setUserDetails] = useState(initialState);

    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('jwtToken_tnpWebsite2');
        axios.get('http://localhost:5000/api/checkLoginStatus2', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            if(response.data.isLoggedIn){
                props.updateLoggedIn(response.data.isLoggedIn);
                setUserDetails(response.data.user);
            } else {
                props.updateLoggedIn(false);
            }
        })
        .catch(error => {
            console.log(error);
        });
    }, [props]);

    const handleOnSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:5000/apiStudentLogin/post2", userDetails)
            .then((response) => {
                if (response.data.token) {
                    localStorage.setItem('jwtToken_tnpWebsite2', response.data.token);
                    props.updateLoggedIn(response.data.isLoggedIn);
                }
                else {
                    alert("InValid Credentials");
                }
                setUserDetails(initialState);
            }).catch((err) => console.log(err));
    };

    if (props.isLoggedIn) {
        navigate(-1);
    }

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setUserDetails({ ...userDetails, [name]: value });
    }

    return (
        <div className='studentLoginPage'>
            <section id="whole">
                <section id="left">
                    <h1 id="welcome">IIIT Bhopal Training and Placements</h1>
                    <h1 id="slogan">A platform that connects students and companies for placements</h1>
                    <div id="backgroundimage">
                        <div id="hbars">
                            <div id="horizontal"></div>
                        </div>
                        <div id="vbars">
                            <div id="small"></div>
                            <div id="medium"></div>
                            <div id="big"></div>
                            <div id="large"></div>
                        </div>
                    </div>
                </section>
                <section id="container">
                <h1 id="title">Sign in to IIIT Bhopal Placement Portal</h1>
                <div id="portal">
                    <nav id="role">
                    <ul className='loginContent'>
                        <li><Link to="/login">Student</Link></li>
                        <li><Link to="#">Admin</Link></li>
                        <li><Link to="/verifierLogin" style={{fontWeight:"bold", color: "black"}}>Verifier</Link></li>
                    </ul>
                    </nav>
                    <div id="forms">
                    <form>
                        <div className="form-group">
                        <input
                            type="text"
                            id="rollno"
                            name="username"
                            placeholder="username"
                            onChange={handleOnChange}
                        />
                        </div>
                        <div className="form-group">
                        <input
                            type="password"
                            id="password"
                            name="Password"
                            placeholder="Password"
                            onChange={handleOnChange}
                        />
                        </div>
                        <div className="form-buttons">
                            <button type="submit" id='signin' onClick={handleOnSubmit}>Login</button>
                        </div>
                    </form>
                    </div>
                </div>
                </section>
            </section>
        </div>
    )
}
