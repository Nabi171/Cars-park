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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus obcaecati itaque officia eaque ex modi dolor neque, possimus odit amet beatae non animi facere incidunt? Aut eius inventore rerum at.</p>
        </div>
    );
};

export default Home;