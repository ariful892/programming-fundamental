import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Course.css';

const Course = ({ course }) => {

    const { id, name, description, picture, price } = course;
    const navigate = useNavigate();

    const navigateToCourseBook = () => {
        navigate(`/course/${id}`);
    }

    return (
        <div className='course'>
            <img src={picture} alt="" />
            <h3 className='course-title'>{name}</h3>
            <p className='course-price'>${price}</p>
            <p className='course-description'>{description}</p>
            <Link onClick={() => navigateToCourseBook(id)} className='course-btn' to='/checkout'>BOOK THIS COURSE</Link>
        </div>
    );
};

export default Course;