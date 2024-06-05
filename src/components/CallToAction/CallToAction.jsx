import pic from '../../assets/images/ins.png'
const CallToAction = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img src={pic} className="rounded-lg shadow-md w-full" />
          </div>
          <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Give a Pet a Better Life</h2>
            <p className="text-gray-700 mb-6">
              Adopting a pet can bring joy and companionship to your life while giving a homeless animal a loving home. Be a hero and change a life today!
            </p>
            <button className=" btn inline-block px-6 py-3 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">Adopt Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
