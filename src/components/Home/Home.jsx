import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PetsCategory from "../PetCategory/PetCategory";
import CallToAction from "../CallToAction/CallToAction";
import About from "../About/About";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PetsCategory></PetsCategory>
            <CallToAction></CallToAction>
            <About></About>
            <Helmet>
                <title>PawPet | Home</title>
            </Helmet>
        </div>
    );
};

export default Home;