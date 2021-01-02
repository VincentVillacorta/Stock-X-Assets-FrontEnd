import React,{useState} from 'react'
import '../styles/Login.css'

const Login = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onUsername = (event) => {
        setUsername(event.target.value)
    }
    const onPassword = (event) => {
        setPassword(event.target.value)
    }

    const onClickHandler = (option) => {
        if(option === 'login'){
            // fetch('https://vv-stockx-api.herokuapp.com/users/login', {
            fetch('http://localhost:4000/users/login', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username, 
                    password: password
                })
        })
            .then(res => res.json())
            .then(result => {props.changeUserInfo(result)})
        }
        else{
            // fetch('https://vv-stockx-api.herokuapp.com/users', {
                fetch('http://localhost:4000/users', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username, 
                    password: password
                })
        })
            .then(res => res.json())
            .then(result => {console.log(result)})
        }
        
    }
    
    return (
        <div className="login-page">
            <div className='login-box'>
                <p>Sign In</p>
                <div className="form-box">
                    <input type="text" id="username" onChange={onUsername}></input><br/>
                    <input type="password" id="password" onChange={onPassword}></input><br/>
                    <div className="button-group">
                        <button onClick={() => onClickHandler('login')} >Login</button>
                        <button onClick={() => onClickHandler('create')} className='button-right'>Create New</button>
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}



export default Login