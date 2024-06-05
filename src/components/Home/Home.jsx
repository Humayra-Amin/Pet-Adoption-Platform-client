import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PetsCategory from "../PetCategory/PetCategory";
import CallToAction from "../CallToAction/CallToAction";
import About from "../About/About";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PetsCategory></PetsCategory>
            <CallToAction></CallToAction>
            <About></About>
            <Testimonials></Testimonials>
            <Helmet>
                <title>PawPet | Home</title>
            </Helmet>
        </div>
    );
};

export default Home;