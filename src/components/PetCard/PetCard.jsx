import { Link } from "react-router-dom";

const PetCard = ({ pet }) => {
    const { _id, petImage, petName, petAge, petLocation } = pet;
    
    return (
        <div>
            <div className="bg-white border-2 border-green-700 rounded-lg shadow-lg dark:bg-black-800 dark:border-black-700">
                <div>
                    <img className="rounded-t-lg w-[450px] h-[300px]" src={petImage} alt={petName} />
                </div>
                <div className="p-5">
                    <h5 className="mb-2 text-2xl lg:text-4xl font-bold tracking-tight text-black-900 dark:text-white playfair">{petName}</h5>
                    <p className="mb-3 font-semibold text-black lg:text-xl robotoSlab">Pet Age: <span className="text-gray-600 robotoSlab font-normal">{petAge}</span></p>
                    <p className="mb-3 font-semibold text-black lg:text-xl robotoSlab">Pet Location: <span className="text-gray-600 robotoSlab font-normal">{petLocation}</span></p>
                    <Link to={`/pets/${_id}`}>
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
