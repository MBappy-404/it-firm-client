import React from 'react';
import '../../../App.css'
import { FaBan, FaCheckCircle } from 'react-icons/fa';

const Price = () => {
     return (
          <div className='py-10'>
               <div>
                    <div class="inline-flex items-center justify-center w-full">
                         <hr class="w-48 h-1 my-8 bg-indigo-400 border-0 rounded" />
                         <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 ">
                              <h1 className='text-sm font-semibold py-4 text-center text-indigo-500'>PRICING</h1>
                         </div>
                    </div>
                    <h2 className='text-3xl md:text-5xl font-bold text-center'>Our Pricing Plan</h2>
                    <p className=' text-md  md:text-lg text-center py-4 px-2 md:px-20 lg:px-48 text-gray-500'>At IT Firm, we understand that every business has distinct requirements. Therefore, we also offer the flexibility to customize and scale  our packages according to your specific needs, providing you with the ideal pricing plan that maximizes the value of your IT investments.</p>
               </div>
               <section class="">
                    <div class=" px-2 md:px-6 py-8 mx-auto">
                         <div class="max-w-2xl p-1.5 mx-auto  bg-gray-200 rounded-lg">
                              <div class="grid gap-3 md:grid-cols-2">
                                   {/* monthly & Yearly Tab  */}
                                   <button
                                        data-te-ripple-init
                                        data-te-ripple-color="light"
                                        class="flex items-center  bg-gradient-to-r from-indigo-700 via-purple-500 to-indigo-500    justify-center hover:bg-purple-400    px-3 py-2 font-medium text-white uppercase  rounded-lg    ">
                                        <span class="mx-1">Monthly</span>
                                   </button>
                                   <button
                                        data-te-ripple-init
                                        data-te-ripple-color="light"
                                        class="flex items-center justify-center px-3 py-2 font-medium text-gray-600 uppercase    rounded-lg   hover:bg-gradient-to-r from-indigo-700 via-purple-500 to-indigo-500 hover:text-white transition duration-300 ease-in-out">
                                        <span class="mx-1">Yearly</span>
                                        <span class="text-xs mx-1 font-normal text-white bg-blue-500 rounded-full py-0.5 px-1.5">save 20%</span>
                                   </button>

                              </div>
                         </div>

                         <div class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-4 px-0 lg:px-10 mt-16">
                              {/* plane free  */}
                              <div class="w-full px-6 py-4 transition-colors duration-300 transform rounded-lg   mx-auto md:w-full  bg-gray-200">
                                   <div class="text-center">
                                        <p class="text-2xl font-semibold text-gray-800  ">Free</p>
                                        <p class="mt-4 text-gray-500">No Features</p>
                                        <h4 class="mt-2 text-gray-600 line-through  ">$00.00</h4>
                                        <h4 class="mt-2 text-4xl font-semibold text-gray-800  ">$00.00</h4>
                                        <p class="mt-4 text-gray-500">/per month</p>

                                   </div>
                                   <div class="mt-8 space-y-8">
                                        <div class="flex items-center">
                                             <FaBan className='w-4 h-4 text-red-500' />
                                             <span class="mx-4 text-gray-700">Access all features</span>
                                        </div>
                                        <div class="flex items-center">
                                             <FaCheckCircle className='w-4 h-4 text-blue-500' />
                                             <span class="mx-4 text-gray-700">3 wathclists included</span>
                                        </div>
                                        <div class="flex items-center">
                                             <FaBan className='w-4 h-4 text-red-500' />
                                             <span class="mx-4 text-gray-700">Chat support</span>
                                        </div>
                                        <div class="flex items-center">
                                             <FaBan className='w-4 h-4 text-red-500' />
                                             <span class="mx-4 text-gray-700">Optimize hashtags</span>
                                        </div>
                                        <div class="flex items-center">
                                             <FaBan className='w-4 h-4 text-red-500' />
                                             <span class="mx-4 text-gray-700">5 exclusive widgets</span>
                                        </div>
                                   </div>

                                   <button disabled class="w-full px-4  bg-gradient-to-r from-indigo-700 via-purple-500 to-indigo-500  cursor-not-allowed py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                                        Active Plan
                                   </button>
                              </div>
                              {/* plane basic  */}
                              <div class="w-full px-6 py-4 transition-colors duration-300 transform rounded-lg   mx-auto md:w-full  bg-gray-200">
                                   <div class="text-center">
                                        <p class="text-2xl font-semibold text-gray-800  ">Basic</p>
                                        <p class="mt-4 text-gray-500">Essentail Features</p>
                                        <h4 class="mt-2 text-gray-600 line-through  ">$50.99</h4>
                                        <h4 class="mt-2 text-4xl font-semibold text-gray-800  ">$20.99</h4>
                                        <p class="mt-4 text-gray-500">/per month</p>

                                   </div>
                                   <div class="mt-8 space-y-8">
                                        <div class="flex items-center">
                                             <FaBan className='w-4 h-4 text-red-500' />
                                             <span class="mx-4 text-gray-700">Access all features</span>
                                        </div>
                                        <div class="flex items-center">
                                             <FaCheckCircle className='w-4 h-4 text-blue-500' />
                                             <span class="mx-4 text-gray-700">10+ wathclists included</span>
                                        </div>
                                        <div class="flex items-center">
                                             <FaCheckCircle className='w-4 h-4 text-blue-500' />
                                             <span class="mx-4 text-gray-700">Chat support</span>
                                        </div>
                                        <div class="flex items-center">
                                             <FaBan className='w-4 h-4 text-red-500' />
                                             <span class="mx-4 text-gray-700">Optimize hashtags</span>
                                        </div>
                                        <div class="flex items-center">
                                             <FaCheckCircle className='w-4 h-4 text-blue-500' />
                                             <span class="mx-4 text-gray-700">5 exclusive widgets</span>
                                        </div>
                                   </div>

                                   <button
                                        data-te-ripple-init
                                        data-te-ripple-color="light"
                                        class="w-full px-4 py-2 mt-10  bg-gradient-to-r from-indigo-700 via-purple-500 to-indigo-500  font-medium tracking-wide text-white capitalize transition-colors duration-300 transform   rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                                        Choose Basic
                                   </button>
                              </div>
                              {/* plan pro  */}
                              <div class="w-full relative   transition-colors duration-300 transform rounded-lg mx-auto md:w-full  bg-gray-200">
                                   <div
                                        class="absolute rounded-xl animate-bounce bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/5 translate-x-1/5 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap   bg-indigo-700 px-2.5 py-1 text-center align-baseline text-xs font-bold leading-none text-white">
                                        FOR EXPERTS
                                   </div>

                                   <div class="px-6 py-4">
                                        <div class="text-center">
                                             <p class="text-2xl font-semibold text-gray-800  ">Pro</p>
                                             <p class="mt-4 text-gray-500">Advanced Features</p>
                                             <h4 class="mt-2 text-gray-600 line-through  ">$109.99</h4>
                                             <h4 class="mt-2 text-4xl font-semibold text-gray-800  ">$80.99</h4>
                                             <p class="mt-4 text-gray-500">/per month</p>

                                        </div>

                                        <div class="mt-8 space-y-8">
                                             <div class="flex items-center">
                                                  <FaCheckCircle className='w-4 h-4 text-blue-500' />
                                                  <span class="mx-4 text-gray-700">Access all features</span>
                                             </div>

                                             <div class="flex items-center">
                                                  <FaCheckCircle className='w-4 h-4 text-blue-500' />
                                                  <span class="mx-4 text-gray-700">Unlimited wathclists</span>
                                             </div>

                                             <div class="flex items-center">
                                                  <FaCheckCircle className='w-4 h-4 text-blue-500' />
                                                  <span class="mx-4 text-gray-700">Chat support</span>
                                             </div>

                                             <div class="flex items-center">
                                                  <FaCheckCircle className='w-4 h-4 text-blue-500' />
                                                  <span class="mx-4 text-gray-700">Optimize hashtags</span>
                                             </div>

                                             <div class="flex items-center">
                                                  <FaCheckCircle className='w-4 h-4 text-blue-500' />
                                                  <span class="mx-4 text-gray-700">10+ exclusive pro widgets</span>
                                             </div>
                                        </div>

                                        <button
                                             data-te-ripple-init
                                             data-te-ripple-color="light"
                                             class="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform  bg-gradient-to-r from-indigo-700 via-purple-500 to-indigo-500   rounded-md hover:bg-blue-600 focus:outline-none  ">
                                             Choose Pro
                                        </button>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </div>
     );
};

export default Price;