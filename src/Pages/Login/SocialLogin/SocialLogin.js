import React from 'react';

const SocialLogin = () => {
    return (
        <div className='mt-4 mb-3'>
            <div>
                <button

                    className='btn btn-warning w-50 d-block mx-auto my-3'>
                    <img height={20} src="" alt=''></img>
                    <span className='ps-2'>Continue With Google</span>
                </button>

                <button

                    className='btn btn-dark w-50 d-block mx-auto my-2'>
                    <img height={20} className='me-3' src="" alt=''></img>
                    <span className='ps-2'>Continue With Github</span>
                </button>
            </div>
            <div className='d-flex align-items-center me-4 ms-4'>
                <div style={{ height: '1px' }} className='w-50 bg-primary'>

                </div>
                <p className='mt-2 p-2'>or</p>
                <div style={{ height: '1px' }} className='w-50 bg-primary'>

                </div>

            </div>
        </div>
    );
};

export default SocialLogin;