import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Root from './components/Root/Root';
import { HelmetProvider } from 'react-helmet-async';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Login from './components/Login/Login';
import AuthProvider from './AuthProvider/AuthProvider';
import Register from './components/Register/Register';
import UserProfile from './components/UserProfile/UserProfile';
import PetList from './components/PetList/PetList';
import PetDetails from './components/PetDetails/PetDetails';
import DonationCamp from './components/DonationCamp/DonationCamp';
import DonationDetails from './components/DonationDetails/DonationDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/userprofile',
        element: <UserProfile></UserProfile>,
      },
      {
        path: '/petList',
        element: <PetList></PetList>,
      },
      {
        path: '/petDetails',
        element: <PetDetails></PetDetails>,
      },
      {
        path: '/donation',
        element: <DonationCamp></DonationCamp>,
      },
      {
        path: '/donationDetails',
        element: <DonationDetails></DonationDetails>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
)
