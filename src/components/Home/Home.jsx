import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Helmet>
                <title>PawPet | Home</title>
            </Helmet>
        </div>
    );
};

export default Home;