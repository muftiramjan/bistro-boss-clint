import Sectionhedin from "../../../components/Sectionhedin";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const TESTIMONIALS = () => {
    const [Reviws, setReviw] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviw(data));
        // {
        // const pupoleritems =data.filter(item => item.category === 'popular')
        // setmenu(pupoleritems)})
    }, [])

    return (
        <section className="my-20">
            <Sectionhedin
                sabheding={'---What Our Clients Say---'}
                heding={'TESTIMONIALS'}
            ></Sectionhedin>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    Reviws.map(Reviw => <SwiperSlide
                        key={Reviw._id}

                    >
                        <div className="flex flex-col items-center m-24 space-y-6">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={Reviw.Rating}
                                readOnly
                            />
                            <p>
                                {Reviw.details}
                            </p>
                            <h3 className="text-yellow-500 font-semibold text-3xl">{Reviw.name}</h3>
                        </div>

                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default TESTIMONIALS;