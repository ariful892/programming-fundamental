import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        navigate('/home');
    }

    const handleLogin = event => {
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container'>
            <h2 className='login-title'>Login</h2>
            <SocialLogin></SocialLogin>
            <form className='input-group' onSubmit={handleLogin}>
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