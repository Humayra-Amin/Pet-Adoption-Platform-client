import { Link, NavLink } from 'react-router-dom';
import icon from '../../assets/images/icon.png'

const Navbar = () => {
    const links = <>
        <li><NavLink to="/" className={({ isActive }) =>
            isActive ? 'text-black border-2 rounded-lg p-2 border-green-500 bg-white hover:bg-green-200' : 'hover:bg-gray-200 rounded-lg p-2'}>Home</NavLink></li>
        <li><NavLink to="/petList" className={({ isActive }) =>
            isActive ? 'text-black border-2 rounded-lg p-2 border-green-500 bg-white hover:bg-green-200' : 'hover:bg-gray-200 rounded-lg p-2'}>Pet Listing</NavLink></li>
        <li><NavLink to="/donation" className={({ isActive }) =>
            isActive ? 'text-black border-2 rounded-lg p-2 border-green-500 bg-white hover:bg-green-200' : 'hover:bg-gray-200 rounded-lg p-2'}>Donation Campaigns</NavLink></li>
        <li><NavLink to="/logReg" className={({ isActive }) =>
            isActive ? 'text-black border-2 rounded-lg p-2 border-green-500 bg-white hover:bg-green-200' : 'hover:bg-gray-200 rounded-lg p-2'}>Login/Register</NavLink></li>
    </>
    return (
        <nav className="bg-white border-gray-200 border-2 shadow-lg">

            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="dropdown lg:hidden md:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={icon} className="h-8" />
                    <Link to='/'><span className="self-center text-2xl font-semibold whitespace-nowrap text-green-700">PawPets</span></Link>
                </a>

                <div className="dropdown dropdown-end flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-44 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Logout</a>
                        </li>
                    </ul>
                </div>


                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">

                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {links}

                    </ul>

                </div>

            </div>

        </nav >
    );
};

export default Navbar;