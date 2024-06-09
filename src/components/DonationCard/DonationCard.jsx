import { Link } from 'react-router-dom';

const DonationCard = ({ donation }) => {
    const { _id,petImage, petName, maxAmount, donationAmount } = donation;

    return (
        <div className="bg-white border-2 border-green-700 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg w-[450px] h-[300px]" src={petImage} alt={petName} />
            <div className="p-5">
                <h5 className="mb-2 text-2xl lg:text-4xl font-bold tracking-tight text-black-900 dark:text-white">{petName}</h5>
                <p className="mb-3 font-semibold text-black lg:text-xl">Max Donation Amount: <span className="text-gray-600 font-normal">{maxAmount}</span></p>
                <p className="mb-3 font-semibold text-black lg:text-xl">Donated Amount: <span className="text-gray-600 font-normal">{donationAmount}</span></p>
                <Link to={`/donations/${_id}`}>
                    <button className="btn inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800">
                        Adopt
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default DonationCard;
