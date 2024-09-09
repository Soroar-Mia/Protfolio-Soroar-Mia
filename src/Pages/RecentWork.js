import React from 'react';
import p1 from "../assets/p11.png";
import p2 from "../assets/p22.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";
import p7 from "../assets/p7.png";
import p8 from "../assets/p8.png";
import p9 from "../assets/p9.png";
import './Taxtanimation.css';

const RecentWork = () => {
    return (
        <div className='px-20 py-20' id='RecentWork'>
            <h1 className='text-4xl text-fuchsia-700 text-center mb-20'>
                <div class="animation">
                    <div class="first"><div>MY RECENT WORK</div></div>
                    <div class="second"><div>MY RECENT WORK</div></div>
                    <div class="third"><div>MY RECENT WORK</div></div>
                </div>
            </h1>
            <div class="grid  md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-8">
                <div class="block">
                <div class="card  bg-base-100 shadow-xl scale">
                    <figure><img src={p6} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Coders Clinic</h2>
                        <h1>Technology Used: HTML, CSS, Tailwind, JavaScript, React, MongoDB, Firebase.</h1>
                        <div class="card-actions justify-end">
                        <label for="my_modal_1" class="btn btn-outline btn-accent">Overview</label>

                        <input type="checkbox" id="my_modal_1" class="modal-toggle" />
                        <div class="modal" role="dialog">
                        <div class="modal-box">
                            <p class="py-4">
                            <ul>
                                <li>● Interactive functional Dashboard panel with API management for both admin and the general user.</li>
                                <li>● Login, registration, and reviews are available and Responsive design.</li>
                                <li>● Authentication system and reviews are available.</li>
                            </ul>
                            </p>
                        </div>
                        <label class="modal-backdrop" for="my_modal_1">Close</label>
                        </div>
                        <a href="https://github.com/akilinjamam/coders-clinic" class="btn btn-outline btn-primary">GITHUB</a>
                        <a href="https://coders-clinic-fc76f.web.app/" class="btn btn-outline btn-secondary">LIVE DEMO</a>
                        </div>
                    </div>
                </div>
                </div>
                <div  class="block">
                    <div class="card  bg-base-100 shadow-xl scale">
                    <figure><img src={p1} alt="Shoes" /></figure>
                    <div class="card-body ">
                        <h2 class="card-title">Mughal Resturant </h2>
                        <h1>Technology Used: HTML, CSS, Tailwind, JavaScript, Python, Django.</h1>
                        <div class="card-actions justify-end">
                            

                        <label for="my_modal_2" class="btn btn-outline btn-accent">Overview</label>

                        <input type="checkbox" id="my_modal_2" class="modal-toggle" />
                        <div class="modal" role="dialog">
                        <div class="modal-box">
                            <p class="py-4">
                            <ul>
                                <li>Developed a responsive restaurant website with an interactive UI, utilizing Tailwind CSS and JavaScript for a seamless user experience.</li>
                                <li>JWT Authentication system: Login, registration, and reviews are available, and the design is responsive.</li>
                                <li>Built with Django on the backend for robust and scalable web development, integrating RESTful APIs for communication between the frontend and backend.</li>
                            </ul>
                            </p>
                        </div>
                        <label class="modal-backdrop" for="my_modal_2">Close</label>
                        </div>


                        <a href=" https://github.com/Soroar-Mia/manufacturer-website-client" class="btn btn-outline btn-primary">GITHUB</a>
                        <a href="https://66dda6065363bf42322672e9--voluble-pasca-f99c82.netlify.app/" class="btn btn-outline btn-secondary">LIVE DEMO</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="block">
                    <div class="card  bg-base-100 shadow-xl scale">
                    <figure><img src={p2} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">SR-Property</h2>
                        <h1>Technology Used: HTML, CSS, Tailwind, JavaScript, Python, Django.</h1>
                        <div class="card-actions justify-end">
                        <label for="my_modal_3" class="btn btn-outline btn-accent">Overview</label>

                        <input type="checkbox" id="my_modal_3" class="modal-toggle" />
                        <div class="modal" role="dialog">
                        <div class="modal-box">
                            <p class="py-4">
                            <ul>
                                <li>● Options for buying, selling, and renting properties.</li>
                                <li>● User authentication with login and registration functionalities.</li>
                                <li>● Integration of RESTful APIs for seamless communication between the frontend and backend.</li>
                            </ul>
                            </p>
                        </div>
                        <label class="modal-backdrop" for="my_modal_3">Close</label>
                        </div>
                        <a href="https://github.com/Soroar-Mia/sr_property" class="btn btn-outline btn-primary">GITHUB</a>
                        <a href="https://jade-seahorse-b8e2aa.netlify.app/" class="btn btn-outline btn-secondary">LIVE DEMO</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="block">
                    <div class="card  bg-base-100 shadow-xl scale">
                    <figure><img src={p3} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Independent Service Provider</h2>
                        <h1>Technology Used: HTML, CSS, Tailwind, JavaScript, React, MongoDB, Firebase, Heroku.</h1>
                        <div class="card-actions justify-end">
                        <label for="my_modal_4" class="btn btn-outline btn-accent">Overview</label>

                        <input type="checkbox" id="my_modal_4" class="modal-toggle" />
                        <div class="modal" role="dialog">
                        <div class="modal-box">
                            <p class="py-4">
                            <ul>
                                <li>● Interactive functional Dashboard panel with API management for both admin and the general user.</li>
                                <li> Login, registration, and reviews are available and Responsive design.</li>
                                <li>● Authentication system and reviews are available.</li>
                            </ul>
                            </p>
                        </div>
                        <label class="modal-backdrop" for="my_modal_4">Close</label>
                        </div>
                        <a href=" https://github.com/Soroar-Mia/independent-service-provider" class="btn btn-outline btn-primary">GITHUB</a>
                        <a href=" https://private-tutor-c96e1.web.app" class="btn btn-outline btn-secondary">LIVE DEMO</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="block">
                    <div class="card  bg-base-100 shadow-xl scale">
                    <figure><img src={p4} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">BEST CAR PARTS</h2>
                        <h1>Technology Used: HTML, CSS, Tailwind, JavaScript, React, MongoDB, Firebase, Heroku.</h1>
                        <div class="card-actions justify-end">
                        <label for="my_modal_5" class="btn btn-outline btn-accent">Overview</label>

                        <input type="checkbox" id="my_modal_5" class="modal-toggle" />
                        <div class="modal" role="dialog">
                        <div class="modal-box">
                            <p class="py-4">
                            <ul>
                                <li>● Interactive functional Dashboard panel with API management for both admin and the general user.</li>
                                <li> Login, registration, and reviews are available and Responsive design.</li>
                                <li>● Authentication system and reviews are available.</li>
                            </ul>
                            </p>
                        </div>
                        <label class="modal-backdrop" for="my_modal_5">Close</label>
                        </div>
                        <a href="https://github.com/akilinjamam/coders-clinic" class="btn btn-outline btn-primary">GITHUB</a>
                        <a href="https://coders-clinic-fc76f.web.app/" class="btn btn-outline btn-secondary">LIVE DEMO</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="block">
                    <div class="card  bg-base-100 shadow-xl scale">
                    <figure><img src={p5} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Books Shop</h2>
                        <h1>Technology Used: HTML, CSS, Tailwind, JavaScript, React, MongoDB, Firebase, Heroku.</h1>
                        <div class="card-actions justify-end">
                        <label for="my_modal_6" class="btn btn-outline btn-accent">Overview</label>

                        <input type="checkbox" id="my_modal_6" class="modal-toggle" />
                        <div class="modal" role="dialog">
                        <div class="modal-box">
                            <p class="py-4">
                            <ul>
                                <li>● Interactive functional Dashboard panel with API management for both admin and the general user.</li>
                                <li> Login, registration, and reviews are available and Responsive design.</li>
                                <li>● Authentication system and reviews are available.</li>
                            </ul>
                            </p>
                        </div>
                        <label class="modal-backdrop" for="my_modal_6">Close</label>
                        </div>
                        <a href="https://github.com/akilinjamam/coders-clinic" class="btn btn-outline btn-primary">GITHUB</a>
                        <a href="https://coders-clinic-fc76f.web.app/" class="btn btn-outline btn-secondary">LIVE DEMO</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="block">
                    <div class="card  bg-base-100 shadow-xl scale">
                    <figure><img src={p7} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Select Best Five Player</h2>
                        <h1>Technology Used: HTML, CSS, Tailwind, JavaScript, React, MongoDB, Firebase, Heroku.</h1>
                        <div class="card-actions justify-end">
                        <label for="my_modal_7" class="btn btn-outline btn-accent">Overview</label>

                        <input type="checkbox" id="my_modal_7" class="modal-toggle" />
                        <div class="modal" role="dialog">
                        <div class="modal-box">
                            <p class="py-4">
                            <ul>
                                <li>● Interactive functional Dashboard panel with API management for both admin and the general user.</li>
                                <li> Login, registration, and reviews are available and Responsive design.</li>
                                <li>● Authentication system and reviews are available.</li>
                            </ul>
                            </p>
                        </div>
                        <label class="modal-backdrop" for="my_modal_7">Close</label>
                        </div>
                        <a href="https://github.com/Soroar-Mia/Select-Best-Five-Player" class="btn btn-outline btn-primary">GITHUB</a>
                        <a href="https://effortless-snickerdoodle-48d55c.netlify.app" class="btn btn-outline btn-secondary">LIVE DEMO</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="block">
                    <div class="card  bg-base-100 shadow-xl scale">
                    <figure><img src={p8} alt="Shoes" /></figure>
                    <div class="card-body mb-5">
                        <h2 class="card-title ">Bank Balance Calcuation</h2>
                        <h1>Technology Used: HTML, CSS, Tailwind, JavaScript, React, MongoDB, Firebase, Heroku.</h1>
                        <div class="card-actions justify-end">
                        <label for="my_modal_8" class="btn btn-outline btn-accent">Overview</label>

                        <input type="checkbox" id="my_modal_8" class="modal-toggle" />
                        <div class="modal" role="dialog">
                        <div class="modal-box">
                            <p class="py-4">
                            <ul>
                                <li>● Interactive functional Dashboard panel with API management for both admin and the general user.</li>
                                <li> Login, registration, and reviews are available and Responsive design.</li>
                                <li>● Authentication system and reviews are available.</li>
                            </ul>
                            </p>
                        </div>
                        <label class="modal-backdrop" for="my_modal_8">Close</label>
                        </div>
                        <a href="https://github.com/Soroar-Mia/Baper-Bank" class="btn btn-outline btn-primary">GITHUB</a>
                        <a href="https://timely-sopapillas-6633a0.netlify.app" class="btn btn-outline btn-secondary">LIVE DEMO</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="block">
                    <div class="card  bg-base-100 shadow-xl scale">
                    <figure><img src={p9} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">News Todayc</h2>
                        <h1>Technology Used: HTML, CSS, Tailwind, JavaScript, React, MongoDB, Firebase, Heroku.</h1>
                        <div class="card-actions justify-end">
                        <label for="my_modal_9" class="btn btn-outline btn-accent">Overview</label>

                        <input type="checkbox" id="my_modal_9" class="modal-toggle" />
                        <div class="modal" role="dialog">
                        <div class="modal-box">
                            <p class="py-4">
                            <ul>
                                <li>● Interactive functional Dashboard panel with API management for both admin and the general user.</li>
                                <li> Login, registration, and reviews are available and Responsive design.</li>
                                <li>● Authentication system and reviews are available.</li>
                            </ul>
                            </p>
                        </div>
                        <label class="modal-backdrop" for="my_modal_9">Close</label>
                        </div>
                        <a href="https://github.com/Soroar-Mia/News-Todayc" class="btn btn-outline btn-primary">GITHUB</a>
                        <a href="https://silly-mochi-063936.netlify.app" class="btn btn-outline btn-secondary">LIVE DEMO</a>
                        </div>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RecentWork;