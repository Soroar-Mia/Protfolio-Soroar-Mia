import React from 'react';
import img from "../assets/coding.gif";
import soroar1 from "../assets/soroar1.jpg";
import './banner.css';

const Banner = () => {
    return (
        <div className='navbarimg' id='Home'>
        <div className="hero px-10  navbarimg min-h-screen">

      <div className="hero-content flex-col lg:flex-row-reverse">

        <div className="sm:w-1/2" >
          <img src={img} className="lg:h-[400px] lg:w-[450px] mx-auto justify-item-end " alt=''/>
        </div>
        <div className='sm:w-1/2 px-2'>
          <h1 className="text-5xl mb-1 font-bold text-fuchsia-700 font-sans">  <div class="animation">
    <div class="first"><div>Hi there!</div></div>
    <div class="second"><div>Hi there!</div></div>
    <div class="third"><div>Hi there!</div></div>
  </div></h1>

          <h1 className="text-5xl ml-2 font-bold text-fuchsia-700 font-sans">I'm Soroar Mia</h1>

          <p className="py-6 ml-2 text-xl text-blue-600">As a dedicated Full Stack Developer with expertise in Django, React, and a wide range of programming languages and tools, I am always up for a challenge and have a deep desire to take myself one step ahead of today.</p>

          <div className='ml-3 mb-4'>
              <button type="button">
                <div className="top"><a href="https://drive.google.com/file/d/1vq3-AbNPlJSWIF5Md70u4_7TJ2VTQ_4b/view?usp=sharing">RESUME</a></div>
                <div className="bottom"></div>
              </button>
              <button className='md:ml-7 lg:ml-9 sm:mt-6' type="button">
                <div className="top"><a href="" >LETS TALK</a></div>
                <div className="bottom"></div>
              </button>
          </div>

               
              

        </div>

      </div>
    </div>
        </div>
        
    );
};

export default Banner;