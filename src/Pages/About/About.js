import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import about from '../../Assets/Images/about_22.jpg'
import aboutBanner from '../../Assets/Images/About-Us1.jpg'
import Mission from './Mission';

const About = () => {
  return (
    <div>
      <section className='bg-gray-100'>
        <div
          class="relative overflow-hidden zoom bg-cover bg-no-repeat"
          style={{
            backgroundPosition: "center",
            backgroundImage: `url(${aboutBanner})`,
            height: "400px",
            backgroundAttachment: "fixed"
          }}>
          <div
            class="absolute top-0 right-0 bottom-0 left-0 h-full w-full  overflow-hidden  bg-fixed"
          >
            <div class="flex h-full items-center justify-center">
              <div class="px-6 text-center text-white md:px-12">
                <h1 class="mb-6 text-3xl md:text-5xl font-bold">About Us </h1>
                <button
                  type="button"
                  class="inline-block rounded   bg-gradient-to-r from-indigo-700 via-purple-500 to-indigo-500  px-6 pt-2 pb-[6px]  transition duration-150 ease-in-out   "
                  data-te-ripple-init
                  data-te-ripple-color="light">
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="relative   bg-cover bg-center bg-no-repeat">
          <div class="absolute w-full h-full "></div>

          <div className='flex'>
            <div class="relative mx-auto max-w-screen-xl gap-10 px-4 py-20 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-2" >
              <div>
                <img src={about} alt="" className='rounded-md' />
              </div>
              <div class="max-w-xl  sm:text-left">

                <h1 class="text-3xl font-extrabold text-gray-800 mt-5 md:mt-0 sm:text-5xl">
                  <h1 className=' leading-tight '>We Can Take Your Business To The <span className='text-indigo-600'> Next Level.</span> </h1>
                </h1>
                <div className='mt-4 max-w-lg text-gray-500 text-md md:text-lg  '>
                  <p>
                    We are leading business startup consult providing company all over the world doing over 40 years financial services.
                  </p>
                  <br />
                  <p> <FaAngleDoubleRight className='inline text-indigo-600 ml-1' />  we are always ensure to give our best for our customer.</p>
                  <p className='py-2'> <FaAngleDoubleRight className='inline text-indigo-600 ml-1' /> We give professional support by our professional.</p>
                  <p> <FaAngleDoubleRight className='inline text-indigo-600 ml-1' /> Our mission is to provide quality product design.</p>

                </div>
                <div class="mt-12 flex flex-wrap gap-4 text-center">
                  <a
                    href=" "
                    class=" w-full rounded  bg-gradient-to-r from-indigo-700 via-purple-500 to-indigo-500 px-12 py-3 text-sm font-medium text-white shadow focus:outline-none   sm:w-auto"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    data-te-animation-init
                    data-te-animation-reset="true"
                    data-te-animation="[slide-right_1s_ease-in-out]"
                  >
                    GET STARTED
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Mission></Mission>
      </section>

    </div>
  );
};

export default About;