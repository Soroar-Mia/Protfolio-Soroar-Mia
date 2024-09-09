import React from 'react';
import './Taxtanimation.css';
import { Link } from 'react-router-dom';
const Expert = () => {
    return (
        <div className='learn-sec pt-20' id='Expertise' >
            <div class="header my-0">
                <h1 className='text-4xl mb-10 font-semibold text-fuchsia-700'><div class="animation">
                    <div class="first"><div>EXPERTISE</div></div>
                    <div class="second"><div>EXPERTISE</div></div>
                    <div class="third"><div>EXPERTISE</div></div>
                    </div>
                </h1>
            </div>
            <div class="row1-container ">
                <div class="box box-down cyan ">
                    <h2 className='text-3xl text-rose-600'>C++</h2>
                    <p>Top-notch skill in C++ to build your website and give a pro look</p>
                    <img className='h-20 pt-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTQjgi30CoVPxalg0gRM7G5IV0yCBaIeMxvzdU8BwWebq00BU7&s" alt=""/>
                    <Link to="/htmlCourse"><button className='font-semibold pt-7 text-rose-600'>View Details</button></Link>
                </div>

                <div class="box red">
                    <h2 className='text-3xl text-green-600'>Django</h2>
                    <p>Top-notch skill in Django to build your website and give a pro look </p>
                    <img className='h-20 pt-2'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPyxKDoM6tUS54qZ_LdM4r3hgHBcicuZ6edSpkYNks_Ig0zfA&s" alt=""/>
                   <Link to="/jsCourses"> <button type='submit' className='font-semibold pt-7 text-green-600'>View Details</button></Link>
                </div>

                <div class="box box-down blue">
                    <h2 className='text-3xl text-blue-500'>MySQL</h2>
                    <p>Top-notch skill in MySQL to build your website and give a pro look.</p>
                    <img className='h-20 pt-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFAImrznuQ_Hs_37oQnFD1nRC4eL9foP_-5coddWRnOEdzYe5x&s" alt=""/>
                    <button type='submit' className='font-semibold pt-7 text-blue-500'>View Details</button>
                </div>
            </div>
            <div class="row2-container ">
                <div class="box orange">
                    <h2 className='text-3xl text-blue-700'>React</h2>
                    <p>Top-notch skill in React to build your website and give a pro look. </p>
                    <img  className='h-20 pt-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3_RRk6CEQvjvlEN7v6HfYQZl3wo4TgSihgA&usqp=CAU" alt=""/>
                    <button type='submit' className='font-semibold pt-7 text-blue-700'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Expert;