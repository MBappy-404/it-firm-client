import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { authContext } from '../../AuthProvider/Auth';
import { useQuery } from '@tanstack/react-query';
import toast, { Toaster } from 'react-hot-toast';

const ServiceDetails = () => {

    const { user } = useContext(authContext);
    const { description, price, rating, name, logo, _id } = useLoaderData();
    let date = new Date().toLocaleDateString('en-us', { weekday:"long", month:"long", day:"numeric"});


    const { data: reviews = [], refetch } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            // setLoading(true)
            const res = await fetch(`https://it-farm-server.vercel.app/service/reviews?serviceId=${_id}`);
            const data = await res.json();
            //  setLoading(false)
            return data;

        }
    })

    const handleSubmit = (event) => {

        event.preventDefault()
        const form = event.target;

        const userName = form.userName.value;
        const userRating = form.rating.value;
        const descriptions = form.descriptions.value;

        const userReview = {
            serviceId: _id,
            serviceName: name,
            customerName: userName,
            email: user?.email,
            userPhoto: user?.photoURL,
            serviceRating: userRating,
            message: descriptions,
            reviewDate:date
        }

        console.log(userReview);

        //    save data 
        fetch('https://it-farm-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': ' application/json'
            },
            body: JSON.stringify(userReview)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    form.reset();
                    refetch()
                    toast.success('Review Added')
                }
            })




    }
    return (
        <div>

            {/* service details section  */}
            <div class="bg-gray-100">
                <div class="  py-10 mx-auto">
                    <div class="xl:flex xl:items-center px-5 md:px-16">
                        <div class="xl:w-1/2 xl:mx-4">
                            <h1 class="text-3xl font-semibold text-gray-900 capitalize lg:text-4xl ">{name}</h1>

                            <p class=" mt-4 text-gray-500 text-justify ">
                                {description.slice(0, 610)}. <br />
                                <div className='flex font-semibold mt-10 justify-start gap-16'>
                                    <p>Price: {price}</p>
                                    <p>Rating: {rating} <FaStar className='inline w-4 h-4 text-yellow-400 ml-1 mb-1'></FaStar> </p>
                                </div>
                            </p>
                        </div>

                        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-0 xl:mx-4 xl:w-1/2 md:grid-cols-1">
                            <div>
                                <img class=" rounded-xl" src={logo} alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* review section  */}
            <div className='py-10'>
                <div class="inline-flex items-center justify-center w-full">
                    <hr class="w-48 h-1 my-8 bg-indigo-400 border-0 rounded" />
                    <div class="absolute px-4 -translate-x-1/2  bg-white left-1/2 ">
                        <h1 className='text-sm font-semibold py-4 text-center text-indigo-500'> REVIEW</h1>
                    </div>
                </div>
                <h2 className='md:text-4xl text-3xl mb-5 font-bold text-center'>Customer Feedback</h2>
                <div className='flex justify-center'>
                    <div class=" mx-auto px-4 gap-10  lg:flex  lg:items-center">
                        <div class="  mx-auto px-0 sm:px-6 lg:px-4 py-12">
                            {
                                reviews?.length ?
                                    <>
                                        {
                                            reviews?.map(review =>
                                                <div class="w-[320px]  md:w-[500px] py-2">
                                                    <div class="bg-gray-100 rounded-lg p-6">
                                                        <div class="flex items-center space-x-4 mb-4">
                                                            {
                                                                review?.userPhoto ? <img class="md:h-16 md:w-16 h-12 w-12 object-cover object-center rounded-full"
                                                                    src={review.userPhoto} alt="img" /> :
                                                                    <img class="md:h-16 md:w-16 h-12 w-12 object-cover object-center rounded-full"
                                                                        src="https://assets-prod.sumo.prod.webservices.mozgcp.net/static/default-FFA-avatar.2f8c2a0592bda1c5.png" alt="img" />
                                                            }
                                                            <div>
                                                                <h2 class="text-xl text-gray-700 font-semibold mb-1">{review.customerName}</h2>
                                                                <p class="text-base  font-normal">Rating: {review.serviceRating} <FaStar className='inline w-4 h-4 text-yellow-400 ml-1 mb-1'></FaStar></p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p class="text-gray-500  leading-loose font-normal text-base"> " {review.message} ".</p>
                                                        </div>
                                                        <p className='text-right'>{review.reviewDate}</p>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </>
                                    :
                                    <> <h1 className='text-xl text-gray-600 text-center font-semi-bold'>This service haven't any review</h1></>
                            }
                        </div>

                        {/* Add review section  */}
                        <div class="  mx-auto my-4  ">
                            <div class="w-full p-8 my-4  md:px-5   mr-auto rounded-2xl shadow-2xl">
                                <div class="flex">
                                    <h1 class="font-bold uppercase text-2xl md:text-3xl">Add Review</h1>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                        <input name='userName' class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" placeholder="Your name*" required />
                                        <input name='rating' class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" placeholder="Rating*" required />
                                    </div>
                                    <div class="my-4">
                                        <textarea name='descriptions' placeholder="Write something for this service*" class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline " required></textarea>
                                    </div>
                                    <div class="my-2 w-1/2 lg:w-2/5">

                                        {
                                            user ? <button type='submit' class="uppercase text-sm font-bold tracking-wide  bg-gradient-to-r from-indigo-700 via-purple-500 to-indigo-500  text-gray-100 p-3 rounded-lg w-full 
                            focus:outline-none focus:shadow-outline"  data-te-ripple-init data-te-ripple-color="light" >
                                                Add Now
                                                <Toaster />
                                            </button> :

                                                <Link to='/signIn'> <button type='submit' class="uppercase text-sm font-bold tracking-wide  bg-gradient-to-r from-indigo-700 via-purple-500 to-indigo-500  text-gray-100 p-3 rounded-lg w-full 
                             focus:outline-none focus:shadow-outline"  data-te-ripple-init data-te-ripple-color="light" >
                                                    Please Sign In
                                                </button></Link>
                                        }

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;