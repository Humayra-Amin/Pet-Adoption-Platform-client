import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Select from 'react-select';
import axios from 'axios';
import Swal from 'sweetalert2';
import useAuth from '@/hooks/useAuth';
import { Helmet } from 'react-helmet-async';

const petCategories = [
    { value: 'dog', label: 'Dog' },
    { value: 'cat', label: 'Cat' },
    { value: 'bird', label: 'Bird' },
    { value: 'kitten', label: 'Kitten' },
    { value: 'rabbit', label: 'Rabbit' },
];

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdatePets = () => {
    const pet = useLoaderData();
    const { user } = useAuth();
    const now = new Date();

    const [form, setForm] = useState({
        petImage: pet.petImage || '',
        petName: pet.petName || '',
        petAge: pet.petAge || '',
        petCategory: pet.petCategory || '',
        petLocation: pet.petLocation || '',
        shortDescription: pet.shortDescription || '',
        longDescription: pet.longDescription || '',
        ownerImage: user?.photoURL || '',
        ownerName: user?.displayName || '',
        ownerEmail: user?.email || '',
        creationDate: pet.creationDate || `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`,
        creationTime: pet.creationTime || `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`,
        adopted: pet.adopted || false,
    });

    const [uploadedImageUrl, setUploadedImageUrl] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleCategoryChange = (selectedOption) => {
        setForm({
            ...form,
            petCategory: selectedOption.value
        });
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await axios.post(image_hosting_api, formData);
            const uploadedUrl = response.data.data.url;
            setForm({
                ...form,
                petImage: uploadedUrl
            });
            setUploadedImageUrl(uploadedUrl);
        } catch (error) {
            if (error.response) {
                console.error('Error response:', error.response.data);
                console.error('Error status:', error.response.status);
                console.error('Error headers:', error.response.headers);
            } else if (error.request) {
                console.error('Error request:', error.request);
            } else {
                console.error('Error message:', error.message);
            }
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:5000/updatePet/${pet._id}`, form);
            if (response.status === 200) {
                Swal.fire('Success', 'Pet updated successfully!', 'success');
            } else {
                Swal.fire('Error', 'Failed to update pet', 'error');
            }
        } catch (error) {
            console.error('Update error:', error);
            Swal.fire('Error', 'Failed to update pet', 'error');
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white border-2 border-green-600 shadow-md rounded-lg">
            <Helmet>
                <title>PawPet | Update Pet</title>
            </Helmet>

            <div className="text-center">
                <h1 className="text-4xl md:text-3xl lg:text-5xl font-bold playfair text-green-600">Update Pet</h1>
                <p className="py-6 robotoSlab md:text-xl lg:text-2xl text-green-400">Update the form of pet</p>
            </div>
            <form onSubmit={handleUpdate}>
                <div className="mb-4">
                    <label className="block text-black font-semibold mb-2 robotoSlab ">Pet Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="w-full border-2 border-gray-300 p-2 rounded"
                    />
                    {uploadedImageUrl && (
                        <div className="mt-4">
                            <img src={uploadedImageUrl} alt="Uploaded Pet" className="w-full h-auto rounded" />
                        </div>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-black font-semibold mb-2">Pet Name</label>
                    <input
                        type="text"
                        name="petName"
                        value={form.petName}
                        onChange={handleChange}
                        required
                        className="w-full border-2 border-gray-300 p-2 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-black font-semibold mb-2">Pet Age</label>
                    <input
                        type="number"
                        name="petAge"
                        value={form.petAge}
                        onChange={handleChange}
                        required
                        className="w-full border-2 border-gray-300 p-2 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-black font-semibold mb-2">Pet Category</label>
                    <Select
                        options={petCategories}
                        value={petCategories.find(option => option.value === form.petCategory)}
                        onChange={handleCategoryChange}
                        className="w-full border-2 border-gray-300 p-2 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-black font-semibold mb-2">Pet Location</label>
                    <input
                        type="text"
                        name="petLocation"
                        value={form.petLocation}
                        onChange={handleChange}
                        required
                        className="w-full border-2 border-gray-300 p-2 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-black font-semibold mb-2">Short Description</label>
                    <input
                        type="text"
                        name="shortDescription"
                        value={form.shortDescription}
                        onChange={handleChange}
                        required
                        className="w-full border-2 border-gray-300 p-2 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-black font-semibold mb-2">Long Description</label>
                    <textarea
                        name="longDescription"
                        value={form.longDescription}
                        onChange={handleChange}
                        required
                        className="w-full border-2 border-gray-300 p-2 rounded h-32"
                    />
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700"
                    >
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdatePets;