import React from 'react';
import { FaQuoteLeft, FaQuoteRight, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Testimonials = () => {
     return (
          <div>
               <section style={{backgroundImage: `url(https://demo.casethemes.net/itfirm/wp-content/uploads/2022/12/h7-bg-section6.jpg)`, backgroundPosition:"cover"}}  className=" bg-cover  pb-20">
	<div className="container flex flex-col items-center mx-auto  md:p-10">
     <div class="inline-flex items-center justify-center w-full">
          <hr class="w-48 h-1 my-8 bg-indigo-400 border-0 rounded" />
          <div class="absolute px-4 -translate-x-1/2 bg-gray-100 left-1/2 ">
            <h1 className='text-sm font-semibold  text-center text-indigo-500'>TESTIMONIALS</h1>
          </div>
        </div>
		<h1 className=" text-5xl font-bold leading-none text-center">What Saying Our Customers</h1>
	</div>
	 
{/*      
     <div className="container  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto lg:px-10">
		<div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
			<div className="px-4 py-12 rounded-t-lg sm:px-8">
				<p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-600">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
						<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
						<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
					</svg>The support service is always run at the highest possible standard. All issues are resolved with a lot of care. All phone calls and emails are answered very professionally.
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-400">
						<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
						<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
					</svg>
				</p>
			</div>
			<div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
				<img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700" />
				<p className="text-xl font-semibold leading-tight">Distinctio Animi</p>
				<p className="text-sm uppercase">Aliquam illum</p>
			</div>
		</div>
		<div className="flex flex-col max-w-sm    mx-4 my-6 shadow-lg">
			<div className="px-4 py-12 rounded-t-lg sm:px-8">
				<p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-600">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
						<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
						<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
					</svg>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-400">
						<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
						<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
					</svg>
				</p>
			</div>
			<div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
				<img src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700" />
				<p className="text-xl font-semibold leading-tight">Distinctio Animi</p>
				<p className="text-sm uppercase">Aliquam illum</p>
			</div>
		</div>
		<div className="flex flex-col max-w-sm    mx-4 my-6 shadow-lg">
			<div className="px-4 py-12 rounded-t-lg sm:px-8">
				<p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-600">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
						<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
						<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
					</svg>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-400">
						<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
						<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
					</svg>
				</p>
			</div>
			<div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
				<img src="https://source.unsplash.com/50x50/?portrait?3" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700" />
				<p className="text-xl font-semibold leading-tight">Distinctio Animi</p>
				<p className="text-sm uppercase">Aliquam illum</p>
			</div>
		</div>
	 
	</div> */}
     
    <div class="mt-12 grid grid-cols-1 md:grid-cols-2  gap-4 lg:grid-cols-3 md:gap-8 px-2 md:px-5 lg:px-10 pb-20">
      <blockquote class="rounded-lg bg-gray-300 p-8">
        <div class="flex items-center gap-4">
          <img
            alt="Man"
            src="https://demo.casethemes.net/itfirm/wp-content/uploads/2021/10/grid-testimonial-04-60x60.png"
            class="h-16 w-16 rounded-full object-cover"
          />
         

          <div>
            <div class="flex justify-center gap-0.5 text-green-500">
              <FaStar className='w-4 h-4 text-yellow-500'></FaStar>
              <FaStar className='w-4 h-4 text-yellow-500'></FaStar>
              <FaStar className='w-4 h-4 text-yellow-500'></FaStar>
              <FaStar className='w-4 h-4 text-yellow-500'></FaStar>
              <FaStarHalfAlt className='w-4 h-4 text-yellow-500'></FaStarHalfAlt>
            </div>

            <p class="mt-1 text-lg font-medium text-gray-700"> Dusty A. Healey</p>
          </div>
        </div>

        <p class="line-clamp-2 sm:line-clamp-none mt-4   text-gray-600">
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
            <div class="flex justify-center gap-0.5 text-green-500">
              <FaStar className='w-4 h-4 text-yellow-500'></FaStar>
              <FaStar className='w-4 h-4 text-yellow-500'></FaStar>
              <FaStar className='w-4 h-4 text-yellow-500'></FaStar>
              <FaStar className='w-4 h-4 text-yellow-500'></FaStar>
              <FaStar className='w-4 h-4 text-yellow-500'></FaStar>
              
            </div>

            <p class="mt-1 text-lg font-medium text-gray-700"> Sachin Diwar</p>
          </div>
        </div>

        <p class="line-clamp-2 sm:line-clamp-none mt-4 text-gray-600">
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
            <div class="flex justify-center gap-0.5 text-green-500">
              <FaStar className='w-4 h-4 text-yellow-500'></FaStar>
              <FaStar className='w-4 h-4 text-yellow-500'></FaStar>
              <FaStar className='w-4 h-4 text-yellow-500'></FaStar>
              <FaStar className='w-4 h-4 text-yellow-500'></FaStar>
              <FaStarHalfAlt className='w-4 h-4 text-yellow-500'></FaStarHalfAlt>
            </div>

            <p class="mt-1 text-lg font-medium text-gray-700"> G. Dundas</p>
          </div>
        </div>

        <p class="line-clamp-2 sm:line-clamp-none mt-4 text-gray-600">
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