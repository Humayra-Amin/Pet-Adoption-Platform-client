import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const UserProfile = () => {

    const { user } = useAuth();

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userImage, setUserImage] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        if (user) {
            setUserName(user.displayName || '');
            setUserEmail(user.email || '')
            setUserImage(user.photoURL || '')
            setLoggedIn(true)
        }
        else {
            setLoggedIn(false)
        }
    }, [user])


    return (
        <div className="min-h-screen">

            <h1 className="flex justify-center text-center mt-20 text-5xl playfair">User Profile</h1>

            <Helmet>
                <title>PawPets | User Profile</title>
            </Helmet>

            <div className="container mx-auto w-10/12 lg:w-4/5 text-center text-xl">

                {loggedIn ? (

                    <div className="card border-2 border-green-600 bg-green-200 mt-4 -ml-6 w-[350px] shadow-xl lg:w-[600px] md:w-[600px] lg:ml-[300px] lg:mt-10">
                        <figure className="px-8 pt-8">
                            <img src={userImage} alt="" className="rounded-xl w-[200px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Name: <span className="font-normal">{userName}</span></h2>
                            <h2 className="card-title">Email: <span className="font-normal">{userEmail}</span></h2>
                        </div>
                    </div>

                ) : (

                    <div className="border-2 border-green-600 bg-green-200 rounded-lg shadow-lg lg:p-6 mt-6 lg:w-[500px] lg:ml-[330px]">

                        <h1 className="robotoSlab text-2xl text-black">You have been logged out</h1>
                        <p className="text-slate-400">Please login</p>

                        <div>

                            <button className="mt-10 mb-10"><Link to="/" className="btn-ghost bg-green-100 hover:bg-green-800 hover:text-white border border-green-600 text-black font-medium text-xl text-center rounded-xl p-2 robotoSlab">Home</Link></button>

                            <button className="mt-10"><Link to="/login" className="btn-ghost bg-green-500 border border-green-600 text-white font-medium text-xl text-center ml-[40px] lg:ml-[180px] rounded-xl p-2 robotoSlab hover:bg-green-800">Login Page</Link></button>

                        </div>

                    </div>

                )}

            </div>
        </div>
    );
};

export default UserProfile;