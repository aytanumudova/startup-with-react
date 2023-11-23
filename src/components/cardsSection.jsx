import React from "react";
import Card from "./card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

import dataBase from "../data.json";

const cardsSection = () => {
  return (
    <div className="cardsSection row container m-auto py-5 my-5">
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
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
        modules={[Autoplay, Pagination]}
        className="pb-5"
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
