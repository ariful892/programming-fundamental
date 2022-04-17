import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

import banner1 from '../../../images/banner/banner1.png';
import banner2 from '../../../images/banner/banner2.png';
import banner3 from '../../../images/banner/banner3.png';
import banner4 from '../../../images/banner/banner4.png';

const Banner = () => {
    return (
        <div className='mt-3'>
            <h1 className='text-center fs-1 mb-4'>Programming <span className='text-warning'>Fundamental</span></h1>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Hardwork</h3>
                        <p>Do the hardwork now you will get the result by the end of the day.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Focused</h3>
                        <p>Keep focus on your track.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className='text-success fw-bold'>
                        <h3>Patience</h3>
                        <p>Don't loose hope. You will shine one day.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner4}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='text-success fw-bold'>
                        <h3>Belief</h3>
                        <p>Keep belief on yourself. You can do it.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;