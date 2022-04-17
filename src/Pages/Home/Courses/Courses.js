import React from 'react';
import useCourses from '../../../hooks/useCourses';
import Course from '../Course/Course';
import './Courses.css';

const Courses = () => {
    const { courses } = useCourses();
    return (
        <div className='courses-container'>
            <h2 className='text-center mb-5'>COURSES</h2>
            <div className="courses">
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;