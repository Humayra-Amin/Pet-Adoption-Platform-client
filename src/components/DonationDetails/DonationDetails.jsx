import { useState, useEffect } from 'react';
import { Helmet } from "react-helmet-async";
import { Link, useParams } from 'react-router-dom';

const DonationDetails = () => {
    const { id } = useParams();
    const [donation, setDonation] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        donationAmount: '',
    });

    useEffect(() => {
        fetch('https://pet-adoption-server-amber.vercel.app/donations')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                const donation = data.find(donation => donation._id === id)
                if (!donation) {
                    throw new Error(`Pet with ID ${id} not found`);
                }
                setDonation(donation);
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }, [id]);

    const handleDonateClick = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleAmountChange = (event) => {
        setFormData({ ...formData, donationAmount: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitting donation amount:', formData.donationAmount);
        setShowModal(false);
    };

    if (!donation) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Helmet>
                <title>PawPets | Donation Details</title>
            </Helmet>

            <div className="hero h-[400px]" style={{ backgroundImage: 'url(https://critterculture.mblycdn.com/uploads/cc/2022/04/shutterstock_372035203.jpg)' }}>
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-8xl text-black font-bold mt-[55px] md:mt-[100px] lg:mt-[100px]">Donation Details</h1>
                    </div>
                </div>
            </div>

            <div className="container mx-auto my-10 flex justify-center">
                <div className="flex flex-col items-center bg-white border-2 border-green-700 rounded-lg shadow-lg lg:w-[600px] md:flex-row md:max-w-xl hover:bg-black-100">
                    <img className="object-cover w-full rounded-t-lg h-80 md:h-[300px] lg:h-[300px] md:w-[300px] lg:w-[300px] md:rounded-none md:rounded-s-lg" src={donation.petImage} />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <p className="mb-3 font-normal text-black-700">{donation.longDescription}</p>
                        <button className="btn inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800" onClick={handleDonateClick}>
                            Donate
                        </button>
                    </div>
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/3">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold">Donate to {donation.petName}</h2>
                            <button className="text-gray-700" onClick={handleCloseModal}>X</button>
                        </div>
                        <form onSubmit={handleSubmit} className="mt-4">
                            <div className="mt-4">
                                <label className="block text-gray-700">Donation Amount</label>
                                <input
                                    type="number"
                                    value={formData.donationAmount}
                                    onChange={handleAmountChange}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="mt-6 flex justify-end">
                                <Link to='/payment'>                                <button className="btn bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800" type="submit" onClick={handleCloseModal}>
                                    Pay
                                </button></Link>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DonationDetails;
