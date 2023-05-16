import React from 'react';
import tabImage from '../../Assets/Images/pattern-8.png'
import '../../App.css'

const Mission = () => {
  return (
    <div className=' px-2 md:px-12 py-10'>
      <h2 className=' text-3xl md:text-5xl  font-bold text-center'>Why Chose Us</h2>
      <p className=" text-md md:text-lg md:px-48 px-2 text-center py-8  text-gray-500 md:text-md">
      We possess a team of highly skilled professionals with extensive expertise in various areas of IT. With a proven track record of successful projects, we have garnered trust and recognition in the industry.
      </p>
      <ul
        class="mb-5 flex list-none flex-col flex-wrap   pl-0 md:flex-row"
        role="tablist"
        data-te-nav-ref>
        <li role="presentation" class="flex-auto text-center">
          <a
            href="#tabs-home01"
            class="my-2 block border-x-0 border-t-0 border-b-2 border-transparent px-7 pt-4 pb-3.5 text-xl font-medium uppercase leading-tight hover:isolate hover:border-transparent focus:isolate   data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-500 dark:data-[te-nav-active]:text-primary-500"
            data-te-toggle="pill"
            data-te-target="#tabs-home01"
            data-te-nav-active
            role="tab"
            aria-controls="tabs-home01"
            aria-selected="true"
          >Our Mission</a
          >
        </li>
        <li role="presentation" class="flex-auto text-center">
          <a
            href="#tabs-profile01"
            class="focus:border-transparen my-2 block border-x-0 border-t-0 border-b-2 border-transparent px-7 pt-4 pb-3.5 text-xl font-medium uppercase leading-tight hover:isolate hover:border-transparent focus:isolate data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-500 dark:data-[te-nav-active]:text-primary-500"
            data-te-toggle="pill"
            data-te-target="#tabs-profile01"
            role="tab"
            aria-controls="tabs-profile01"
            aria-selected="false"
          >Our Vision</a
          >
        </li>
        <li role="presentation" class="flex-auto text-center">
          <a
            href="#tabs-messages01"
            class="my-2 block border-x-0 border-t-0 border-b-2 border-transparent px-7 pt-4 pb-3.5 text-xl font-medium uppercase leading-tight hover:isolate hover:border-transparent focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-500 dark:data-[te-nav-active]:text-primary-500"
            data-te-toggle="pill"
            data-te-target="#tabs-messages01"
            role="tab"
            aria-controls="tabs-messages01"
            aria-selected="false"
          >Our Value</a
          >
        </li>

      </ul>
      <div class="mb-6">
        <div
          class="hidden opacity-0 opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="tabs-home01"
          role="tabpanel"
          aria-labelledby="tabs-home-tab01"
          data-te-tab-active>
          <section
            class="relative   h-[250px] bg-cover bg-center  bg-no-repeat"
            style={{ backgroundImage: `url(${tabImage})` }}
          >
            <div class="absolute w-full h-full  rounded-lg bg_color"></div>
            <div className=''>
              <div
                class="relative mx-auto px-4   sm:px-6    lg:items-center lg:px-8"
              >
                <div class="  text-center sm:text-left">
                  <div class="py-5   text-gray-200 sm:text-lg">
                    <h1 className='text-3xl py-3 pt-3 font-semibold'>OUR MISSION</h1>
                    <p className='pt-2 text-gray-300'> An IT firm or MSP who keeps your IT running smoothly at all times is like a plumber who fixes your pipes; that’s what they are supposed to do. Many IT firms struggle to keep themselves and their IT from falling apart. We’ve raised the standards in this industry and are a leading cybersecurity.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div
          class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="tabs-profile01"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab01">
          <div
            class="relative overflow-hidden zoom bg-cover bg-no-repeat">
            <section
              class="relative   h-[250px] bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${tabImage})` }}
            >
              <div class="absolute w-full h-full   rounded-lg bg_color"></div>
              <div className=''>
                <div
                  class="relative mx-auto px-4   sm:px-6    lg:items-center lg:px-8"
                >
                  <div class="  text-center sm:text-left">
                    <div class="py-5   text-gray-200 sm:text-lg">
                      <h1 className='text-3xl py-3 pt-3 font-semibold'>OUR VISION</h1>
                      <p className='pt-2  text-gray-300'> We have critical compliance designations, including SSAE 18 Type II and PCI, adhering to the strictest industry regulations. We train our staff on HIPAA best practices on behalf of our healthcare clients. We incorporate and maintain advanced monitoring, anti-malware, and authentication tools.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div
          class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="tabs-messages01"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab01">
          <div
            class="relative overflow-hidden zoom bg-cover bg-no-repeat">
            <section
              class="relative   h-[250px] bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${tabImage})` }}
            >
              <div class="absolute w-full h-full   rounded-lg bg_color"></div>
              <div className=''>
                <div
                  class="relative mx-auto px-4   sm:px-6    lg:items-center lg:px-8"
                >
                  <div class="  text-center sm:text-left">

                    <div class="py-5   text-gray-200 sm:text-lg">
                      <h1 className='text-3xl py-3 pt-3 font-semibold'>OUR VALUE</h1>
                      <p className='pt-2  text-gray-300'>  Every ITS client has a dedicated Virtual CIO who provides personalized, strategic guidance. Your vCIO understands what drives your business and recommends technology solutions to solve your unique needs. With your best interests in mind, your vCIO assists with budgeting.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;