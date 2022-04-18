import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faArrowCircleRight, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import './Speciality.css';

const Speciality = () => {
    return (
        <div id='speciality' className='special-container'>
            <h1 className='special-title'>COURSE SPECIALITY</h1>
            <div className='special-feature'>
                <p><FontAwesomeIcon icon={faArrowCircleRight}></FontAwesomeIcon> Lifetime Access</p>
                <p><FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon> Designed from begginer level.</p>
                <p><FontAwesomeIcon icon={faArrowCircleRight}></FontAwesomeIcon> Quiz after finishing every module </p>
                <p><FontAwesomeIcon icon={faArrowCircleRight}></FontAwesomeIcon> Performance after every module. </p>
                <p><FontAwesomeIcon icon={faArrowCircleRight}></FontAwesomeIcon> Eligible student will get chance in Advance course for free. </p>
                <p><FontAwesomeIcon icon={faArrowCircleRight}></FontAwesomeIcon> Weekly 2 times problem solving session.</p>
                <p><FontAwesomeIcon icon={faArrowCircleRight}></FontAwesomeIcon> Extra bonus module after every module. </p>
            </div>
        </div>
    );
};

export default Speciality;