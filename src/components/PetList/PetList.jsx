
import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import PetCard from '../PetCard/PetCard';

const PetList = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch('petlist.json')
        .then(res => res.json())
        .then(data => {
            setList(data);
        });
    }, []);
    
    return (
        <div>
            <Helmet>
                <title>PawPets | Pet Listing</title>
            </Helmet>

            <div className="hero h-[400px]" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/alerted-dog-green-copy-space-background_23-2148326254.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1716940800&semt=ais_user' }}>
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-8xl text-black font-bold text-center playfair mt-[55px] md:mt-[100px] lg:mt-[100px]">Pet Listings</h1>
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

                    <div>

                        <form className="flex items-center max-w-sm mx-auto">
                            <label className="sr-only">Search</label>
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                </div>
                                <input type="text" id="simple-search" className="bg-black-50 border border-black-300 text-black-900 text-sm rounded-lg" placeholder="Search Pets..." required />
                            </div>
                            <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-green-700 rounded-lg border border-blue-700 hover:bg-green-800">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span className="sr-only">Search</span>
                            </button>
                        </form>

                    </div>

                    <div>
                        <details className="dropdown">
                            <summary className="btn text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">Category</summary>
                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="block px-4 py-2 hover:bg-black-100">All</a>
                                </li>
                                <li>
                                    <a className="block px-4 py-2 hover:bg-black-100">Dogs</a>
                                </li>
                                <li>
                                    <a className="block px-4 py-2 hover:bg-black-100">Cats</a>
                                </li>
                                <li>
                                    <a className="block px-4 py-2 hover:bg-black-100">Rabbits</a>
                                </li>
                                <li>
                                    <a className="block px-4 py-2 hover:bg-black-100">Birds</a>
                                </li>
                            </ul>
                        </details>
                    </div>

                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-5 lg:gap-5'>

                    {
                    list.map(pet => (
                        <PetCard key={pet._id} pet={pet} />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default PetList;