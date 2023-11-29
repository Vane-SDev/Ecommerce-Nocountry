import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Products from "./products.json";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function Carousel() {
  const products = Products.filter((product) => product.imageDiscount);

  return (
    <div className="bg-gray-100">
      <Swiper
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={500}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <a href={product.url}>
              <div className="hidden md:flex flex-col items-center shadow-md mx-16 md:mt-24 ">
               
                <img src={product.imageDiscount} alt={product.title} />
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
