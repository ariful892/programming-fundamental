import React from 'react';
import { ToastContainer } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
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
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let errorElement;

    const from = location.state?.from?.pathname || "/";

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleLogin = event => {
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password);
    }

    const resetPassword = async (event) => {
        const email = event.target.email.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
    }

    return (
        <div className='form-container'>
            <h2 className='title'>Login</h2>
            <SocialLogin></SocialLogin>
            <form className='input-group' onSubmit={handleLogin}>
                <input type="email" name="email" id="" placeholder='Your Email' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input className='form-btn' type="submit" value="Login" />
            </form>
            {errorElement}
            <p className='m-0'>New to Programming Fundamentals?
                <Link className='form-link' to='/register'>Please Register</Link>
            </p>
            <p className='mt-2'>Forget Password?<button className='ps-0 btn btn-link text-warning pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button></p>
            <ToastContainer />
        </div>
    );
};

export default Login;