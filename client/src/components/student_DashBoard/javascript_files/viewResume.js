import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Navigate } from 'react-router-dom';
import '../cssFiles/viewResume.css';
import Loader from './Loader';

export default function ViewResume(props) {
    const [educationDetail, setEducationDetails] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const token = localStorage.getItem('jwtToken_tnpWebsite');
        axios.get('http://localhost:5000/api/checkLoginStatus', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                if (response.data.isLoggedIn) {
                    props.updateLoggedIn(response.data.isLoggedIn);
                } else {
                    props.updateLoggedIn(false);
                }
                setTimeout(() => {
                    setLoading(false);
                }, 3000);
            })
            .catch(error => {
                console.log(error);
            });

        if (props.isLoggedIn) {
            axios.get('http://localhost:5000/api/getEducationDetails', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(response => {
                    setEducationDetails(response.data.results[0]);
                })
                .catch(error => {
                    console.log(error);
                })
        }

    }, [props]);

    if (loading) {
        return <Loader />;
    }

    if (!props.isLoggedIn) {
        <Navigate to='/login' />
    }
    let fileurl = "https://drive.google.com/file/d/1TjUOKIG7qcc5smxbYGDxLW4KxcMz8naB/preview";
    if(educationDetail && educationDetail["Scholar No"] === "20U03054"){
        fileurl = "https://drive.google.com/file/d/1whvoYkzV_3Mp7ahBjMtaSxcy5pcFEFgJ/preview";
    }
    return (
        <div className='viewResume'>
            <div style={{color:"black", margin:"20px 300px"}}>
                <iframe title="myResume" src={fileurl} width="640px" height={props.windowSize[1]} allow="autoplay"></iframe>
            </div>
        </div>
    )
}
