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
import Payment from './components/Payment/Payment';
import Dashboard from './Layout/Dashboard';
import UserHome from './components/Dashboard/UserHome/UserHome';
import AddPet from './components/Dashboard/AddPet/AddPet';
import MyAddedPets from './components/Dashboard/MyAddedPets/MyAddedPets';
import UpdatePets from './components/Dashboard/MyAddedPets/UpdatePets';
import UserTableMyAddedPets from './components/Dashboard/MyAddedPets/UserTableMyAddedPets';
import EditDonationCamp from './components/Dashboard/MyDonationCamp/EditDonationCamp';
import AdoptionRequest from './components/Dashboard/AdoptionRequest/AdoptionRequest';
import CreateDonationCampaign from './components/Dashboard/CreateDonationCampaign/CreateDonationCampaign';
import MyDonationCamp from './components/Dashboard/MyDonationCamp/MyDonationCamp';
import Users from './components/Dashboard/Users/Users';
import AllPets from './components/Dashboard/AllPets/AllPets';
import AllDonations from './components/Dashboard/AllDonations/AllDonations';

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
        path: '/payment',
        element: <Payment></Payment>,
      },
      {
        path: '/petList',
        element: <PetList></PetList>,
        loader: () => fetch('https://pet-adoption-server-amber.vercel.app/pets')
      },
      {
        path: '/pets/:id',
        element: <PetDetails></PetDetails>,
      },
      {
        path: '/donation',
        element: <DonationCamp></DonationCamp>,
        loader: () => fetch('https://pet-adoption-server-amber.vercel.app/donations')
      },
      {
        path: '/donations/:id',
        element: <DonationDetails></DonationDetails>,
      },
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'addPet',
        element: <AddPet></AddPet>,
      },
      {
        path: 'myAddedPet',
        element: <MyAddedPets></MyAddedPets>,
      },
      {
        path: 'updatePet/:id',
        element: <UpdatePets></UpdatePets>,
        loader: ({ params }) => fetch(`http://localhost:5000/petDetails/${params.id}`)
      },
      {
        path: 'userTableMyAddedPets',
        element: <UserTableMyAddedPets></UserTableMyAddedPets>,
      },
      {
        path: 'editDonationCamp/:id',
        element: <EditDonationCamp></EditDonationCamp>,
        loader: ({ params }) => fetch(`http://localhost:5000/donationCampaignDetailsById/${params.id}`)
      },
      {
        path: 'adoptionRequest',
        element: <AdoptionRequest></AdoptionRequest>,
      },
      {
        path: 'createDonationCamp',
        element: <CreateDonationCampaign></CreateDonationCampaign>,
      },
      {
        path: 'myDonationCamp',
        element: <MyDonationCamp></MyDonationCamp>,
      },
      // admin dashboard
      {
        path: 'user',
        element: <Users></Users>,
      },
      {
        path: 'allPets',
        element: <AllPets></AllPets>,
      },
      {
        path: 'allDonations',
        element: <AllDonations></AllDonations>,
      },
      {
        path: '/userHome',
        element: <UserHome></UserHome>,
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
