import React, { useState } from 'react'
import { useAuth } from './Auth'
import { useNavigate ,useLocation } from 'react-router-dom'

const Login = () => {
    const [user, setUser] = useState("")
    const location=useLocation()
    const redirectpath=location.state?.path ||"/"
    const auth = useAuth()
    const navigate = useNavigate()
    const handellogin = () => {
        auth.login(user)
        navigate(redirectpath,{replace:true})
    }
    return (
        <div>
            <label htmlFor="">username : <input type="text" placeholder='Username'
                name='username' onChange={(e) => setUser(e.target.value)} />
            </label>
            <button type='button' onClick={handellogin}>Login</button>
        </div>
    )
}

export default Login
