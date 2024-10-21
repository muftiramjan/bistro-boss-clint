import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import SectionHide from '../../../components/SectionHide';


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch the reviews from the local JSON data
        fetch('/reviews.json')  // Assuming reviews.json is in your public folder
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching reviews:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="text-center my-10">Loading testimonials...</div>;
    }

    return (
        <section className="my-20 relative">
            <SectionHide
                subheading={'---What Our Clients Say---'}
                heading={'TESTIMONIALS'}
            />
            
            {/* Introductory Text */}
            <div className="text-center mx-auto max-w-2xl mb-12">
                <p className="text-lg text-gray-600">
                    At Bistro Boss, we believe in delivering an exceptional dining experience. 
                    But don’t just take our word for it — see what our valued customers have to say about their experience!
                </p>
            </div>

            {/* Swiper with inline navigation */}
            <Swiper
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                modules={[Navigation]}
                className="mySwiper"
            >
                {
                    reviews.map(review => (
                        <SwiperSlide key={review._id}>
                            <div className="flex flex-col items-center m-24 space-y-6">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}  // Updated to use the correct key for rating
                                    readOnly
                                />
                                <p className="text-gray-700 max-w-xl text-center">
                                    {review.details}
                                </p>
                                <h3 className="text-yellow-500 font-semibold text-3xl">{review.name}</h3>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            {/* Inline CSS for navigation buttons */}
            <div
                className="swiper-button-prev"
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '10px',
                    transform: 'translateY(-50%)',
                    zIndex: 10,
                    color: '#f59e0b',
                    fontSize: '24px',
                    cursor: 'pointer',
                }}
            ></div>
            <div
                className="swiper-button-next"
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: '10px',
                    transform: 'translateY(-50%)',
                    zIndex: 10,
                    color: '#f59e0b',
                    fontSize: '24px',
                    cursor: 'pointer',
                }}
            ></div>

            {/* Conclusion Text */}
            <div className="text-center mx-auto max-w-2xl mt-12">
                <p className="text-lg text-gray-600">
                    We love hearing from our customers. If you have a story to share or want to leave a review, 
                    feel free to reach out to us or visit us again soon!
                </p>
            </div>
        </section>
    );
};

export default Testimonials;
