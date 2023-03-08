import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { authContext } from '../../AuthProvider/Auth';
import ReviewCard from './ReviewCard';

const MyReview = () => {

     const {user} = useContext(authContext)

     const {data: reviews = [], refetch  } = useQuery({
          queryKey:['services'],
          queryFn: async()=>{
            // setLoading(true)
               const res = await fetch(`https://it-farm-server.vercel.app/review?email${user?.email}`);
               const data = await res.json();
              //  setLoading(false)
               return data;
               
          }
      })
     return (
          <div>
               {/* <!-- component --> */}
<table class="min-w-full border-collapse block md:table ">
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
                    reviews.map(review => <ReviewCard
                    key={review._id}
                    review={review}
                    ></ReviewCard>)
               }
			 			
		</tbody>
	</table>
          </div>
     );
};

export default MyReview;