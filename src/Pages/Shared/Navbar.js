import React, { useContext } from 'react';
import logo from '../../Assets/Images/Logo.png'
import logoBlack from '../../Assets/Images/LogoBlack.png'
import { FaEnvelope, FaFacebookF, FaLinkedin, FaMapMarkedAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../AuthProvider/Auth';


const Navbar = () => {
  const { user, logOut } = useContext(authContext)
  // console.log(user);
  const navigate = useNavigate()
  const handleLogOut = (event) => {
    event.preventDefault()

    logOut()
      .then()
      .catch()

  }

  const handleToggle = () => {

    document.getElementById('sidenav-1').classList.remove("hidden");

  }
  return (
    <div>

      {/* top nav  */}
      <div className='hidden md:block'>
        <div className='flex  text-gray-600 justify-center gap-16 py-6'>
          {/* contact  */}

          <div className='flex gap-5'>
            <div className='border-r-2 pr-7  border-gray-300'> <FaPhoneAlt className='inline mr-1 text-indigo-600 w-4 h-4 '></FaPhoneAlt> (678) 345-3456</div>
            <div className='border-r-2 pr-7  border-gray-300' > <FaMapMarkedAlt className='inline mr-1 mb-1 text-indigo-600 w-4 h-4'></FaMapMarkedAlt> Omor Plaza, Rajshahi, Bangladesh </div>
            <div className='border-r-2 pr-7 ' >  <FaEnvelope className='inline mr-1 text-indigo-600 w-4 h-4'></FaEnvelope> itfirm11@gmail.com </div>
          </div>

          {/* Social icons  */}
          <div className='flex gap-3 mt-1'>
            <FaFacebookF className='w-4 h-4 cursor-pointer hover:text-blue-700'></FaFacebookF>
            <FaLinkedin className='w-4 h-4 cursor-pointer  hover:text-blue-700'></FaLinkedin>
            <FaWhatsapp className='w-4 h-4 cursor-pointer  hover:text-blue-700'></FaWhatsapp>
          </div>
        </div>
      </div>
      <div>
        <nav class="  text-gray-200 w-full z-50 bg-gradient-to-l from-[#7114EF] to-[#1475F7]">
          <div class="flex justify-between md:px-5 px-3 items-center">
            <div class="flex items-center  p-4  pl-0 md:pl-7 ">
              <div className="md:max-w-md lg:col-span-2">
                <Link to='/home'>  <img src={logo} className='w-40' alt="" /> </Link>
              </div>
            </div>

            {/* <!-- MOBILE NAV Toggle ICON --> */}
            <button
              onClick={handleToggle}
              class=" inline-block lg:hidden rounded-full  px-4 py-2.5 text-xs font-bold uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800  "
              data-te-sidenav-toggle-ref
              data-te-target="#sidenav-1"
              aria-controls="#sidenav-1"
              aria-haspopup="true">
              <span class="block [&>svg]:h-7 [&>svg]:w-7 [&>svg]:text-white" >

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="h-7 w-7">
                  <path
                    fill-rule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                    clip-rule="evenodd" />
                </svg>
              </span>
            </button>

            {/* <!-- NAVIGATION - LARGE SCREENS --> */}
            <div class="hidden lg:flex">
              <ul class="hidden md:flex mt-1  font-medium">
                <li class="text-lg pr-8 "><a href=' ' class="transition duration-300 focus:outline-none focus:underline hover:underline" style={{ textUnderlineOffset: "8px;" }}>
                  <Link to='/home'>Home</Link> </a></li>
                <li class="text-lg pr-8"><a href=' ' class="transition duration-300 focus:outline-none focus:underline hover:underline" style={{ textUnderlineOffset: "8px;" }}> <Link to='/about'>About</Link></a></li>
                <li class="text-lg pr-8"><a href=' ' class="transition duration-300 focus:outline-none focus:underline hover:underline" style={{ textUnderlineOffset: "8px;" }}> <Link to='/addService'>Add Service</Link></a></li>
                <li class="text-lg pr-8"><a href=' ' class="transition duration-300 focus:outline-none focus:underline hover:underline" style={{ textUnderlineOffset: "8px;" }}>
                  <Link to='/myReview'>My Review</Link> </a></li>

                {/* user state  */}
                {
                  user ?
                    <li onClick={handleLogOut} class="text-lg pr-8"><a href=' ' class="transition duration-300 focus:outline-none focus:underline hover:underline" style={{ textUnderlineOffset: "8px;" }}>
                      <Link to='/signIn'>Log Out</Link></a></li> :

                    <li class="text-lg pr-8"><a href=' ' class="transition duration-300 focus:outline-none focus:underline hover:underline" style={{ textUnderlineOffset: "8px;" }}>
                      <Link to='/signIn'>Login</Link></a></li>
                }
                {/* <!-- Second dropdown container --> */}
              </ul>

              <div class="relative mr-5" data-te-dropdown-ref>
                {/* <!-- Second dropdown trigger --> */}
                <a
                  class="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                  href=" "
                  id="dropdownMenuButton2"
                  role="button"
                  data-te-dropdown-toggle-ref
                  aria-expanded="false">
                  {/* <!-- User avatar --> */}
                  {user?.photoURL ? <img
                    src={user?.photoURL}
                    class="rounded-full  "
                    style={{ height: "40px", width: "40px" }}
                    alt="img"
                    loading="lazy" /> : <img
                    src="https://assets-prod.sumo.prod.webservices.mozgcp.net/static/default-FFA-avatar.2f8c2a0592bda1c5.png"
                    class="rounded-full"
                    style={{ height: "40px", width: "40px" }}
                    alt="img"
                    loading="lazy" />}
                </a>
                {/* <!-- Second dropdown menu --> */}
                <ul
                  class="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max li-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg [&[data-te-dropdown-show]]:block"
                  aria-labelledby="dropdownMenuButton2"
                  data-te-dropdown-menu-ref>
                  {/* <!-- Second dropdown menu items --> */}
                  <li>
                    <a
                      class="block font-bold w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm   text-gray-600  active:no-underline disabled:pointer-events-none disabled:bg-transparent "
                      href=" "
                      data-te-dropdown-item-ref
                    >{user && <>{user?.displayName}</>}</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* <!-- MOBILE MENU Sidenav--> */}

          <div
            id="sidenav-1"
            className="left-0  fixed top-0  z-[1035] hidden lg:hidden h-full   w-60  bg-white   "
            data-te-sidenav-init
            data-te-sidenav-hidden="false"
          >
            <img src={logoBlack} className='w-40 m-8 cursor-pointer' alt="logo" />
            <hr />
            <ul class="relative m-10  list-none text-gray-700 font-semibold" data-te-sidenav-menu-ref>
              <li class="relative cursor-pointer hover:underline">
                <Link to='/home'>Home</Link>
              </li>
              <li class="relative cursor-pointer mt-3 hover:underline">
                <Link to='/about'>About</Link>
              </li>
              <li class="relative cursor-pointer mt-3 hover:underline">
                <Link to='/addService'>Add Service</Link>
              </li>
              <li class="relative cursor-pointer mt-3 hover:underline">
                <Link to='/myReview'>My Review</Link>
              </li>
              {
                user ? <li onClick={handleLogOut} class="relative mt-3 cursor-pointer hover:underline">
                  Log Out
                </li> :
                  <li class="relative cursor-pointer mt-3 hover:underline">
                    <Link to='/signIn'>Login</Link>
                  </li>

              }
              <li title='User' class="relative cursor-pointer mt-3 hover:underline">
                {user && user.displayName}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;