import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PetsCategory from "../PetCategory/PetCategory";
import CallToAction from "../CallToAction/CallToAction";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PetsCategory></PetsCategory>
            <CallToAction></CallToAction>
            <Helmet>
                <title>PawPet | Home</title>
            </Helmet>
        </div>
    );
};

export default Home;