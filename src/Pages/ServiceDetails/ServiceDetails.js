import React, { useContext } from 'react';
import {  useLoaderData } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { authContext } from '../../AuthProvider/Auth';
 
const ServiceDetails = () => {

    const {user} = useContext(authContext);
     const { description, price, rating, name, logo, _id } = useLoaderData();

     const handleSubmit = (event) =>{

        event.preventDefault()
        const form = event.target;

        const userName = form.userName.value;
        const userRating = form.rating.value;
        const descriptions = form.descriptions.value;
         

        


        const userReview = {
            serviceId: _id,
            serviceName: name,
            name: userName,
            email: user?.email,
            userPhoto: user?.photoURL,
            rating: userRating,
            message: descriptions,
       }

       console.log(userReview);

    //    save data 
    fetch('https://it-farm-server.vercel.app/reviews',{
        method: 'POST',
        headers: {
           'content-type' :' application/json'
        },
        body: JSON.stringify(userReview)
    })

    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.acknowledged){
            form.reset();
        }
    })
        



     }
     return (
          <div>
              
<section class="dark:bg-gray-100">
    <div class="container  py-20 mx-auto">
        <div class="xl:flex xl:items-center">
            <div class="xl:w-1/2 xl:mx-4">
                <h1 class="text-3xl font-semibold text-gray-900 capitalize lg:text-4xl ">{name}</h1>
                
                <p class=" mt-4 text-gray-500 text-justify ">
               {description.slice(0,610)}. <br />
               <div className='flex font-semibold mt-10 justify-start gap-16'>
               <p>Price: {price}</p>
               <p>Rating: {rating} <FaStar className='inline w-4 h-4 text-yellow-400 ml-1 mb-1'></FaStar> </p>
                </div>
                </p>
            </div>
           
            
            <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-0 xl:mx-4 xl:w-1/2 md:grid-cols-1">
                <div>
                    <img class=" rounded-xl" src={logo} alt="img"/>
                    
                     
                </div>
            </div>
        </div>
    </div>

    
</section>
<div className='py-20'>   

<div class="inline-flex items-center justify-center w-full">
          <hr class="w-48 h-1 my-8 bg-indigo-400 border-0 rounded" />
          <div class="absolute px-4 -translate-x-1/2  bg-white left-1/2 ">
            <h1 className='text-sm font-semibold py-4 text-center text-indigo-500'> REVIEW</h1>
          </div>
        </div> 

        <h2 className='text-4xl mb-5 font-bold text-center'>Customer Feedback</h2> 
    
   <div className='flex justify-center'>
          <div class="relative mx-auto px-4  gap-20 sm:px-6 lg:flex  lg:items-center">
            
            <div class="max-w-xl text-center sm:text-left">
            
                 
<section class="  mx-auto px-4 sm:px-6 lg:px-4 py-12">
     
    <div class="w-full py-2">
        <div class="bg-gray-100 rounded-lg p-6">
            <div class="flex items-center space-x-4 mb-4">
                <img class="h-16 w-16 object-cover object-center rounded-full" 
                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="img"/>
                <div>
                    <p class="text-xl text-gray-700 font-semibold mb-1">Dany Bailey</p>
                    <p class="text-base  font-normal">Rating: 4.5 <FaStar className='inline w-4 h-4 text-yellow-400 ml-1 mb-1'></FaStar></p>
                </div>
            </div>
            <div>
                <p class="text-gray-500 leading-loose font-normal text-base"> " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ".</p>
            </div>
        </div>
      
    </div>
</section>
      </div>



            <div>
            <div class="  mx-auto my-4 px-3 ">
                
                <div class="w-full p-8 my-4 md:px-5   mr-auto rounded-2xl shadow-2xl">
                    <div class="flex">
                        <h1 class="font-bold uppercase text-2xl md:text-3xl">Add Review</h1>
                    </div>
                   <form onSubmit={handleSubmit}>
                   <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                        <input name='userName' class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" placeholder="Your name*" />
                        <input name='rating' class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" placeholder="Rating*" />      
                   </div>
                        <div class="my-4">
                            <textarea name='descriptions' placeholder="Write something for this service*" class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                        </div>
                        <div class="my-2 w-1/2 lg:w-1/4">
                            <button type='submit' class="uppercase text-sm font-bold tracking-wide  bg-gradient-to-r from-indigo-700 via-purple-500 to-indigo-500  text-gray-100 p-3 rounded-lg w-full 
                              focus:outline-none focus:shadow-outline"  data-te-ripple-init data-te-ripple-color="light" >
                              Add Now
                              </button>
                        </div>
                   </form>
                    </div>
                </div>
          </div>
          </div>
         
          </div>
         

        </div>
    
          </div>
     );
};

export default ServiceDetails;