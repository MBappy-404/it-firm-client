import React from 'react';
import Process from '../../WorkProcess/Process';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';
import Testimonials from '../Testimonials/Testimonials';
import Price from '../Price/Price';

const Home = () => {
     return (
          <div>
               <Banner></Banner>
               <About></About>
               <Service></Service>
               <Process></Process>
               <Testimonials></Testimonials>
               <Price></Price>
          </div>
     );
};

export default Home;