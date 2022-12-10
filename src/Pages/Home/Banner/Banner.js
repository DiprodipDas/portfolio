import React from 'react';
import img from '../../../assets/dipro.png'

const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} alt='' className="max-w-xs rounded-xl shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Hi,I am <small className='text-5xl font-bold text-primary'>Diprodip Das</small> </h1>
                    <h2 className="text-4xl mt-6 text-primary font-bold"> <small className='text-4xl text-bold '>A</small> MERN Stack Developer</h2>
                    <p className="py-6">I am a web developer with an amazing ability to develop websites that are both functional and aesthetically pleasing.
                     <br /> I have a strong understanding about creating websites that users will find easy to use and visually appealing.</p>
                    <a href="https://drive.google.com/drive/folders/117UfNXVMHg_njAX6mBM2sY7LdirIADPd?usp=sharing"><button className="btn btn-primary">My Resume</button></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;