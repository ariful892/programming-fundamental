import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Course.css';

const Course = ({ course }) => {

    const { id, name, description, picture, price } = course;
    const navigate = useNavigate();

    const navigateToCheckout = () => {
        navigate(`/course/${id}`);
    }

    return (
        <div className='course'>
            <img src={picture} alt="" />
            <h3 className='course-title'>{name}</h3>
            <p className='course-price'>${price}</p>
            <p className='course-description'>{description}</p>
            <button onClick={() => navigateToCheckout(id)} className='course-btn' >BOOK THIS COURSE</button>
        </div>
    );
};

export default Course;