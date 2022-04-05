import React from 'react';
import './Banner.css'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <>
            <div className='banner-img mb-3'>
                <div className="banner-overlay banner-text py-5 d-flex flex-column align-items-center fw-bold">
                    <h6 className='display-5 text-white text-center p-4 mt-1 fw-bold'>GET CONNECTED <span className='text-danger'>WITH CAR</span></h6>

                    <p className='text-center px-4 lead fw-bold text-white '>We provide the best cars to enjoy the world with the great enthusiam,here you get the best colletions of cars with unique design and the best quality.So its time to expore the world with our vehicle.We are waiting..</p>
                    
                        <Link className='btn btn-outline-danger' to='/about' >JOIN US</Link>
                        
                    
                </div>
            </div>
        </>
    );
};

export default Banner;