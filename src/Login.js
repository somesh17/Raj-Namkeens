import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { auth } from "./firebase";

function Login() {
    const navigate = useNavigate();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then(auth => {
            navigate('/')
        })
        .catch(error => alert(error.message))
        //some fancy firebase login things....
    }

    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            // It successfully created the new user with password
            
            if (auth) {
                navigate('/')
            }
        })
        .catch(error => alert(error.message))
        //some fancy firebase Register things....
    }

  return (
    <div className='login'>
    <Link to='/'>
        <img 
        className='login__logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
        alt='imges-logos'
        />
    </Link>

    <div className='login__container'>
        <h1>Sign-in</h1>
        <form>
            <h5>Email</h5>
            <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

            <h5>Password</h5>
            <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
            
            <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
        </form>
        <p> By signing-in you agree to Amazon's Conditions of use & sale. Please see our Privacy Notice, our Cookies Notice an dour Interest-Based Ads</p>

        <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>

    </div>

    </div>
  )
}

export default Login