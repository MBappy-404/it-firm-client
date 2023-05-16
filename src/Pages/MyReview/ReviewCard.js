import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
const ReviewCard = ({ review, refetch, setLoading }) => {

  const { serviceRating, serviceName, message, _id } = review;


  const handleUpdate = event => {
    event.preventDefault()

    const form = event.target;
    const updateRating = form.inputRating.value;
    const updateMessage = form.inputMessage.value;
    const updateReview = { updateRating, updateMessage };


    if (updateRating && updateRating === ' ') {
      return alert('please fill input')
    }

    fetch(`https://it-farm-server.vercel.app/reviews/${_id}`, {
      method: "PUT",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updateReview)

    })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        toast.success('Update Successfully!')
        refetch()
        setLoading(false)
      })
  }

  // delete review 
  const handleDelete = id => {

    // const proceed = window.confirm('Are You Sure Delete Review')
    // if (proceed) {
      fetch(`https://it-farm-server.vercel.app/reviews/${id}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json'
        },

      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.deletedCount > 0) {
            refetch()
            toast.success('Delete Successfully!')
            setLoading(false)
          }

        })
    }

  // }



  return (

    <tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
      <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Service Name</span>{serviceName}</td>
      <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Rating</span>{serviceRating}</td>
      <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Review</span>{message?.slice(0, 40)}.....</td>

      <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        <span class="inline-block w-1/3 md:hidden font-bold">Actions</span>

        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded"
          data-te-toggle="modal"
          data-te-target={`#Edit-${_id}`}
          data-te-ripple-init
          data-te-ripple-color="light"
        >Edit
        </button>

        {/* modal body */}

        <div
          data-te-modal-init
          class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
          id={`Edit-${_id}`}
          tabindex="-1"
          aria-labelledby="exampleModalCenterTitle"
          aria-modal="true"
          role="dialog">
          <div
            data-te-modal-dialog-ref
            class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]">
            <div
              class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
              <div
                class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                <h5
                  class="text-xl font-medium leading-normal text-neutral-800 "
                  id="exampleModalScrollableLabel">
                  Update Your Review
                </h5>
                <button
                  type="button"
                  class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                  data-te-modal-dismiss
                  aria-label="Close">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-6 w-6">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <form onSubmit={handleUpdate} >
                <div class="relative p-4">
                  {/* update input  */}
                  <div class=" mx-auto">
                    <div class="flex flex-wrap justify-center  ">
                      <div class="w-full">
                        <div class="relative flex flex-col   break-words w-full mb-6 ">
                          <div class="flex-auto ">
                            <p class="leading-relaxed mt-1 mb-4 text-blueGray-500">
                              You can update your review info.
                            </p>
                            <div class="relative w-full mb-3 mt-8">
                              <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="full-name">Update Rating</label><input name='inputRating' type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none ring w-full ease-linear transition-all duration-150" defaultValue={serviceRating} />
                            </div>
                            <div class="relative w-full mb-3">
                              <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="message">Update Review Message</label><textarea name='inputMessage' rows="4" cols="80" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none ring w-full" defaultValue={message}></textarea>
                            </div>
                            <div class="text-center mt-6">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-300 border-opacity-100 p-4 dark:border-opacity-50">
                  <button
                    id='close'
                    type="submit"
                    class="inline-block rounded bg-primary-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 "
                    data-te-ripple-init
                    data-te-modal-dismiss
                    data-te-ripple-color="light">
                    Update
                  </button>
                  <Toaster />
                </div>
              </form>
            </div>
          </div>
        </div>

        <button onClick={() => handleDelete(_id)} class="bg-red-500 hover:bg-red-700 ml-2 text-white font-bold py-1 px-2 border border-red-500 rounded">Delete</button> <Toaster />
      </td>
    </tr>

  );
};

export default ReviewCard;