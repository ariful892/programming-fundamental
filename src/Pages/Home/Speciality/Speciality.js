import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faArrowCircleRight, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

const Speciality = () => {
    return (
        <div className='special-container'>
            <h1 className='title'>COURSE SPECIALITY</h1>
            <div>
                <p><FontAwesomeIcon icon={faArrowCircleRight}></FontAwesomeIcon> Lifetime Access</p>
                <p><FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon> Designed from begginer level</p>
                <p><FontAwesomeIcon icon={faArrowCircleRight}></FontAwesomeIcon> Quiz after finishing every module </p>
                <p><FontAwesomeIcon icon={faArrowCircleRight}></FontAwesomeIcon> Performance after every module </p>
                <p><FontAwesomeIcon icon={faArrowCircleRight}></FontAwesomeIcon> Eligible student will get chance in Advance course for free </p>
            </div>
        </div>
    );
};

export default Speciality;