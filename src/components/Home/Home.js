import React from 'react';
// import Fotter from '../Fotter/Fotter';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import Headline from '../CustomerHeadline/Headline';

const Home = () => {
    return (
        <div className='mt-4'>
            <Banner></Banner>
            <Headline></Headline>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;