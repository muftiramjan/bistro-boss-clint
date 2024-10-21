import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'; 
import 'swiper/css/pagination';
import 'swiper/css';
import sliad1 from "../../../assets/home/slide1.jpg";
import sliad2 from "../../../assets/home/slide2.jpg";
import sliad3 from "../../../assets/home/slide3.jpg";
import sliad4 from "../../../assets/home/slide4.jpg";
import sliad5 from "../../../assets/home/slide5.jpg";
import sliad6 from "../../../assets/home/slide1.jpg"; // New images
import sliad7 from "../../../assets/home/slide2.jpg";
import sliad8 from "../../../assets/home/slide3.jpg";
import sliad9 from "../../../assets/home/slide4.jpg";
import sliad10 from "../../../assets/home/slide5.jpg";
import SectionHide from '../../../components/SectionHide';


const FoodCategory = () => {
  return (
    <section className="py-16 bg-gray-100">
      <SectionHide
        sabheding={'---From 11:00am to 10:00pm---'}
        heding={'ORDER ONLINE'}
      />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper mb-16"
      >
        <SwiperSlide className="relative">
          <img src={sliad1} alt="Salad" className="w-full h-full object-cover rounded-lg shadow-md" />
          <h3 className='text-3xl font-bold text-white absolute bottom-4 left-1/2 transform -translate-x-1/2 uppercase bg-black/50 px-4 py-2 rounded-lg'>
            Salad
          </h3>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img src={sliad2} alt="Pizza" className="w-full h-full object-cover rounded-lg shadow-md" />
          <h3 className='text-3xl font-bold text-white absolute bottom-4 left-1/2 transform -translate-x-1/2 uppercase bg-black/50 px-4 py-2 rounded-lg'>
            Pizza
          </h3>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img src={sliad3} alt="Soups" className="w-full h-full object-cover rounded-lg shadow-md" />
          <h3 className='text-3xl font-bold text-white absolute bottom-4 left-1/2 transform -translate-x-1/2 uppercase bg-black/50 px-4 py-2 rounded-lg'>
            Soups
          </h3>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img src={sliad4} alt="Desserts" className="w-full h-full object-cover rounded-lg shadow-md" />
          <h3 className='text-3xl font-bold text-white absolute bottom-4 left-1/2 transform -translate-x-1/2 uppercase bg-black/50 px-4 py-2 rounded-lg'>
            Desserts
          </h3>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img src={sliad5} alt="Salad" className="w-full h-full object-cover rounded-lg shadow-md" />
          <h3 className='text-3xl font-bold text-white absolute bottom-4 left-1/2 transform -translate-x-1/2 uppercase bg-black/50 px-4 py-2 rounded-lg'>
            Salad
          </h3>
        </SwiperSlide>

        {/* New Slides */}
        <SwiperSlide className="relative">
          <img src={sliad6} alt="Burger" className="w-full h-full object-cover rounded-lg shadow-md" />
          <h3 className='text-3xl font-bold text-white absolute bottom-4 left-1/2 transform -translate-x-1/2 uppercase bg-black/50 px-4 py-2 rounded-lg'>
            Burger
          </h3>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img src={sliad7} alt="Pasta" className="w-full h-full object-cover rounded-lg shadow-md" />
          <h3 className='text-3xl font-bold text-white absolute bottom-4 left-1/2 transform -translate-x-1/2 uppercase bg-black/50 px-4 py-2 rounded-lg'>
            Pasta
          </h3>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img src={sliad8} alt="Sandwich" className="w-full h-full object-cover rounded-lg shadow-md" />
          <h3 className='text-3xl font-bold text-white absolute bottom-4 left-1/2 transform -translate-x-1/2 uppercase bg-black/50 px-4 py-2 rounded-lg'>
            Sandwich
          </h3>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img src={sliad9} alt="Fries" className="w-full h-full object-cover rounded-lg shadow-md" />
          <h3 className='text-3xl font-bold text-white absolute bottom-4 left-1/2 transform -translate-x-1/2 uppercase bg-black/50 px-4 py-2 rounded-lg'>
            Fries
          </h3>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img src={sliad10} alt="Ice Cream" className="w-full h-full object-cover rounded-lg shadow-md" />
          <h3 className='text-3xl font-bold text-white absolute bottom-4 left-1/2 transform -translate-x-1/2 uppercase bg-black/50 px-4 py-2 rounded-lg'>
            Ice Cream
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default FoodCategory;
