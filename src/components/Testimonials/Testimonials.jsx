import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    return (
        <div>
            <div>
                <h1 className="mt-10 text-5xl playfair text-center underline">Testimonials</h1>
            </div>
            <div className='my-20'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                        >
                            <div className='flex flex-col items-center'>
                                <Rating
                                    style={{ maxWidth: 200}}
                                    value={review.ratings}
                                    readOnly
                                />
                                <p>{review.details}</p>
                                <h3 className='text-3xl text-green-600 mt-4'>{review.name}</h3>
                            </div>
                        </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;