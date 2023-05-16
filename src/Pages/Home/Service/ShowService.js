import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ShowService = ({ service, refetch }) => {
  const { rating, price, name, logo, description, _id } = service;
  console.log(description);
  return (
    <div>
      <div
        class="block max-w-sm rounded-lg bg-white shadow-lg ">
        <a href="#!">
          <img
            class="rounded-t-lg h-72"
            src={logo}
            alt="" />
        </a>
        <div class="p-6 text-gray-600">
          <h5
            class="mb-2 text-xl font-medium leading-tight  ">
            {name}
          </h5>
          <p class="mb-4 ">
            {description?.slice(0, 120)}...
          </p>
          <div className='font-semibold leading-relaxed'>
            <p>Price: {price}</p>
            <p>Rating: {rating}    <FaStar className='w-4 h-4 inline mb-2 ml-1 text-yellow-400'></FaStar> </p>
          </div>
          <button
            type="button"
            class="inline-block rounded mt-5 bg-gradient-to-r from-indigo-700 via-purple-500 to-indigo-500  px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white "
            data-te-ripple-init
            data-te-ripple-color="light">
            <Link to={`/serviceDetails/${_id}`}> View Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowService;