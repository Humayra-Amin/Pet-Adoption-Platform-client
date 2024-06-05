import bird from '../../assets/images/bird2.jpg'
const PetsCategory = () => {
    return (
        <div>
            <div>
                <h1 className="mt-10 text-5xl playfair text-center underline">Categories</h1>
            </div>

            <div className='container mx-auto my-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-5'>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
                    <a href="#">
                        <img className="rounded-t-lg" src={bird} alt="Noteworthy technology acquisitions 2021" />
                    </a>
                    <div className="p-5">
                        <a>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                PET NAME
                            </h5>
                        </a>
                    </div>
                </div>

                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
                    <a href="#">
                        <img className="rounded-t-lg" src={bird} alt="Noteworthy technology acquisitions 2021" />
                    </a>
                    <div className="p-5">
                        <a>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                PET NAME
                            </h5>
                        </a>
                    </div>
                </div>

                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
                    <a href="#">
                        <img className="rounded-t-lg w-[450px] h-[300px]" src={bird} alt="Noteworthy technology acquisitions 2021" />
                    </a>
                    <div className="p-5">
                        <a>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                PET NAME
                            </h5>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PetsCategory;
