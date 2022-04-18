import React from 'react';
import { useParams } from 'react-router-dom';

const CourseBook = () => {

    const { courseId } = useParams();

    return (
        <div>
            <h2>Course Booking: {courseId}</h2>
        </div>
    );
};

export default CourseBook;