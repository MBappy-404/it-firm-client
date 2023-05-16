import React from 'react';
import { FaQuoteLeft, FaQuoteRight, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Testimonials = () => {
  return (
    <div>
      <section style={{ backgroundImage: `url(https://demo.casethemes.net/itfirm/wp-content/uploads/2022/12/h7-bg-section6.jpg)`, backgroundPosition: "cover" }} className=" bg-cover  pb-20">
        <div className="container flex flex-col items-center mx-auto  md:p-10">
          <div class="inline-flex items-center justify-center w-full">
            <hr class="w-48 h-1 my-8 bg-indigo-400 border-0 rounded" />
            <div class="absolute px-4 -translate-x-1/2 bg-gray-100 left-1/2 ">
              <h1 className='text-sm font-semibold  text-center text-indigo-500'>TESTIMONIALS</h1>
            </div>
          </div>
          <h1 className=" md:text-5xl text-3xl  font-bold leading-none text-center">What Saying Our Customers</h1>
        </div>
        <div class="mt-12 grid grid-cols-1 md:grid-cols-2  gap-4 lg:grid-cols-3 md:gap-4 px-2 md:px-5 lg:px-10 pb-20">
          <blockquote class="rounded-lg bg-gray-300 p-8">
            <div class="flex items-center gap-4">
              <img
                alt="Man"
                src="https://demo.casethemes.net/itfirm/wp-content/uploads/2021/10/grid-testimonial-04-60x60.png"
                class="h-16 w-16 rounded-full object-cover"
              />
              <div>
                <div class="flex justify-left gap-0.5 text-green-500">
                  <FaStar className='w-4 h-4 text-yellow-500'></FaStar>
                  <FaStar className='w-4 h-4 text-yellow-500'></FaStar>
                  <FaStar className='w-4 h-4 text-yellow-500'></FaStar>
                  <FaStar className='w-4 h-4 text-yellow-500'></FaStar>
                  <FaStarHalfAlt className='w-4 h-4 text-yellow-500'></FaStarHalfAlt>
                </div>

                <p class="mt-1 text-lg font-medium text-gray-700"> Dusty A. Healey</p>
              </div>
            </div>

            <p class="line-clamp-2 sm:line-clamp-none mt-4   text-gray-800">
              <FaQuoteLeft className='w-4 h-4 inline mr-3'></FaQuoteLeft>
              The support service is always run at the highest possible standard. All issues are resolved with a lot of care. All phone calls and emails are answered very professionally. <FaQuoteRight className='inline w-4 h-4 ml-2'></FaQuoteRight>
            </p>
          </blockquote>
          <blockquote class="rounded-lg bg-gray-300 p-8">
            <div class="flex items-center gap-4">
              <img
                alt="Man"
                src="https://demo.casethemes.net/itfirm/wp-content/uploads/2021/10/grid-testimonial-06-60x60.png"
                class="h-16 w-16 rounded-full object-cover"
              />

              <div>
                <div class="flex justify-left gap-0.5 text-green-500">
                  <FaStar className='w-4 h-4 text-yellow-500'></FaStar>
                  <FaStar className='w-4 h-4 text-yellow-500'></FaStar>
                  <FaStar className='w-4 h-4 text-yellow-500'></FaStar>
                  <FaStar className='w-4 h-4 text-yellow-500'></FaStar>
                  <FaStar className='w-4 h-4 text-yellow-500'></FaStar>

                </div>

                <p class="mt-1 text-lg font-medium text-gray-700"> Sachin Diwar</p>
              </div>
            </div>

            <p class="line-clamp-2 sm:line-clamp-none mt-4 text-gray-800">
              <FaQuoteLeft className='w-4 h-4 inline mr-3'></FaQuoteLeft>
              They have a fantastic team of specialists who are understanding, kind and informative. Their support feels both professional and personal to the company. No issues so far.
              <FaQuoteRight className='inline w-4 h-4 ml-2'></FaQuoteRight>
            </p>
          </blockquote>
          <blockquote class="rounded-lg bg-gray-300 p-8">
            <div class="flex items-center gap-4">
              <img
                alt="Man"
                src="https://demo.casethemes.net/itfirm/wp-content/uploads/2021/10/grid-testimonial-05-60x60.png"
                class="h-16 w-16 rounded-full object-cover"
              />

              <div>
                <div class="flex justify-left gap-0.5 text-green-500">
                  <FaStar className='w-4 h-4 text-yellow-500'></FaStar>
                  <FaStar className='w-4 h-4 text-yellow-500'></FaStar>
                  <FaStar className='w-4 h-4 text-yellow-500'></FaStar>
                  <FaStar className='w-4 h-4 text-yellow-500'></FaStar>
                  <FaStarHalfAlt className='w-4 h-4 text-yellow-500'></FaStarHalfAlt>
                </div>

                <p class="mt-1 text-lg font-medium text-gray-700"> G. Dundas</p>
              </div>
            </div>

            <p class="line-clamp-2 sm:line-clamp-none mt-4 text-gray-800">
              <FaQuoteLeft className='w-4 h-4 inline mr-3'></FaQuoteLeft>
              They have a fantastic team of specialists who are understanding, kind and informative. Their support feels both professional and personal to the company. No issues so far.
              <FaQuoteRight className='inline w-4 h-4 ml-2'></FaQuoteRight>
            </p>
          </blockquote>

        </div>
      </section>
    </div>
  );
};

export default Testimonials;