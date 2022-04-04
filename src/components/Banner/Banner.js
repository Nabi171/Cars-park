import React from 'react';
import './Banner.css'
// import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <>
            <div className='banner-img mb-3'>
                <div className="banner-overlay banner-text py-5 d-flex flex-column align-items-center fw-bold">
                    <h6 className='display-5 text-white text-center p-5'>GET CONNECTED WITH CAR</h6>
                    <p className='text-center px-3 lead fw-bold text-white'>We provide the best cars to enjoy the world with the great enthusiam..</p>
                    <button className='btn btn-outline-danger'>
                        {/* <Link to='/form' >Join us</Link> */}
                        JOIN US
                    </button>
                </div>
            </div>
        </>
    );
};

export default Banner;