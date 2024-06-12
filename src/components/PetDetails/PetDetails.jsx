// import { useState, useEffect } from 'react';
// import { Helmet } from "react-helmet-async";
// import { useParams } from 'react-router-dom';

// const PetDetails = () => {
//     const { id } = useParams();
//     const [pet, setPet] = useState(null);
//     const [showModal, setShowModal] = useState(false);
//     const [formData, setFormData] = useState({
//         petId: pet._id,
//             petName: pet.petName,
//             petImage: pet.petImage,
//             requestorName: user?.displayName,
//             ownerName: pet.ownerName,
//             ownerEmail: pet.ownerEmail,
//             requestorEmail: user?.email,
//             phoneNumber: phone,
//             location: address,
//             isAcceptedRequest: 0,
//     });

//     useEffect(() => {
//         fetch('http://localhost:5000/pets')
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error(`Network response was not ok: ${response.statusText}`);
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 const pet = data.find(pet => pet._id === id)
//                 if (!pet) {
//                     throw new Error(`Pet with ID ${id} not found`);
//                 }
//                 setPet(pet);
//             })
//             .catch(error => {
//                 console.error('Fetch error:', error);
//             });
//     }, [id]);

//     const handleAdoptClick = () => {
//         setShowModal(true);
//     };

//     const handleCloseModal = () => {
//         setShowModal(false);
//     };

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         setShowModal(false);
//     };

//     if (!pet) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div>
//             <Helmet>
//                 <title>PawPets | Pet Details</title>
//             </Helmet>

//             <div className="hero h-[400px]" style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhi95CJJ89xEj2a05qjDLe9cmasi42TKKrQA&s)' }}>
//                 <div className="hero-overlay bg-opacity-10"></div>
//                 <div className="hero-content text-center text-neutral-content">
//                     <div>
//                         <h1 className="text-4xl md:text-5xl lg:text-8xl text-black font-bold text-center playfair mt-[55px] md:mt-[100px] lg:mt-[100px]">Pet Details</h1>
//                     </div>
//                 </div>
//             </div>

