import React from 'react';
// import Fotter from '../Fotter/Fotter';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import Headline from '../CustomerHeadline/Headline';
import FotterLast from '../FotterLast/FotterLast';


const Home = () => {
    return (
        <div className='mt-4'>
            <Banner></Banner>
            <Headline></Headline>
            <Reviews></Reviews>
            <FotterLast></FotterLast>
        </div>
    );
};

export default Home;