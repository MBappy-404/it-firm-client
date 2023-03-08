import React from 'react';
import topBanner from '../../Assets/Images/Technology__24.jpg'
import serviceBg from '../../Assets/Images/pattern-8.png'
import './AddService.css'

const AddService = () => {

  const handleSubmit = (event) =>{

    event.preventDefault()

    const form = event.target;
    const name = form.serviceName.value;
    const price = form.servicePrice.value;
    const rating = form.serviceRating.value;
    const logo = form.imageURL.value;
    const description = form.serviceDescription.value;

    const service = {
      name,
      price,
      rating,
      logo,
      description
    }
    // console.log(service);

    fetch('https://it-farm-server.vercel.app/service',{
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(service)
    })

    .then(res => res.json())
    .then(data =>{
      console.log(data)
      if(data.acknowledged){
        form.reset()
      }
    })


  }
     return (
          <div className='bg-gray-100'>

<div
    class="relative overflow-hidden zoom bg-cover bg-no-repeat"
    style={{
      backgroundPosition: "center",
      backgroundImage: `url(${topBanner})`,
      height: "400px",
      backgroundAttachment: "fixed"
    }}>
    <div
      class="absolute top-0 right-0 bottom-0 left-0 h-full w-full  overflow-hidden  bg-fixed"
      style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
      <div class="flex h-full items-center justify-center">
        <div class="px-6 text-center text-white md:px-12">
          <h1 class="mb-6 text-5xl font-bold">Add Your Service</h1>
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

          

               {/* <!-- component --> */}
       <div class="flex justify-center  items-center py-16"
       style={{
         backgroundPosition: "center",
         backgroundImage: `url(${serviceBg})`,
          
       }}
       >
	    {/* <!-- COMPONENT CODE --> */}
	    <div class="container mx-auto my-4 px-4 lg:px-20">
    
	    	<div class="w-full p-8 my-4 bg-white md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
	    		<div class="flex">
	    			<h1 class="font-bold uppercase text-5xl">Add Service</h1>
	    		</div>
          <form onSubmit={handleSubmit}>
	    		<div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
	    			<input name='serviceName' class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" placeholder="Service Name*" required />
	    			<input name='servicePrice' class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" placeholder="Service Price*" required />
	    			<input name='serviceRating' class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" placeholder="Service Rating*" required/>
	    			<input name='imageURL' class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" placeholder="Service Image URL"required />
            </div>
	    			<div class="my-4">
	    				<textarea name='serviceDescription' placeholder="Service Description*" class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" required></textarea>
	    			</div>
	    			<div class="my-2 w-1/2 lg:w-1/4">
	    				<button type='submit' class="uppercase text-sm font-bold tracking-wide  bg-gradient-to-r from-indigo-700 via-purple-500 to-indigo-500  text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"> Add Now
              </button>
	    			</div>
            </form>
	    		</div>

			<div
				class="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-blue-900 rounded-2xl">
				<div class="flex flex-col text-white">
					<h1 class="font-bold uppercase text-4xl my-4">Drop your Service</h1>
					<p class="text-gray-400">Our customers get solutions and business opportunities instead of just projects. Our mission is to accelerate.</p>

					<div class="flex my-4 w-2/3 lg:w-1/2">
						<div class="flex flex-col">
							<i class="fas fa-map-marker-alt pt-2 pr-2" />
            </div>
            <div class="flex flex-col">
              <h2 class="text-2xl">Our Office</h2>
              <p class="text-gray-400"> Omor Plaza, Rajshahi, Bangladesh</p>
            </div>
          </div>
          
          <div class="flex my-4 w-2/3 lg:w-2/3">
            <div class="flex flex-col">
              <i class="fas fa-phone-alt pt-2 pr-2" />
            </div>
            <div class="flex flex-col">
              <h2 class="text-2xl">Call Us</h2>
              <p class="text-gray-400">Tel: + 01 234 567 89</p>
              <p class="text-gray-400">Mail: itfirm@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
</div>

 
          </div>
     );
};

export default AddService;