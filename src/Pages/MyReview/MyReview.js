import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { authContext } from '../../AuthProvider/Auth';
import ReviewCard from './ReviewCard';

const MyReview = () => {

     const { user } = useContext(authContext)
     const [loading, setLoading] = useState()

     const { data: reviews = [], refetch } = useQuery({
          queryKey: ['services'],
          queryFn: async () => {
               setLoading(true)
               const res = await fetch(`https://it-farm-server.vercel.app/review?email=${user?.email}`);
               const data = await res.json();
               setLoading(false)
               return data;

          }
     })



     return (
          <div className='pb-20'>
               {/* <!-- Banner --> */}
               <div
                    class="relative overflow-hidden zoom bg-cover bg-no-repeat"
                    style={{
                         backgroundPosition: "center",
                         backgroundImage: `url(https://www.elsevier.com/__data/assets/image/0008/890819/iStock-1074272374-credit-Urupong-1200-x-600.jpg)`,
                         height: "400px",
                         backgroundAttachment: "fixed"
                    }}>
                    <div
                         class="absolute top-0 right-0 bottom-0 left-0 h-full w-full  overflow-hidden  bg-fixed"
                         style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                         <div class="flex h-full items-center justify-center">
                              <div class="px-6 text-center text-white md:px-12">
                                   <h1 class="mb-6 text-3xl md:text-5xl font-bold">Your Reviews</h1>
                                   <p>You have {reviews?.length} Reviews</p>

                              </div>
                         </div>
                    </div>
               </div>

               {/* review table  */}
               <table class="min-w-full border-collapse block md:table">
                    <thead class="block md:table-header-group">
                         <tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                              <th class="bg-gray-500 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Service Name</th>
                              <th class="bg-gray-500 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Rating</th>
                              <th class="bg-gray-500 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Review</th>
                              <th class="bg-gray-500 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Actions</th>
                         </tr>
                    </thead>
                    <tbody class="block md:table-row-group">
                         {
                              loading ? <div class="animate-pulse">
                                   <div className='flex justify-center py-10'>
                                        <div className="w-16  h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div> <span className='text-3xl mt-3 ml-5'>Loading.....</span>
                                   </div>
                              </div>
                                   :
                                   <>
                                        {
                                             reviews.slice(0).reverse().map(review => <ReviewCard
                                                  key={review._id}
                                                  review={review}
                                                  refetch={refetch}
                                                  setLoading={setLoading}

                                             ></ReviewCard>)
                                        }
                                   </>
                         }
                    </tbody>
               </table>
               {
                    reviews.length ? "" : <h1 className='text-xl text-center font-bold py-20 text-gray-500'>Your don't have any review</h1>
               }
          </div>
     );
};

export default MyReview;