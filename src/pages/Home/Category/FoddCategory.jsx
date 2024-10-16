import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import sliad1 from "../../../assets/home/slide1.jpg"
import sliad2 from "../../../assets/home/slide2.jpg"
import sliad3 from "../../../assets/home/slide3.jpg"
import sliad4 from "../../../assets/home/slide4.jpg"
import sliad5 from "../../../assets/home/slide5.jpg"
import Sectionhedin from '../../../components/Sectionhedin';
const FoddCategory = () => {
    return (
     <section>
        <Sectionhedin
        sabheding={'---From 11:00am to 10:00pm---'}
        heding={'ORDER ONLINE'}
        ></Sectionhedin>
     
       <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-16"
      >
        <SwiperSlide>
            <img src={sliad1} alt="" />
            <h3 className='text-3xl text- -mt-16 text-center uppercase'>salad</h3>
            </SwiperSlide>
        <SwiperSlide><img src={sliad2} alt="" />
        <h3 className='text-3xl text- -mt-16 text-center uppercase'>pizza</h3></SwiperSlide>
        <SwiperSlide><img src={sliad3} alt="" />
        <h3 className='text-3xl text- -mt-16 text-center uppercase'>suops</h3></SwiperSlide>
     
        <SwiperSlide><img src={sliad4} alt="" />
        <h3 className='text-3xl text- -mt-16 text-center uppercase'>desserts</h3></SwiperSlide>
        <SwiperSlide><img src={sliad5} alt="" />  <h3 className='text-3xl text- -mt-16 text-center uppercase'>salad</h3></SwiperSlide>
       
      </Swiper>

     </section>
    );
};

export default FoddCategory;