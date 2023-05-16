import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ShowAllService from './ShowAllService';
import service from '../../Assets/Images/service.jpg'

const AllService = () => {
     const {data: allServices = [], refetch  } = useQuery({
          queryKey:['services'],
          queryFn: async()=>{
            // setLoading(true)
               const res = await fetch('https://it-farm-server.vercel.app/service');
               const data = await res.json();
              //  setLoading(false)
               return data;
               
          }
      })
     return (
          <div>
               <div
                class="relative overflow-hidden zoom bg-cover bg-no-repeat"
                style={{
                  backgroundPosition: "center",
                  backgroundImage: `url(${service})`,
                  height: "400px",
                  backgroundAttachment: "fixed"
                }}>
                <div
                  class="absolute top-0 right-0 bottom-0 left-0 h-full w-full  overflow-hidden  bg-fixed"
                  style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
                  
                  <div class="flex h-full items-center justify-center">
                    <div class="px-6 text-center text-white md:px-12">
                      <h1 class="mb-6 text-3xl md:text-5xl font-bold  leading-tight ">Awesome IT Services  for  <br />
                       <span className='  text-purple-400 '>Your Business</span>
                       </h1>
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
          <div className='flex justify-center bg-gray-50 py-10'>
              <div class=" grid grid-cols-1 px-3 md:px-10 lg:px-0 gap-5 md:gap-5 lg:gap-15 md:grid-cols-2 lg:grid-cols-3 pt-10">
                {
        
                  allServices.map(allService => <ShowAllService 
                    key={allService._id}
                    allService={allService}
                    refetch={refetch}
                  >
                  </ShowAllService>)
        
                }
                 
        
              </div>
          </div>
          </div>
     );
};

export default AllService;