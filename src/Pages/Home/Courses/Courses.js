import React from 'react';
import useCourses from '../../../hooks/useCourses';

const Courses = () => {
    const { courses } = useCourses();
    return (
        <div>
            <h2>Total courses: {courses.length}</h2>
        </div>
    );
};

export default Courses;