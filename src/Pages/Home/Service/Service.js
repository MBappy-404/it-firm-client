import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import ShowService from './ShowService';

const Service = () => {

  const { data: services = [], refetch } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      // setLoading(true)
      const res = await fetch('https://it-farm-server.vercel.app/service');
      const data = await res.json();
      //  setLoading(false)
      return data;

    }
  })
  return (
    <div className='pt-16 bg-gray-100'>
      <div>
        <div class="inline-flex items-center justify-center w-full">
          <hr class="w-48 h-1 my-8 bg-indigo-400 border-0 rounded" />
          <div class="absolute px-4 -translate-x-1/2 bg-gray-100 left-1/2 ">
            <h1 className='text-sm font-semibold py-4 text-center text-indigo-500'> SERVICES</h1>
          </div>
        </div>
        <h2 className='text-3xl md:text-5xl font-bold text-center'>Our Services</h2>
        <p className=' text-md md:text-lg   text-center py-4 px-3 lg:px-48 md:px-20   text-gray-500'>We Are Offering All Kinds of IT Solutions Services.We Are Dedicated To Serve You All Time.  It is a long established <br /> fact that a reader will be  distracted by the readable content of a page when looking at its layout. </p>
      </div>
      <div class="flex justify-center  pt-10">
        <div className='gap-5 px-3 md:px-5 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {
            services.slice(0, 3).map(service => <ShowService
              key={service._id}
              service={service}
              refetch={refetch}
            >
            </ShowService>)
          }
        </div>
      </div>
      <div className='flex justify-center py-16'>
        <button className='inline-block rounded  bg-gradient-to-r from-indigo-700 via-purple-500 to-indigo-500  px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white ' data-te-ripple-init data-te-ripple-color="light">
          <Link to='/allService'>See All Services</Link>
        </button>
      </div>
    </div>
  );
};

export default Service;