import { Link } from "react-router-dom";

const PetCard = ({ pet }) => {
    return (
        <div>
            <div className="bg-white border-2 border-green-700 rounded-lg shadow-lg dark:bg-black-800 dark:border-black-700">
                <div>
                    <img className="rounded-t-lg w-[450px] h-[300px]" src={pet.pet_image}/>
                </div>
                <div className="p-5">
                    <h5 className="mb-2 text-2xl lg:text-4xl font-bold tracking-tight text-black-900 dark:text-white playfair">{pet.pet_name}</h5>
                    <p className="mb-3 font-semibold text-black lg:text-2xl playfair">Pet Age: <span className="text-gray-600 robotoSlab">{pet.pet_age}</span></p>
                    <p className="mb-3 font-semibold text-black lg:text-2xl playfair">Pet Location: <span className="text-gray-600 robotoSlab">{pet.pet_location}</span></p>
                    <Link to={`/petDetails/${pet._id}`}>
                        <button className="btn inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 robotoSlab">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PetCard;
