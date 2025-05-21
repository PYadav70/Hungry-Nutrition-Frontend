import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { assets } from "../assets/assets";

const EnhancedCarousel = () => {
  return (
    <div className="bg-black text-white py-10 w-full">
      <div className="max-w-7xl mx-auto px-8">
        <Swiper
          pagination={{ clickable: true }} 
          autoplay={{
            delay: 3000, 
            disableOnInteraction: false, 
          }}
          loop={true} 
          speed={1000} 
          modules={[Pagination, Autoplay]} 
          className="mySwiper"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              
              <div className="lg:w-1/2 text-center lg:text-left">
                <h2 className="text-4xl lg:text-5xl font-bold">Hungry Whey</h2>
                <p className="text-lg text-gray-300 mt-4">
                  Ultra Premium 100% Whey Protein | Sugar Free | Lactose Free | Soy Free
                </p>
                <button className="bg-white text-black px-6 py-2 mt-6 rounded-lg hover:bg-gray-300">
                  Shop now →
                </button>
              </div>

              {/* Image Section */}
              <div className="lg:w-1/2 flex justify-center lg:justify-end">
                <img
                  src={assets.hungry_hero}
                  alt="Hungry Whey Products"
                  className="w-full max-w-md"
                />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Text Section */}
              <div className="lg:w-1/2 text-center lg:text-left">
                <h2 className="text-4xl lg:text-5xl font-bold">Mass Gainer</h2>
                <p className="text-lg text-gray-300 mt-4">
                  Premium Mass Gainer for Ultimate Muscle Growth.
                </p>
                <button className="bg-white text-black px-6 py-2 mt-6 rounded-lg hover:bg-gray-300">
                  Shop now →
                </button>
              </div>

              {/* Image Section */}
              <div className="lg:w-1/2 flex justify-center lg:justify-end">
                <img
                  src={assets.hungry_img3}
                  alt="Mass Gainer Products"
                  className="w-full max-w-md"
                />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Text Section */}
              <div className="lg:w-1/2 text-center lg:text-left">
                <h2 className="text-4xl lg:text-5xl font-bold">Omega 3</h2>
                <p className="text-lg text-gray-300 mt-4">
                  Healthy fats for brain and heart health.
                </p>
                <button className="bg-white text-black px-6 py-2 mt-6 rounded-lg hover:bg-gray-300">
                  Shop now →
                </button>
              </div>

              {/* Image Section */}
              <div className="lg:w-1/2 flex justify-center lg:justify-end">
                <img
                  src={assets.hungry_img7}
                  alt="Omega 3 Products"
                  className="w-full max-w-md"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default EnhancedCarousel;






