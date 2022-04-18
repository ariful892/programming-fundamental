import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faArrowCircleRight, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

const Speciality = () => {
    return (
        <div className=''>
            <h1>COURSE SPECIALITY</h1>
            <div>
                <p><FontAwesomeIcon icon={faArrowCircleRight}></FontAwesomeIcon> </p>
                <p><FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon> </p>
                <p><FontAwesomeIcon icon={faArrowCircleRight}></FontAwesomeIcon> </p>
                <p><FontAwesomeIcon icon={faArrowCircleRight}></FontAwesomeIcon> </p>
                <p><FontAwesomeIcon icon={faArrowCircleRight}></FontAwesomeIcon> </p>
            </div>
        </div>
    );
};

export default Speciality;