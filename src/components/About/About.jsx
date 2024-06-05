import pics from '../../assets/images/group.jpg'
const About = () => {
    return (
        <div>
            <div>
                <h1 className="mt-10 text-5xl playfair text-center underline">About</h1>
            </div>

            <div>
                <section className="py-16">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row lg:space-x-12">
                            <div className="lg:w-1/2 mb-8 lg:mb-0 border-2 rounded-lg border-green-800">
                                <img src={pics} className="w-full rounded-lg shadow-md" />
                            </div>
                            <div className="lg:w-1/2 lg:mt-20">
                                <p className="mb-6 text-lg robotoSlab">
                                    Welcome to our pet adoption website! Our mission is to connect loving families with pets in need of a forever home. We believe every pet deserves a second chance at happiness, and we are dedicated to making that happen.
                                </p>
                                <p className="text-lg robotoSlab">
                                    Our website allows you to browse through profiles of pets available for adoption, read their stories, and find the perfect match for your family. We also provide resources and support for new pet owners to ensure a smooth transition and a happy life for both you and your new furry friend.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default About;