import React, {useState} from "react";
import {  Link, useHistory } from "react-router-dom";
import './LoginForm.css'

const LoginForm = ({ asUser, LoggedIn, NotLoggedIn }) => {

const history = useHistory();
const USERS = new Map();
USERS.set('DavidBlomberg', 'test123');

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [displayError, setDisplayError] = useState(false);

function validateForm () {
    if(password === USERS.get(username)) {
        loggingIn();
    } else if(username === 'admin' && password === 'admin') {
        history.push('/admin');
    } else {
        setDisplayError((displayError) => displayError=true) ;
        setUsername((username) => username='');
        setPassword((password) => password='');
    }
}

function loggingIn() {
    LoggedIn();
    history.push('/shopping')
}

function handleSumbit (event) {
    event.preventDefault();
}

    return(
            <div className='Login'>
                <form className='loginForm' onSubmit={handleSumbit}>
                    <h3>Sign in</h3>
                    <label className='labelUsername'>
                        Username:
                        <br/> 
                        <input className='formInputUsername' type="text" placeholder="Enter your username" autoFocus value={username} onChange={(e) => setUsername(e.target.value)}/>
                    </label>
                    <br></br>
                    <label className='labelPassword'>
                        Password:
                        <input type="password" className='formInputPassword'  placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </label>
                    <br></br>
                    <button className='loginButton' onClick={validateForm}>Login</button>
                    <Link to='/shopping'><button className='asGuestButton' onClick={NotLoggedIn}>Shop as guest</button></Link>
                </form>
                { displayError ? <p className='errorLogin'>Incorrect username and/or password</p> : null }
                <h3 className='infoMessage'>Notice: This is only a prototype done for a fictive company, nothing here should be taken too seriously.</h3>
                <h4 className='signature'> David Blomberg</h4>
            </div>
    );
}

export default LoginForm;