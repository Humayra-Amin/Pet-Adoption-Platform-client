import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={toggleSidebar} className="lg:hidden p-2 text-white bg-green-600">
            <FaBars size={24}></FaBars>
            </button>

            <aside className={`lg:block ${isOpen ? 'block' : 'hidden'} w-64 bg-green-600 text-white min-h-full lg:min-h-screen`}>
                <div className="p-6">
                    <nav>
                        <ul className="space-y-6">
                            <div>
                                <h1 className='border-2 bg-green-400 border-green-400 text-center text-xl playfair font-semibold p-1'>User Dashboard</h1>
                            </div>
                            <li>
                                <NavLink to="/dashboard/add-pet" className={({ isActive }) => isActive ? 'block p-2 bg-green-500 rounded' : 'block p-2 hover:bg-green-900 rounded'}>
                                    Add Pet
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/my-added-pets" className={({ isActive }) => isActive ? 'block p-2 bg-green-500 rounded' : 'block p-2 hover:bg-green-900 rounded'}>
                                    My Added Pets
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/adoption-request" className={({ isActive }) => isActive ? 'block p-2 bg-green-500 rounded' : 'block p-2 hover:bg-green-900 rounded'}>
                                    Adoption Request
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/create-donation-campaign" className={({ isActive }) => isActive ? 'block p-2 bg-green-500 rounded' : 'block p-2 hover:bg-green-900 rounded'}>
                                    Create Donation Campaign
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/my-donation-campaigns" className={({ isActive }) => isActive ? 'block p-2 bg-green-500 rounded' : 'block p-2 hover:bg-green-900 rounded'}>
                                    My Donation Campaigns
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/my-donations" className={({ isActive }) => isActive ? 'block p-2 bg-green-500 rounded' : 'block p-2 hover:bg-green-900 rounded'}>
                                    My Donations
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
