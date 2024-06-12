import { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { FaBars, FaDonate, FaHome, FaPlus, FaPlusSquare, FaReplyAll, FaUser } from 'react-icons/fa';
import { MdOutlinePets } from 'react-icons/md';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import useAuth from '@/hooks/useAuth';
import classNames from 'classnames';

const Dashboard = () => {
    const { role } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar></Navbar>

            <button onClick={toggleSidebar} className="lg:hidden p-2 text-white bg-green-600">
                <FaBars size={24} />
            </button>

            <div className="flex flex-1">
                <aside
                    className={classNames(
                        'lg:block w-80 bg-green-600 text-white min-h-full transition-transform duration-300',
                        {
                            'block': isOpen,
                            'hidden lg:block': !isOpen,
                        }
                    )}
                >
                    <div className="p-4">
                        <h1 className="border-2 bg-green-200 text-black border-green-200 text-center text-xl playfair font-semibold p-1 mt-16 rounded-lg shadow-lg">
                            Dashboard
                        </h1>
                        <ul className="menu p-4 uppercase text-white gap-5 font-semibold robotoSlab">
                            {role === 'admin' && (
                                <>
                                    <li>
                                        <NavLink
                                            to="/dashboard/AdminHome"
                                            className={classNames('flex items-center gap-2', {
                                                'text-white bg-green-800': location.pathname === '/dashboard/AdminHome',
                                                'text-gray-300': location.pathname !== '/dashboard/AdminHome'
                                            })}
                                        >
                                            <FaHome />
                                            Admin Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/Users"
                                            className={classNames('flex items-center gap-2', {
                                                'text-white bg-green-800': location.pathname === '/dashboard/Users',
                                                'text-gray-300': location.pathname !== '/dashboard/Users'
                                            })}
                                        >
                                            <FaUser />
                                            Users
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/allPets"
                                            className={classNames('flex items-center gap-2', {
                                                'text-white bg-green-800': location.pathname === '/dashboard/allPets',
                                                'text-gray-300': location.pathname !== '/dashboard/allPets'
                                            })}
                                        >
                                            <FaReplyAll />
                                            All Pets
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/allDonations"
                                            className={classNames('flex items-center gap-2', {
                                                'text-white bg-green-800': location.pathname === '/dashboard/allDonations',
                                                'text-gray-300': location.pathname !== '/dashboard/allDonations'
                                            })}
                                        >
                                            <FaDonate />
                                            All Donations
                                        </NavLink>
                                    </li>
                                </>
                            )}
                            {role === 'user' && (
                                <li>
                                    <NavLink
                                        to="/dashboard/userHome"
                                        className={classNames('flex items-center gap-2', {
                                            'text-white bg-green-800': location.pathname === '/dashboard/userHome',
                                            'text-gray-300': location.pathname !== '/dashboard/userHome'
                                        })}
                                    >
                                        <FaHome />
                                        User Home
                                    </NavLink>
                                </li>
                            )}
                            <li>
                                <NavLink
                                    to="/dashboard/userHome"
                                    className={classNames('flex items-center gap-2', {
                                        'text-white bg-green-800': location.pathname === '/dashboard/userHome',
                                        'text-gray-300': location.pathname !== '/dashboard/userHome'
                                    })}
                                >
                                    <FaPlusSquare />
                                    User Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/addPet"
                                    className={classNames('flex items-center gap-2', {
                                        'text-white bg-green-500': location.pathname === '/dashboard/addPet',
                                        'text-gray-300': location.pathname !== '/dashboard/addPet'
                                    })}
                                >
                                    <MdOutlinePets />
                                    Add a Pet
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/myAddedPets"
                                    className={classNames('flex items-center gap-2', {
                                        'text-white bg-green-800': location.pathname === '/dashboard/myAddedPets',
                                        'text-gray-300': location.pathname !== '/dashboard/myAddedPets'
                                    })}
                                >
                                    <FaPlus />
                                    My Added Pets
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/adoptionRequest"
                                    className={classNames('flex items-center gap-2', {
                                        'text-white bg-green-800': location.pathname === '/dashboard/adoptionRequest',
                                        'text-gray-300': location.pathname !== '/dashboard/adoptionRequest'
                                    })}
                                >
                                    Adoption Request
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/createDonationCampaign"
                                    className={classNames('flex items-center gap-2', {
                                        'text-white bg-green-800': location.pathname === '/dashboard/createDonationCampaign',
                                        'text-gray-300': location.pathname !== '/dashboard/createDonationCampaign'
                                    })}
                                >
                                    <RiMoneyDollarCircleFill />
                                    Create Donation Campaign
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/myDonationCamp"
                                    className={classNames('flex items-center gap-2', {
                                        'text-white bg-green-800': location.pathname === '/dashboard/myDonationCamp',
                                        'text-gray-300': location.pathname !== '/dashboard/myDonationCamp'
                                    })}
                                >
                                    <FaDonate />
                                    My Donation Campaigns
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/MyDonations"
                                    className={classNames('flex items-center gap-2', {
                                        'text-white bg-green-800': location.pathname === '/dashboard/MyDonations',
                                        'text-gray-300': location.pathname !== '/dashboard/MyDonations'
                                    })}
                                >
                                    <FaDonate />
                                    My Donations
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </aside>

                <main className="flex-1 p-4">
                    <Outlet></Outlet>
                </main>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;
