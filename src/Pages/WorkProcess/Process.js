import React from 'react';
import { FaDiagnoses, FaUserCheck, FaUsers, FaUsersCog } from 'react-icons/fa';

const Process = () => {
  return (
    <div className=''>
      <div className=''>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className=" mb-10 md:mx-auto text-center md:mb-12">
            <div>
              <div class="inline-flex items-center justify-center w-full">
                <hr class="w-48 h-1 my-8 bg-indigo-400 border-0 rounded" />
                <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 ">
                  <h1 className='text-medium font-semibold  text-center text-indigo-500'> PROCESS</h1>
                </div>
              </div>
            </div>
            <h2 className="max-w-lg mb-6  text-3xl font-bold  text-gray-800 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <h2 className='md:text-5xl text-3xl leading-tight font-bold text-center'>How We Work </h2>
              </span>
            </h2>
            <p className=" text-md md:text-lg px-3  lg:px-48   text-gray-500 ">
            Our experienced team of professionals starts working on designing and developing the IT solution.  We follow industry best practices and employ cutting-edge technologies to build robust, scalable, and customized solutions tailored to your specific needs.
            </p>
          </div>
          <div className="grid gap-8 row-gap-0 md:grid-cols-2 lg:grid-cols-4 mt-0 md:pt-7">
            <div className="relative text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-violet-500 sm:w-20 sm:h-20">
                <FaDiagnoses className='w-11 h-11 text-white'></FaDiagnoses>
              </div>
              <h6 className="mb-2 text-2xl font-bold">Discovery</h6>
              <p className=" mb-3 text-medium text-gray-900 sm:mx-auto">
                Join us in a replay of this webinar to see how to go from the first line.
              </p>

              <div className="top-0 right-0 flex animate-bounce md:animate-none items-center justify-center h-24 lg:-mr-8 lg:absolute">
                <svg
                  className="w-8 text-gray-700   transform rotate-90 lg:rotate-0"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <line
                    fill="none"
                    strokeMiterlimit="10"
                    x1="2"
                    y1="12"
                    x2="22"
                    y2="12"
                  />
                  <polyline
                    fill="none"
                    strokeMiterlimit="10"
                    points="15,5 22,12 15,19 "
                  />
                </svg>
              </div>
            </div>
            <div className="relative text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-violet-500 sm:w-20 sm:h-20">
                <FaUsers className='w-10 h-10 text-white'></FaUsers>
              </div>
              <h6 className="mb-2 text-2xl font-bold">Planning</h6>
              <p className=" mb-3 text-medium text-gray-900 sm:mx-auto">
                When we receive your message. Our support team will check the information.
              </p>
              <div className="top-0 right-0 flex animate-bounce md:animate-none items-center justify-center h-24 lg:-mr-8 lg:absolute">
                <svg
                  className="w-8 text-gray-700 transform rotate-90 lg:rotate-0"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <line
                    fill="none"
                    strokeMiterlimit="10"
                    x1="2"
                    y1="12"
                    x2="22"
                    y2="12"
                  />
                  <polyline
                    fill="none"
                    strokeMiterlimit="10"
                    points="15,5 22,12 15,19 "
                  />
                </svg>
              </div>
            </div>
            <div className="relative text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-violet-500 sm:w-20 sm:h-20">
                <FaUsersCog className='w-10 h-10 text-white'></FaUsersCog>
              </div>
              <h6 className="mb-2 text-2xl font-bold">Execute</h6>
              <p className=" mb-3 text-medium text-gray-900 sm:mx-auto">
                Payment has never been so easy. We use reliable and secure payment services.
              </p>
              <div className="top-0 right-0 flex animate-bounce md:animate-none items-center justify-center h-24 lg:-mr-8 lg:absolute">
                <svg
                  className="w-8 text-gray-700 md:hidden lg:block transform rotate-90 lg:rotate-0"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <line
                    fill="none"
                    strokeMiterlimit="10"
                    x1="2"
                    y1="12"
                    x2="22"
                    y2="12"
                  />
                  <polyline
                    fill="none"
                    strokeMiterlimit="10"
                    points="15,5 22,12 15,19 "
                  />
                </svg>
              </div>
            </div>
            <div className="relative text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-green-500 sm:w-20 sm:h-20">
                <FaUserCheck className='w-9 h-9 text-white'></FaUserCheck>
              </div>
              <h6 className="mb-2 text-2xl font-bold">Deliver</h6>
              <p className=" mb-3 text-medium text-gray-900 sm:mx-auto">
                Your privacy will be best guaranteed. Services are paid for through Payoneer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;