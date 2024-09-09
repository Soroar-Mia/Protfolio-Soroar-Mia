import React from 'react';
import soroarmia from "../assets/Soroarmia.jpg";
import './banner.css';
import './Taxtanimation.css';
const About = () => {
    return (
        <div id='About'>
          <div class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row">
              <div className='p-10  scale-about'><img src={soroarmia} alt="Shoes" class="max-w-sm soroar rounded-lg shadow-3xl" /></div>
              <div className='text-center p-10'>
                <h1 class=" font-bold text-rose-500">Get To Know</h1>
                <h1 class="text-3xl font-bold text-violet-800">About Me</h1>
                <p class="py-6  text-1xl">As a dedicated Full Stack Developer, I bring robust expertise in building and optimizing web applications using Django and React. My technical skill set encompasses a wide range of programming languages and tools, including C++, Python, JavaScript, HTML, CSS, MySQL, MongoDB, Firebase, and frontend frameworks like Bootstrap, Tailwind, and DaisyUI. I am proficient in creating dynamic, user-friendly interfaces and ensuring seamless backend integration. My experience includes developing scalable and efficient applications with a strong focus on performance and user experience. I am committed to continuous learning and am always eager to explore and master new technologies to enhance my skill set and contribute effectively to innovative projects.</p>
                <button type="button">
                <div class="top">Lets'S TALK</div>
                <div class="bottom"></div>
              </button>
              </div>
            </div>
          </div>
        </div>
    );
};

export default About;