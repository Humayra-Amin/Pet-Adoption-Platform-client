import { useState, useEffect } from 'react';
import { Helmet } from "react-helmet-async";
import Swal from 'sweetalert2';
import useAuth from "@/hooks/useAuth";
import Select from 'react-select';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import axios from 'axios';
import Dashboard from '../Dashboard/Dashboard';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddPet = () => {
    const { user } = useAuth();

    const [petImage, setPetImage] = useState(null);
    const [petName, setPetName] = useState('');
    const [petAge, setPetAge] = useState('');
    const [petCategory, setPetCategory] = useState('');
    const [petLocation, setPetLocation] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [longDescription, setLongDescription] = useState('');
    const [adopted, setAdopted] = useState(false);
    const [petId, setPetId] = useState(null);

    const axiosPublic = useAxiosPublic();

    const handleImageChange = async (event) => {
        const imageFile = event.target.files[0];
        const formData = new FormData();
        formData.append('image', imageFile);
    
        try {
            const res = await axiosPublic.post(image_hosting_api, formData);
            console.log(res);
            setPetImage(res.data.data.display_url);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleAddPet = async (event) => {
        event.preventDefault();

        if (
            !petImage ||
            !petName ||
            !petAge ||
            !petCategory ||
            !shortDescription ||
            !longDescription
        ) {
            Swal.fire({
                title: 'Error',
                text: 'Please fill out all the fields',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }

        const currentDate = new Date(); 
        const formattedDate = currentDate.toLocaleString(); 
        const newPet = {
            petImage,
            petName,
            petAge,
            petCategory: petCategory.value,
            petLocation,
            shortDescription,
            longDescription,
            userEmail: user?.email,
            addedDate: formattedDate,
            adopted: adopted 
        };

        try {
            const response = await axios.post('http://localhost:5000/pets', newPet);
            if (response.data.insertedId) {
                setPetId(response.data.insertedId);
                Swal.fire({
                    title: 'Success',
                    text: `Pet added successfully`,
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
                setPetImage(null);
                setPetName('');
                setPetAge('');
                setPetCategory('');
                setPetLocation('');
                setShortDescription('');
                setLongDescription('');
                setAdopted(false);
            }
        } catch (error) {
            Swal.fire({
                title: 'Error',
                text: 'An error occurred while adding pet',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        if (petId !== null) {
            const updateAdoptedStatus = async () => {
                try {
                    await axios.put(`http://localhost:5000/pets/${petId}`, { adopted });
                    console.log('Adopted status updated successfully');
                } catch (error) {
                    console.error('Error updating adopted status:', error);
                }
            };

            updateAdoptedStatus();
        }
    }, [adopted, petId]);

    const petCategories = [
        { value: 'all', label: 'All' },
        { value: 'dog', label: 'Dog' },
        { value: 'cat', label: 'Cat' },
        { value: 'bird', label: 'Bird' },
    ];

    return (
        <div>
            <Helmet>
                <title>PawPet | Add Pet</title>
            </Helmet>
            <div className="flex">
                <Dashboard />
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card shrink-0 lg:w-[700px] bg-base-100">

                            <form onSubmit={handleAddPet} encType="multipart/form-data" className="card-body border-2 border-green-600 p-14 shadow-2xl rounded-xl">

                            <div className="text-center">
                                <h1 className="text-4xl md:text-3xl lg:text-5xl font-bold playfair text-green-600">Add Pets</h1>
                                <p className="py-6 robotoSlab md:text-xl lg:text-2xl text-green-400">Welcome! To add your pet to our community, please fill out the form</p>
                            </div>

                                <div className="form-control">
                                    <div className="md:flex mb-8 gap-5">
                                        <div className="form-control md:w-1/2">
                                            <label className="label">
                                                <span className="label-text">Pet Name</span>
                                            </label>
                                            <label className="input-group">
                                                <input type="text" name="petName" value={petName} onChange={(e) => setPetName(e.target.value)} placeholder="Name" className="input input-bordered w-full" />
                                            </label>
                                        </div>
                                        <div className="form-control md:w-1/2">
                                            <label className="label">
                                                <span className="label-text">Pet Age</span>
                                            </label>
                                            <label className="input-group">
                                                <input type="text" name="petAge" value={petAge} onChange={(e) => setPetAge(e.target.value)} placeholder="Age" className="input input-bordered w-full" />
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-control">
                                    <div className="md:flex mb-8 gap-5">
                                        <div className="form-control md:w-1/2">
                                            <label className="label">
                                                <span className="label-text">Pet Category</span>
                                            </label>
                                            <Select
                                                value={petCategory}
                                                onChange={(selectedOption) => setPetCategory(selectedOption)}
                                                options={petCategories}
                                                className="w-full"
                                            />
                                        </div>
                                        <div className="form-control md:w-1/2">
                                            <label className="label">
                                                <span className="label-text">Pet Location</span>
                                            </label>
                                            <label className="input-group">
                                                <input type="text" name="petLocation" value={petLocation} onChange={(e) => setPetLocation(e.target.value)} placeholder="Location" className="input input-bordered w-full" />
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-control">
                                    <div className="md:flex mb-8 gap-5">
                                        <div className="form-control md:w-1/2">
                                            <label className="label">
                                                <span className="label-text">Pet Image</span>
                                            </label>
                                            <input type="file" name="petImage" onChange={handleImageChange} accept="image/*" className="input input-bordered w-full" />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Short Description</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name="shortDescription" value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} placeholder="Short Description" className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Long Description</span>
                                    </label>
                                    <label className="input-group">
                                        <textarea name="longDescription" value={longDescription} onChange={(e) => setLongDescription(e.target.value)} placeholder="Long Description" className="textarea textarea-bordered w-full h-40" />
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn bg-green-400 border-green-800 text-white text-xl hover:bg-white hover:text-black hover:border-green-700">Add</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPet;
