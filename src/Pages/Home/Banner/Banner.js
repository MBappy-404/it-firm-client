import React from 'react';
import banner from '../../../Assets/Images/hero-image-circle-1.webp'
 

const Banner = () => {
     return (
          <div>
          <section
          class="relative bg-[url(https://wp.mehedidb.com/utech/wp-content/uploads/2021/06/abs_bg_3.jpg)]   bg-cover bg-center bg-no-repeat">
          <div class="absolute w-full h-full bg-black bg-opacity-50"></div>

          <div className='flex'>
          <div
            class="relative mx-auto max-w-screen-xl px-4 py-20 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
          >
            <div class="max-w-xl text-center sm:text-left">
              <h1 class="text-3xl font-extrabold text-white  sm:text-5xl">
                <h1 className=' leading-tight '>IT Solutions Services For Your Business</h1>
              </h1>

              <p class="mt-4 max-w-lg text-gray-300 sm:text-xl sm:leading-relaxed">
              We are leading business startup consult providing company all over the world doing over 40 years financial services
              </p>

              <div class="mt-8 flex flex-wrap gap-4 text-center">
                 
                <a
                  href="/"
                  class=" w-full rounded  bg-gradient-to-r from-indigo-700 via-purple-500 to-indigo-500 px-12 py-3 text-sm font-medium text-white shadow focus:outline-none   sm:w-auto"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  data-te-animation-init
                  data-te-animation-reset="true"
                  data-te-animation="[slide-right_1s_ease-in-out]"
                >
                  Learn More
                </a>
                
              </div>
            </div>
            <div>
            <img src={banner}  alt="" className='mt-16 md:mt-0' />
          </div>
          </div>
         
          </div>
        </section>
          </div>
     );
};

export default Banner;