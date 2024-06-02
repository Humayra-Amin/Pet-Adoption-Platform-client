import banner from '../../assets/images/banner.png'

const Banner = () => {
    return (
       
        <div className="hero h-[600px] bg-green-500">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={banner} className="lg:h-[550px] lg:w-[850px]" />
          <div>
            <h1 className="text-5xl font-bold playfair text-white">Adopt, Don't Shop!</h1>
            <p className="py-6 text-white robotoSlab">Join us in our mission to find forever homes for every pet. Together, we can make a difference, one adoption at a time.</p>
            <button className="btn bg-white border-2 border-green-800 hover:bg-green-300 hover:border-2 hover:border-green-800">Get Started</button>
          </div>
        </div>
      </div>

    );
};

export default Banner;