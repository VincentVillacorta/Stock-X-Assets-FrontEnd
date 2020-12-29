import React from 'react'
import '../styles/Login.css'

const Login = () => {

    
    return (
        <div className="login-page">
            <div className='login-box'>
                <p>Sign In</p>
                <form className="form-box">
                    <label for="username">Username:</label><br/>
                    <input type="text" id="username"></input><br/>
                    <label for="password">Password:</label><br/>
                    <input type="password" id="password"></input><br/>
                    <div className="button-group">
                        <button>Login</button>
                        <button className="button-right">Create New</button>
                    </div>
                </form>
            </div>
            
        </div>
        
    )
}



export default Login