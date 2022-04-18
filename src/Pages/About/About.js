import React from 'react';
import profile from '../../images/profile.jpg';
import './About.css';

const About = () => {
    return (

        <div className='about-container'>
            <div className='about'>
                <h1 className='title'>About Myself</h1>
                <img src={profile} alt="" />
                <p>I am <span className='name'>Md Ariful Islam</span>. I am from Boalkhali, Chattogram, Bangladesh. Recently I have completed my graduation in Computer Sicence and Enginnering. I want to establish my career as an Web Developer. So to proliferate my Programming knowledge and skill now I am doing a fullstack Web Development Course instructed by Jhankar Mahbub. I am fully dedicated and putting my 100% effort to learn all the criteria and complete the course successfully. I am hoping to be a successful skilled Web Developer in future. </p>
            </div>
        </div>
    );
};

export default About;