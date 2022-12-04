import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'

const Profile = () => {
    const auth = useAuth()
    const navigate = useNavigate()
    const handelLogout=()=>{
        auth.logout();
        navigate("/")
    }
    return (
        <div>

            {auth.user ? `Wellcome Herr ${auth.user}` : ""}
            {auth.user && <button onClick={handelLogout}>Logout</button>}


        </div>
    )
}

export default Profile
