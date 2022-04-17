import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='login-title'>Login</h2>
            <SocialLogin></SocialLogin>
            <form className='input-group'>
                <input type="email" name="email" id="" placeholder='Your Email' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input className='form-btn' type="submit" value="Login" />
            </form>
            <p className='m-0'>New to Programming Fundamental?
                <Link className='form-link' to='/register'>Please Register</Link>
            </p>
        </div>
    );
};

export default Login;