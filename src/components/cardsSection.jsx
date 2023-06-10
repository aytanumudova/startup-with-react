import React from "react";
import Card from "./card";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Autoplay, Navigation } from "swiper";

// Datas
import dataBase from "../data.json";
const cardsSection = () => {
  return (
    <div className="cardsSection row container m-auto ">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {dataBase.map((data) => (
          // PROPS
          <SwiperSlide>
            <Card
              dataTitle={data.title}
              dataText={data.body}
              dataImg={data.img}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default cardsSection;
