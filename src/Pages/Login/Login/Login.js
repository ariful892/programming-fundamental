import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    const emailRef = useRef('');
    const passwordRef = useRef('');
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
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
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
                <input ref={emailRef} type="email" name="email" id="" placeholder='Your Email' required />
                <input ref={passwordRef} type="password" name="password" id="" placeholder='Password' required />
                <input className='form-btn' type="submit" value="Login" />
            </form>
            {errorElement}
            <p className='m-0'>New to Programming Fundamentals?
                <Link className='form-link' to='/register'>Please Register</Link>
            </p>
            <p className='mt-2'>Forget Password?<button className='reset-btn ' onClick={resetPassword}>Reset Password</button></p>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;