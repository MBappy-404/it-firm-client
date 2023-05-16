import React, { useContext, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../AuthProvider/Auth';
import { useForm } from 'react-hook-form';
import { GoogleAuthProvider } from 'firebase/auth';
import toast, { Toaster } from 'react-hot-toast';

const SignIn = () => {
  const { googleProvider, signIn } = useContext(authContext);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [signInError, setSignInError] = useState();
  const provider = new GoogleAuthProvider()
  const navigate = useNavigate()

  const handleSignIn = data => {
    signIn(data.email, data.password)
      .then(result => {
        const user = result.user
        console.log(user);
        // navigate('/home')
        toast.success('Sign In Successfully!')
        let count = 0;
        function incrementCounter() {
             count++;
             if(count === 2){
                  return  navigate('/home')
             }
        }
        setInterval(incrementCounter, 1000);
      })
      .catch(err => {
        setSignInError(err.message)
        console.log(err.message);
      })

  }

  const googleSignIn = () => {

    googleProvider(provider)
      .then(result => {
        const user = result.user
        console.log(user);
        toast.success('Sign In Successfully!')

        let count = 0;
        function incrementCounter() {
             count++;
             if(count === 2){
                  return  navigate('/home')
             }
        }
        setInterval(incrementCounter, 1000);

      })

      .catch(err => {
        console.log(err.message);
        setSignInError(err.message);
      })
  }

  return (
    <div>

      <div class="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1" >
        <div class="lg:w-1/2 xl:w-5/12  sm:p-12">

          <div class="mt-24 md:mt-0 flex flex-col items-center">
            <h1 class="text-2xl xl:text-3xl font-bold">
              Sign In
            </h1>
            <div class="w-full flex-1 mt-8">
              <div class="flex flex-col items-center">
                <button
                  class="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-300 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  onClick={googleSignIn}
                >
                  <div class="bg-white p-2 rounded-full">
                    <svg class="w-4" viewBox="0 0 533.5 544.3">
                      <path
                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                        fill="#4285f4"
                      />
                      <path
                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                        fill="#34a853"
                      />
                      <path
                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                        fill="#fbbc04"
                      />
                      <path
                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                        fill="#ea4335"
                      />
                    </svg>
                  </div>
                  <span class="ml-4">
                    Sign In with Google
                  </span>
                  <Toaster />
                </button>
              </div>

              <div class="my-6 border-b text-center">
                <div
                  class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"
                >
                  Or sign in with e-mail & Password
                </div>
              </div>

              <div class="mx-auto max-w-xs">
                <form onSubmit={handleSubmit(handleSignIn)}>
                  <input
                    class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
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
                    class="mt-5 tracking-wide font-semibold  bg-gradient-to-r from-indigo-700 via-purple-500 to-indigo-500  text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    <FaUser className='w-5 h-5'></FaUser>
                    <span class="ml-3">
                      Sign In
                    </span>
                    <Toaster />
                  </button>
                  {signInError && <p className=' text-center font-bold text-red-600'>{signInError}</p>}
                  <br />
                  <p className='text-center pb-10 md:pb-0 font-semibold'>Don't have an account? <span className='text-indigo-600'> <Link to='/signUp'> Sign Up</Link> </span></p>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div
            class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(https://cdni.iconscout.com/illustration/premium/thumb/user-login-7210570-5857593.png?f=webp)` }}
          ></div>
        </div>
      </div>

    </div>
  );
};

export default SignIn;