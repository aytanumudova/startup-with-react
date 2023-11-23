import React from "react";
import Card from "./card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

import dataBase from "../data.json";

const cardsSection = () => {
  return (
    <div className="cardsSection row container  m-auto">
      <Swiper
        loop={Infinity}
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
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {dataBase.map((data) => (
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
