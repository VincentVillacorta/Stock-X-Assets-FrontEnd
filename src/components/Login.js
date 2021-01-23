import React,{useState} from 'react'
import '../styles/Login.css'
import {useHistory} from "react-router-dom";

const Login = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    let history = useHistory();

    const onUsername = (event) => {
        setUsername(event.target.value)
    }
    const onPassword = (event) => {
        setPassword(event.target.value)
    }

    const onClickHandler = (option) => {

        let statusCode = 400;
        if(option === 'login'){
            // fetch('http://localhost:3000/users/login', {
            fetch('https://vv-stockx-api.herokuapp.com/users/login', {
                method: 'POST',
                credentials: 'include',
                crossDomain: true,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username, 
                    password: password
                })
        })
            .then(res => {
                statusCode = res.status
                return res.json()})
            .then(result => {
                if(statusCode === 200){
                    props.changeUserInfo(result)
                    history.push('/dashboard')
                }
                else
                    console.log(statusCode)})
        }
        else{
                // fetch('http://localhost:3000/users', {
                fetch('https://vv-stockx-api.herokuapp.com/users', {
                method: 'POST',
                credentials: 'include',
                crossDomain: true,
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
            .then(result => {
                if(statusCode === 201){
                    props.changeUserInfo(result)
                    history.push('/dashboard')
                }
                else
                    console.log(statusCode)})
        }
        
    }

    return (
            <div className='login-box'>
                <h1>Sign In</h1>
                <div className="form-box">
                    <input type="text" id="username" onChange={onUsername} placeholder="Username" ></input><br/>
                    <input type="password" id="password" onChange={onPassword} placeholder="Password"></input><br/>
                    <div className="button-group">
                        <button onClick={() => onClickHandler('login')} className='login-button'>Login</button>
                        <button onClick={() => onClickHandler('create')} className='create-button'>Create New</button>
                    </div>
                </div>
            </div>
        
    )
}



export default Login