//             <div className="container mx-auto my-10 flex justify-center">
//                 <div className="flex flex-col md:flex-col items-center bg-white border-2 border-green-700 rounded-lg shadow-lg lg:w-[750px] lg:h-auto md:max-w-xl">
//                     <img className="object-cover w-full rounded-t-lg h-80 md:h-[300px] lg:h-[400px] md:max-w-xl lg:max-w-xl" src={pet.petImage} alt={pet.petName} />
//                     <div className="flex flex-col justify-between p-4 leading-normal">
//                         <h5 className="mb-2 text-2xl font-bold tracking-tight text-black playfair">{pet.petName}</h5>
//                         <p className="mb-3 text-[18px] font-semibold text-black">Pet Age: <span className="text-gray-600 robotoSlab font-normal">{pet.petAge}</span></p>
//                         <p className="mb-3 text-[18px] font-semibold text-black">Pet Location: <span className="text-gray-600 robotoSlab font-normal">{pet.petLocation}</span></p>
//                         <p className="mb-3 text-[18px] font-semibold text-black">Short Description: <span className="text-gray-600 robotoSlab font-normal">{pet.shortDescription}</span></p>
//                         <p className="mb-3 text-[18px] font-semibold text-black">Long Description: <span className="text-gray-600 robotoSlab font-normal">{pet.longDescription}</span></p>
//                         <div>
//                             <button className="btn inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 robotoSlab" onClick={handleAdoptClick}>
//                                 Adopt
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {showModal && (
//                 <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//                     <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/3">
//                         <div className="flex justify-between items-center">
//                             <h2 className="text-2xl font-bold playfair">Adopt {formData.petName}</h2>
//                             <button className="text-gray-700" onClick={handleCloseModal}>X</button>
//                         </div>
//                         <form onSubmit={handleSubmit} className="mt-4">
//                             <input type="hidden" name="petId" value={formData.petId} />
//                             <input type="hidden" name="petName" value={formData.petName} />
//                             <div className="mt-4">
//                                 <label className="block text-gray-700">User Name</label>
//                                 <input
//                                     type="text"
//                                     name="userName"
//                                     value={formData.userName}
//                                     className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//                                     disabled
//                                 />
//                             </div>
//                             <div className="mt-4">
//                                 <label className="block text-gray-700">Email</label>
//                                 <input
//                                     type="email"
//                                     name="email"
//                                     value={formData.email}
//                                     className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//                                     disabled
//                                 />
//                             </div>
//                             <div className="mt-4">
//                                 <label className="block text-gray-700">Phone Number</label>
//                                 <input
//                                     type="text"
//                                     name="phone"
//                                     value={formData.phone}
//                                     onChange={handleInputChange}
//                                     className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//                                 />
//                             </div>
//                             <div className="mt-4">
//                                 <label className="block text-gray-700">Address</label>
//                                 <input
//                                     type="text"
//                                     name="address"
//                                     value={formData.address}
//                                     onChange={handleInputChange}
//                                     className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//                                 />
//                             </div>
//                             <div className="mt-6 flex justify-end">
//                                 <button className="btn bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800" type="submit">
//                                     Submit
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default PetDetails;
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Modal from 'react-modal';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import useAuth from '@/hooks/useAuth';

Modal.setAppElement('#root'); 

const PetDetails = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [pet, setPet] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/pets')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                const pet = data.find(pet => pet._id === id);
                if (!pet) {
                    throw new Error(`Pet with ID ${id} not found`);
                }
                setPet(pet);
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }, [id]);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const adoptionData = {
            petId: pet._id,
            petName: pet.petName,
            petImage: pet.petImage,
            requestorName: user?.displayName,
            ownerName: pet.ownerName,
            ownerEmail: pet.ownerEmail,
            requestorEmail: user?.email,
            phoneNumber: phone,
            location: address,
            isAcceptedRequest: 0,
        };

        addAdoptionRequest(adoptionData);
        console.log('Adoption request:', adoptionData);
        closeModal();
    };

    const addAdoptionRequest = (adoptionData) => {
        if (phone !== '' && address !== '') {
            fetch('http://localhost:5000/addAdoptionRequest', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(adoptionData)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                Swal.fire('Success', 'Request added successfully!', 'success');
                setPhone(''); // Correctly update state using setter
                setAddress(''); // Correctly update state using setter
            })
            .catch(error => {
                console.error('Add Adoption Request error:', error);
            });
        } else {
            Swal.fire('Error', 'Phone number and location should be added', 'error');
        }
    };

    if (!pet) return <div>Loading...</div>;

    return (
        <div className="" style={{ paddingTop: '80px' }} >
            <Helmet>
                <title>Adopt Me | Pet Details</title>
            </Helmet>
            <div className="w-full h-[570px] mb-4">
                <img src={pet.petImage} alt={pet.petName} className="w-full h-full object-cover rounded-md" />
            </div>
            <h1 className="text-2xl font-semibold mb-2">{pet.petName}</h1>
            <p className="text-sm text-gray-500 mb-2">Age: {pet.petAge}</p>
            <p className="text-sm text-gray-500 mb-2">Location: {pet.petLocation}</p>
            <p className="text-sm text-gray-500 mb-2">Description: {pet.shortDescription}</p>
            <p className="text-sm text-gray-500 mb-2">Description: {pet.longDescription}</p>
            <button onClick={openModal} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
                Adopt
            </button>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Adopt Pet"
                className="fixed inset-0 flex items-center justify-center z-50"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
            >
                <div className="bg-white rounded-lg p-6 w-full max-w-md">
                    <h2 className="text-xl font-semibold mb-4">Adopt {pet.petName}</h2>
                    <h2>{user?.displayName}</h2>
                    <h2>{user?.email}</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <input
                                type="number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Address</label>
                            <input
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none">
                            Submit
                        </button>
                    </form>
                    <button onClick={closeModal} className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none">
                        Cancel
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default PetDetails;