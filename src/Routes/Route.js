import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import AddService from "../Pages/AddService/AddService";
import AllService from "../Pages/AllService/AllService";
import Home from "../Pages/Home/Home/Home";
import MyReview from "../Pages/MyReview/MyReview";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import SignIn from "../Pages/SIgnIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";







const router = createBrowserRouter([
     {
          path:'/',
          element: <Main></Main>,
          children: [
               {
                    path:'/',
                    element: <Home></Home>
               },
               {
                    path: '/home',
                    element: <Home></Home>
               },
               {
                    path: '/addService',
                    element: <AddService></AddService>
               },
               {
                    path:'/about',
                    element: <About></About>
               },
               {
                    path: '/allService',
                    element: <AllService></AllService>
               },
               {
                    path: '/myReview',
                    element: <MyReview></MyReview>

               },
               {
                    path: '/serviceDetails/:id',
                    element: <ServiceDetails></ServiceDetails>,
                    loader: ({params}) => fetch(`https://it-farm-server.vercel.app/serviceDetails/${params.id}`)
               }

          ]
     },
     {
          path:'/signIn',
          element: <SignIn></SignIn>
     },
     {
          path:'/signUp',
          element: <SignUp></SignUp>
     }
])


export default router;