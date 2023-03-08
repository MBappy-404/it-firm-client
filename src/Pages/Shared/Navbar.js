import React, { useContext } from 'react';
import logo from '../../Assets/Images/Logo.png'
import { FaEnvelope, FaFacebookF, FaLinkedin, FaMapMarkedAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { authContext } from '../../AuthProvider/Auth';

const Navbar = () => {
  const {user,signOut} = useContext(authContext)
  const handleLogOut = (event) => {
    event.preventDefault()
    signOut()
         .then()
         .catch()

}
  return (
    <div>

      {/* top nav  */}
      <div className='hidden md:block'>
        <div className='flex  text-gray-500 justify-center gap-10 py-6'>
          {/* contact  */}

          <div className='border-r-2 pr-7  border-gray-300'> <FaPhoneAlt className='inline mr-1 text-indigo-600 w-4 h-4 '></FaPhoneAlt> (678) 345-3456</div>
          <div className='border-r-2 pr-7  border-gray-300' > <FaMapMarkedAlt className='inline mr-1 mb-1 text-indigo-600 w-4 h-4'></FaMapMarkedAlt> Omor Plaza, Rajshahi, Bangladesh </div>
          <div className='border-r-2 pr-7 ' >  <FaEnvelope className='inline mr-1 text-indigo-600 w-4 h-4'></FaEnvelope> itfirm11@gmail.com </div>

          {/* Social icons  */}
          <div className='flex gap-3 mt-1'>
            <FaFacebookF className='w-4 h-4'></FaFacebookF>
            <FaLinkedin className='w-4 h-4'></FaLinkedin>
            <FaWhatsapp className='w-4 h-4'></FaWhatsapp>
          </div>
        </div>
      </div>
      <nav
        class="flex-no-wrap relative flex w-full items-center border-t-2 justify-between bg-white py-4    lg:flex-wrap lg:justify-start" data-te-navbar-ref>

        <div class="flex w-full flex-wrap items-center justify-between px-6">
          <button
            class="block border-0 bg-transparent py-2 px-2.5 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent1"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="[&>svg]:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-7 w-7 text-black">
                <path
                  fill-rule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clip-rule="evenodd" />
              </svg>
            </span>
          </button>
          <div
            class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
            id="navbarSupportedContent1"
            data-te-collapse-item>
            <a
              class="mt-2 mr-2 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mt-0"
              href=" ">
              <img
                src={logo}
                style={{ height: "55px" }}
                alt=""
                loading="lazy" />
            </a>
            {/* <!-- Left links --> */}
            <ul
              class="list-style-none mr-auto text-md font-semibold flex flex-col pl-0 ml-0 md:ml-20   sm:pt-4 md:pt-0 lg:flex-row"
              data-te-navbar-nav-ref>
              <li class="lg:pr-2" data-te-nav-item-ref>
                <a
                  class="dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
                  href=" "
                  data-te-nav-link-ref
                > <Link to='/home'>Home</Link> </a
                >
              </li>
              <li class="lg:pr-2" data-te-nav-item-ref>
                <a
                  class="dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  href=" "
                  data-te-nav-link-ref
                > <Link to='/addService'>Add Service</Link> </a
                >
              </li>
              <li class="lg:pr-2" data-te-nav-item-ref>
                <a
                  class="dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  href=" "
                  data-te-nav-link-ref
                > <Link to='/myReview'>My Review</Link> </a
                >
              </li>
              <li class="lg:pr-2" data-te-nav-item-ref>
                <a
                  class="dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  href=" "
                  data-te-nav-link-ref
                ><Link to='/about'>About Us</Link></a
                >
              </li>
              <li class="lg:pr-2" data-te-nav-item-ref>
                <a
                  class="dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  href=" "
                  data-te-nav-link-ref
                > {
                   
                  user? <><Link onClick={handleLogOut}>Log Out </Link> </> :  <><Link to='/signIn'>Sign In</Link></>

                } 
                </a
                >
              </li>
            </ul>
            {/* <!-- Left links --> */}
          </div>
          {/* <!-- Collapsible wrapper --> */}

          {/* <!-- Right elements --> */}
          <div class="relative flex  items-center">
            {/* <!-- Icon --> */}
           
           
            <div class="relative " data-te-dropdown-ref>
              <a
                class="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                href=" "
                id="dropdownMenuButton2"
                role="button"
                data-te-dropdown-toggle-ref
                aria-expanded="false">
                <img
                  src={
                    user? user?.photoURL : '"https://tecdn.b-cdn.net/img/new/avatars/2.jpg"'
                  }
                  class="rounded-full"
                  style={{ height: "45px", width: "45px" }}
                  alt=""
                  loading="lazy" />
              </a>
              <ul
                class="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none  bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-500  bg-clip-padding text-left text-base shadow-lg  [&[data-te-dropdown-show]]:block"
                aria-labelledby="dropdownMenuButton2"
                data-te-dropdown-menu-ref>
                <li>
                  <a
                    class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                    href=" "
                    data-te-dropdown-item-ref
                  >{user? user?.displayName:'Anonymous'}</a
                  >
                </li>
                <li>
                  <a
                    class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                    href=" "
                    data-te-dropdown-item-ref
                  >{user? user?.email:'email not found'}</a
                  >
                </li>
                <li>
                  <a
                    class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                    href=" "
                    data-te-dropdown-item-ref
                  >Profile</a
                  >
                </li>
              </ul>
            </div>
          </div>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;