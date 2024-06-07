import { useState, useEffect } from 'react';
import { Helmet } from "react-helmet-async";
import { useParams } from 'react-router-dom';

const PetDetails = () => {
    const { id } = useParams();
    const [pet, setPet] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        petId: '', 
        petName: '',
        userName: 'John Doe',
        email: 'johndoe@example.com',
        phone: '',
        address: '',
    });

    useEffect(() => {
        // Fetch the pet details by ID
        fetch("/petlist.json")
            .then(res => res.json())
            .then(data => {
                setPet(data);
                setFormData(prevFormData => ({
                    ...prevFormData,
                    petId: data._id,
                    petName: data.pet_name,
                }));
            })
            .catch(error => console.error('Error fetching pet details:', error));
    }, [id]);

    const handleAdoptClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowModal(false);
    };

    if (!pet) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Helmet>
                <title>PawPets | Pet Details</title>
            </Helmet>

            <div className="hero h-[400px]" style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhi95CJJ89xEj2a05qjDLe9cmasi42TKKrQA&s)' }}>
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-8xl text-black font-bold text-center playfair mt-[55px] md:mt-[100px] lg:mt-[100px]">Pet Details</h1>
                    </div>
                </div>
            </div>

            <div className="container mx-auto my-10 flex justify-center">
                <div className="flex flex-col items-center bg-white border-2 border-green-700 rounded-lg shadow-lg lg:w-[600px] md:flex-row md:max-w-xl hover:bg-black-100">
                    <img className="object-cover w-full rounded-t-lg h-80 md:h-[300px] lg:h-[300px] md:w-[300px] lg:w-[300px] md:rounded-none md:rounded-s-lg" src={pet.pet_image} alt="Pet" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-black-900">{pet.pet_name}</h5>
                        <p className="mb-3 font-normal text-black-700">Pet Id: {pet._id}</p>
                        <p className="mb-3 font-normal text-black-700">Pet Details: {pet.pet_details}</p>
                        <div>
                            <button className="btn inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 robotoSlab" onClick={handleAdoptClick}>
                                Adopt
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/3">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold playfair">Adopt {formData.petName}</h2>
                            <button className="text-gray-700" onClick={handleCloseModal}>X</button>
                        </div>
                        <form onSubmit={handleSubmit} className="mt-4">
                            <input type="hidden" name="petId" value={formData.petId} />
                            <input type="hidden" name="petName" value={formData.petName} />
                            <div className="mt-4">
                                <label className="block text-gray-700">User Name</label>
                                <input
                                    type="text"
                                    name="userName"
                                    value={formData.userName}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                    disabled
                                />
                            </div>
                            <div className="mt-4">
                                <label className="block text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                    disabled
                                />
                            </div>
                            <div className="mt-4">
                                <label className="block text-gray-700">Phone Number</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="mt-4">
                                <label className="block text-gray-700">Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="mt-6 flex justify-end">
                                <button className="btn bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800" type="submit">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PetDetails;
