import React, { useEffect, useState } from 'react';
import Course from '../Home/Course/Course';


const Checkout = () => {

    const [specialCourses, setSpecialCourses] = useState([]);
    useEffect(() => {
        fetch('specialCourses.json')
            .then(res => res.json())
            .then(data => setSpecialCourses(data))
    }, []);

    return (
        <div id='courses' className='courses-container'>
            <h2 className='title text-center mb-5'>SPECIAL COURSES</h2>
            <div className="courses">
                {
                    specialCourses.map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Checkout;