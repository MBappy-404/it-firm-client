import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import about from '../../../Assets/Images/about_22.jpg'

const About = () => {
  return (
    <div>
      <div className='pt-10'>

        <div class="inline-flex items-center justify-center w-full">
          <hr class="w-48 h-1 my-8 bg-indigo-400 border-0 rounded" />
          <div class="absolute px-6 -translate-x-1/2 bg-white left-1/2 ">
            <h1 className='text-sm font-semibold py-4 text-center text-indigo-500'>  ABOUT  </h1>
          </div>
        </div>
        <h2 className='md:text-5xl text-3xl font-bold text-center'>About Us</h2>
        <p className='text-md md:text-lg  text-center py-4 px-3 lg:px-48 md:px-20 text-gray-500'> Our company is comprised of a highly skilled and experienced team of IT professionals. From software developers and network engineers to cybersecurity specialists and project managers, our diverse team brings together a wide range of expertise to meet your unique business needs.</p>
      </div>
      <div
        class="relative  bg-cover bg-center bg-no-repeat">
        <div class="absolute w-full h-full "></div>

        <div className='flex'>
          <div class="relative mx-auto max-w-screen-xl gap-10 px-4 pb-20 pt-5 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-2" >
            {/* image  */}
            <div>
              <img src={about} alt="" className='rounded-md w-full ' />
            </div>
            {/* about content  */}
            <div class="max-w-xl   ">
              <h1 class="text-3xl font-extrabold text-gray-800 mt-10 sm:text-5xl">
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
                  <Link to='/about'>LEARN MORE</Link>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;