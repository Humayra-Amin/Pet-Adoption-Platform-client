import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import DonationCard from "../DonationCard/DonationCard";

const DonationCamp = () => {
    const donations = useLoaderData();

    return (
        <div>
            <Helmet>
                <title>PawPets | Donation Campaign</title>
            </Helmet>

            <div className="hero h-[400px]" style={{ backgroundImage: 'url(https://t3.ftcdn.net/jpg/02/82/28/10/360_F_282281016_H1uPO6dYx5AsYLTHW5fRyDhSI2xnaYPh.jpg)' }}>
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-8xl text-black font-bold mt-[55px] md:mt-[100px] lg:mt-[100px]">Donation Campaign</h1>
                    </div>
                </div>
            </div>

            <div className="container mx-auto my-10">
                <div className="flex flex-col lg:flex-row md:flex-row justify-evenly my-12">
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

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {donations.map(donation => (
                        <DonationCard key={donation._id} donation={donation} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DonationCamp;
