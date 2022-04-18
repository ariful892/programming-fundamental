import React from 'react';
import Banner from '../Banner/Banner';
import Courses from '../Courses/Courses';
import Speciality from '../Speciality/Speciality';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Courses></Courses>
            <Speciality></Speciality>
        </div>
    );
};

export default Home;