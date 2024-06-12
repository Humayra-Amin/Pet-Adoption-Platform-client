import { useState } from 'react';
import { Helmet } from "react-helmet-async";
import Swal from 'sweetalert2';
import useAuth from "@/hooks/useAuth";
import useAxiosPublic from '@/hooks/useAxiosPublic';
import Dashboard from '../Dashboard/Dashboard';
import axios from 'axios';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const CreateDonationCamp = () => {
    const { user } = useAuth();
    const [petImage, setPetImage] = useState(null);
    const [maxAmount, setMaxAmount] = useState('');
    const [lastDate, setLastDate] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [longDescription, setLongDescription] = useState('');
    const axiosPublic = useAxiosPublic();

    const handleImageChange = async (event) => {
        const imageFile = event.target.files[0];
        const formData = new FormData();
        formData.append('image', imageFile);
    
        try {
            const res = await axiosPublic.post(image_hosting_api, formData);
            setPetImage(res.data.data.display_url);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleAddDonation = async (event) => {
        event.preventDefault();

        if (!petImage || !maxAmount || !lastDate || !shortDescription || !longDescription) {
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
        const newDonationCampaign = {
            petImage,
            maxAmount,
            lastDate,
            shortDescription,
            longDescription,
            userEmail: user?.email,
            addedDate: formattedDate,
        };

        try {
            const response = await axios.post('http://localhost:5000/donations', newDonationCampaign);
            if (response.data.insertedId) {
                Swal.fire({
                    title: 'Success',
                    text: 'Donation campaign created successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
                setPetImage(null);
                setMaxAmount('');
                setLastDate('');
                setShortDescription('');
                setLongDescription('');
            }
        } catch (error) {
            Swal.fire({
                title: 'Error',
                text: 'An error occurred while creating the donation campaign',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <Helmet>
                <title>Create Donation Campaign</title>
            </Helmet>
            <div className="flex">
                <Dashboard />
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card shrink-0 lg:w-[700px] bg-base-100">
                            <form onSubmit={handleAddDonation} encType="multipart/form-data" className="card-body border-2 border-green-600 p-14 shadow-2xl rounded-xl">
                                <div className="text-center">
                                    <h1 className="text-4xl font-bold text-green-600">Create Donation Campaign</h1>
                                    <p className="py-6 text-green-400">Fill out the form to create a new donation campaign</p>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Pet Image</span>
                                    </label>
                                    <input type="file" name="petImage" onChange={handleImageChange} accept="image/*" className="input input-bordered w-full" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Maximum Donation Amount</span>
                                    </label>
                                    <input type="number" name="maxAmount" value={maxAmount} onChange={(e) => setMaxAmount(e.target.value)} placeholder="Maximum Donation Amount" className="input input-bordered w-full" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Last Date of Donation</span>
                                    </label>
                                    <input type="date" name="lastDate" value={lastDate} onChange={(e) => setLastDate(e.target.value)} className="input input-bordered w-full" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Short Description</span>
                                    </label>
                                    <input type="text" name="shortDescription" value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} placeholder="Short Description" className="input input-bordered w-full" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Long Description</span>
                                    </label>
                                    <textarea name="longDescription" value={longDescription} onChange={(e) => setLongDescription(e.target.value)} placeholder="Long Description" className="textarea textarea-bordered w-full h-40" />
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn bg-green-400 border-green-800 text-white text-xl hover:bg-white hover:text-black hover:border-green-700">Create</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateDonationCamp;
