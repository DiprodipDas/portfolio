import React from 'react';
import Banner from '../Banner/Banner';
import Projects from '../Project/Projects';

const Home = () => {
    return (
        <div className='mx-6'>
           <Banner></Banner>
           <Projects></Projects>
        </div>
    );
};

export default Home;