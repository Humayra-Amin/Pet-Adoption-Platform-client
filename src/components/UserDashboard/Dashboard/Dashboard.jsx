import { useState } from 'react';
import { FaBars, FaDonate } from 'react-icons/fa';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { MdOutlinePets } from "react-icons/md";
import { BsCollectionPlay } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { BiDonateHeart } from "react-icons/bi";

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="lg:flex">
            <button onClick={toggleSidebar} className="lg:hidden p-2 text-white bg-green-600">
                <FaBars size={24}></FaBars>
            </button>

            <aside className={`lg:block ${isOpen ? 'block' : 'hidden'} w-64 bg-green-600 text-white min-h-screen`}>
                <div className="p-6 flex flex-col h-full">
                    <nav className="flex-1">
                        <ul className="space-y-6">
                            <div>
                                <Link to='/dashboard'><h1 className='border-2 bg-green-200 text-black border-green-200 text-center text-xl playfair font-semibold p-1 mt-16 rounded-lg shadow-lg'>User Dashboard</h1></Link>
                            </div>
                            <li>
                                <NavLink to="/dashboard/add-pet" className={`flex items-center justify-between p-2 rounded ${location.pathname === '/dashboard/add-pet' ? 'bg-green-400': 'hover:bg-green-900'}`}>
                                    <MdOutlinePets />
                                    <span className='mr-24'>Add Pet</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/my-added-pets" className={`flex items-center justify-between p-2 rounded ${location.pathname === '/dashboard/my-added-pets' ? 'bg-green-400' : 'hover:bg-green-900'}`}>
                                    <BsCollectionPlay />
                                    <span className='mr-12'>My Added Pets</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/adoption-request" className={`flex items-center justify-between p-2 rounded ${location.pathname === '/dashboard/adoption-request' ? 'bg-green-400' : 'hover:bg-green-900'}`}>
                                    <FiHeart />
                                    <span className='mr-8'>Adoption Request</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/create-donation-campaign" className={`flex items-center justify-between p-2 rounded ${location.pathname === '/dashboard/create-donation-campaign' ? 'bg-green-400' : 'hover:bg-green-900'}`}>
                                    <RiMoneyDollarCircleFill />
                                    <span className='ml-4'>Create Donation Campaign</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/my-donation-campaigns" className={`flex items-center justify-between p-2 rounded ${location.pathname === '/dashboard/my-donation-campaigns' ? 'bg-green-400' : 'hover:bg-green-900'}`}>
                                    <BiDonateHeart />
                                    <span className='ml-4'>My Donation Campaigns</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/my-donations" className={`flex items-center justify-between p-2 rounded ${location.pathname === '/dashboard/my-donations' ? 'bg-green-400' : 'hover:bg-green-900'}`}>
                                    <FaDonate />
                                    <span className='mr-16'>My Donations</span>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        </div>
    );
};

export default Dashboard;
