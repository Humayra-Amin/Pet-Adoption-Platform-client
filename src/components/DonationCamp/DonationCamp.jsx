import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import cat1 from '../../assets/images/cat1.jpg'


const DonationCamp = () => {
    return (
        <div>
             <Helmet>
                <title>PawPets | Donation Campaign</title>
            </Helmet>

            <div className="hero h-[400px]" style={{ backgroundImage: 'url(https://t3.ftcdn.net/jpg/02/82/28/10/360_F_282281016_H1uPO6dYx5AsYLTHW5fRyDhSI2xnaYPh.jpg' }}>
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-8xl text-black font-bold text-center playfair mt-[55px] md:mt-[100px] lg:mt-[100px]">Donation Campaign</h1>
                    </div>
                </div>
            </div>


            <div className='container mx-auto my-10'>

                <div className='flex flex-col lg:flex-row md:flex-row justify-evenly my-12'>
                <div>
                        <details className="dropdown">
                            <summary className="btn text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">Sort</summary>
                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="block px-4 py-2 hover:bg-black-100">Descending Order Date</a>
                                </li>
                            </ul>
                        </details>
                    </div>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-5 lg:gap-5'>
                    {/* first card */}
                    <div className=" bg-white border-2 border-green-700 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                        <div>
                            <img className="rounded-t-lg w-[450px] h-[300px]" src={cat1} />
                        </div>
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pet Name</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Max Donation Amount</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Donated Amount</p>
                            <Link to='/donationDetails'><button className="btn inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 robotoSlab">Adopt</button></Link>
                        </div>
                    </div>

                    {/* second card */}
                    <div className=" bg-white border-2 border-green-700 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                        <div>
                            <img className="rounded-t-lg w-[450px] h-[300px]" src={cat1} />
                        </div>
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pet Name</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Max Donation Amount</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Donated Amount</p>
                            <Link to='/donationDetails'><button className="btn inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 robotoSlab">Adopt</button></Link>
                        </div>
                    </div>

                    {/* 3rd card */}
                    <div className=" bg-white border-2 border-green-700 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                        <div>
                            <img className="rounded-t-lg w-[450px] h-[300px]" src={cat1} />
                        </div>
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pet Name</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Max Donation Amount</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Donated Amount</p>
                            <Link to='/donationDetails'><button className="btn inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 robotoSlab">Adopt</button></Link>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};


export default DonationCamp;