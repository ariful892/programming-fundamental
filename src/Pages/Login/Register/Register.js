import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Register.css';
import { async } from '@firebase/util';
import Loading from '../../Shared/Loading/Loading';


const Register = () => {

    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [errorElement, setErrorElement] = useState('');
    const navigate = useNavigate();

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
        console.log('user', user);
    }

    const handleRegister = async (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        if (password !== confirmPassword) {
            const errorMessage = <p className='text-danger'>Your two password didn't match!</p>
            setErrorElement(errorMessage);
            return;
        }

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });

        navigate('/home');
    }

    return (
        <div className='form-container'>
            <h2 className='title'>Register</h2>
            <SocialLogin></SocialLogin>
            <form className='input-group' onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' required />
                <input type="email" name="email" id="" placeholder='Your Email' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input className='mb-2' type="password" name="confirmPassword" id="" placeholder='Confirm Password' required />
                {errorElement}
                <div className='d-block mt-0 pt-0'>
                    <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                    <label className={`ps-2 pt-0 ${agree ? 'text-success' : 'text-danger'} `} htmlFor="terms">Accept Programming Fundamentals Terms and Conditions</label>
                </div>
                <input disabled={!agree} className='form-btn mt-2' type="submit" value="Register" />
            </form>
            <p>Already have an account?
                <Link className='form-link' to='/login'>Login</Link>
            </p>
        </div>
    );
};

export default Register;