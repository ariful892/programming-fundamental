import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Checkout = () => {

    const [user] = useAuthState(auth);

    const handleSubmit = () => {
        alert('Thank you for booking');
    }

    return (
        <div style={{ height: '450px' }} className='form-container'>
            <h2 className='title'>Checkout</h2>
            <form className='input-group' onSubmit={handleSubmit} >
                <input type="text" name="name" id="" placeholder='Your Name' required />
                <input type="text" name="email" id="" defaultValue={user.email} />
                <input type="text" name="address" id="" placeholder='Address' required />
                <input type="text" name="phone" id="" placeholder='Phone Number' required />
                <input className='form-btn mt-2' type="submit" value="Submit" />
            </form>
            <ToastContainer></ToastContainer>
        </div>

    );
};

export default Checkout;