import React from 'react';
import Process from '../../WorkProcess/Process';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
     return (
          <div>
               <Banner></Banner>
               <Service></Service>
               <Process></Process>
               <Testimonials></Testimonials>
          </div>
     );
};

export default Home;