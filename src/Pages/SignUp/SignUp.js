import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Assets/Images/LogoBlack.png'
import { useForm } from 'react-hook-form'
import { authContext } from '../../AuthProvider/Auth';
import toast, { Toaster } from 'react-hot-toast';

const SignUp = () => {
     const { register, formState: { errors }, handleSubmit } = useForm();
     const {createUser,updateUser} = useContext(authContext)
     const [signUpError, setSignupError] = useState('')
     const navigate = useNavigate()

     const handleSignup = data =>{

          // create user email pass 
          createUser(  data.email, data.password)
          .then(result => {
               const user = result.user;
               console.log(user);

               const userInfo = {
                    displayName: data.name

               }

               updateUser(userInfo)
               .then(()=>{
                    toast.success('Sign Up Successfully!')
                    let count = 0;
                    function incrementCounter() {
                         count++;
                         if(count === 2){
                              return  navigate('/home')
                         }
                    }
                    setInterval(incrementCounter, 1000);
               })
               .catch(err =>{
                    setSignupError(err.message)
                    console.log(err.message);
               })
          })

          .catch(err =>{
               setSignupError(err.message)
               console.log(err.message);
          })


     }
     return (
          <div>
     <div class="max-w-screen-xl m-0 sm:m-20 mt-16 bg-white shadow sm:rounded-lg flex justify-center flex-1">
      <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
        <div>
          <img
            src={logo}
            class="w-32 mx-auto"
            alt=''
          />
        </div>
        <div class="mt-6 flex flex-col items-center">
          <h1 class="text-2xl xl:text-3xl font-bold">
            Sign up for Itfirm
          </h1>
          <div class="w-full flex-1 mt-8">
          
            <div class="mx-auto max-w-xs">
            <form onSubmit={handleSubmit(handleSignup)}>  
              <input
                class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="text"
                placeholder="Name"
                {...register("name", {
                    required: "Name  is required"
               })}
              />
              <span className='text-red-500 '> {errors.name && <p role="alert">{errors.name?.message}</p>}</span>
              <input
                class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                type="email"
                placeholder="Email"
                {...register("email", {
                    required: "Email Address is required"
               })}
              />
              <span className='text-red-600 '> {errors.email && <p role="alert">{errors.email?.message}</p>}</span>
              <input
                class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                type="password"
                placeholder="Password"
                {...register("password", {
                    required: "Password is required",
                    pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must be more strong' },
                    minLength: { value: 6, message: "Password must be 6 characters or longer" }
               })}
              />
              <span className='text-red-600 '> {errors.password && <p role="alert">{errors.password?.message}</p>}</span>
              <button
                type='submit'
                class="mt-5 tracking-wide font-semibold bg-gradient-to-r from-indigo-700 via-purple-500 to-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <svg
                  class="w-6 h-6 -ml-2"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <path d="M20 8v6M23 11h-6" />
                </svg>
                <span class="ml-3">
                 Sign Up
                 <Toaster/>
                </span>
              </button>

             
              <br />
              {signUpError && <p className=' text-center font-bold text-red-600'>{signUpError}</p>}
              <p className='text-center font-semibold'>Already have an account? <span className='text-indigo-600'> <Link to='/signIn'> Sign In</Link> </span></p>
              </form>  
            </div>
            
          </div>
        </div>
      </div>
      <div class="flex-1 bg-indigo-100 text-center hidden lg:flex">
        <div
          class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
          style={{backgroundImage: `url(https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg)`}}
        ></div>
      </div>
    </div>
          </div>
     );
};

export default SignUp;