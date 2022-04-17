import React from 'react';
import './Course.css';

const Course = ({ course }) => {

    const { name, description, picture, price } = course;

    return (
        <div className='course'>
            <img src={picture} alt="" />
            <h3 className='course-title'>{name}</h3>
            <p className='course-price'>${price}</p>
            <p className='course-description'>{description}</p>
            <button className='course-btn'>BOOK THIS COURSE</button>
        </div>
    );
};

export default Course;