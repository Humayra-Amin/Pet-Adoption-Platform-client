import { Helmet } from "react-helmet-async";
import dog1 from '../../assets/images/dog1.jfif'

const PetDetails = () => {
    return (
        <div>
            <Helmet>
                <title>PawPets | Pet Details</title>
            </Helmet>

            <div className="hero h-[400px]" style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhi95CJJ89xEj2a05qjDLe9cmasi42TKKrQA&s' }}>
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-8xl text-black font-bold text-center playfair mt-[55px] md:mt-[100px] lg:mt-[100px]">Pet Details</h1>
                    </div>
                </div>
            </div>

            <div className="container mx-auto my-10 flex justify-center">

                <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
                    <img className="object-cover w-full rounded-t-lg h-80 md:h-[300px] lg:h-[300px] md:w-[300px] lg:w-[300px] md:rounded-none md:rounded-s-lg" src={dog1} />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Pet Name</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Pet Id</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Pet Details</p>
                        <div>
                            <button className=" btn inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 robotoSlab">Adopt</button>
                        </div>
                    </div>
                </div>

            </div> 

        </div>
    );
};

export default PetDetails;