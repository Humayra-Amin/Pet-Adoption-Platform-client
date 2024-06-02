import icon from '../../assets/images/icon.png'
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (

        <footer className="bg-green-100 mt-10 dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="https://flowbite.com/" className="flex items-center">
                            <img src={icon} className="h-14 me-3" />
                            <span className="self-center lg:text-3xl font-semibold text-green-900 whitespace-nowrap dark:text-white">PawPets</span>
                        </a>
                        <p className='mt-2'>123, XYZ Hill, Chattogram, Bangladesh</p>
                        <p className='mt-2'>+8801876943665</p>
                        <p className='mt-2'>pawPets@gmail.com</p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white robotoSlab">Our Services</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a className="hover:underline robotoSlab">Donation Campaigns</a>
                                </li>
                                <li>
                                    <a className="hover:underline robotoSlab">Pet Adoption</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white robotoSlab">Follow us</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a className="hover:underline robotoSlab">FaceBook</a>
                                </li>
                                <li>
                                    <a className="hover:underline robotoSlab">Instagram</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white robotoSlab">Legal</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline robotoSlab">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline robotoSlab">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-green-800 sm:mx-auto dark:border-gray-700 lg:my-8" />

                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-[18px] text-black sm:text-center dark:text-gray-400">© 2023 <a className="hover:underline">PawPets™</a>. All Rights Reserved.
                    </span>

                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <FaFacebook className='text-green-700 text-2xl'></FaFacebook>
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <FaGoogle className='text-green-700 text-2xl'></FaGoogle>
                            <span className="sr-only">Discord community</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <FaTwitter className='text-green-700 text-2xl'></FaTwitter>
                            <span className="sr-only">Twitter page</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <FaInstagram className='text-green-700 text-2xl'></FaInstagram>
                            <span className="sr-only">GitHub account</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;