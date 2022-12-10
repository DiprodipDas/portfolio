import React from 'react';
import Contact from '../../Contact/Contact';
import Banner from '../Banner/Banner';
import Projects from '../Project/Projects';

const Home = () => {
    return (
        <div className='mx-6'>
           <Banner></Banner>
           <Projects></Projects>
           <Contact></Contact>
        </div>
    );
};

export default Home;