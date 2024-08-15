"use client";

import { FC } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Slider: FC<Props> = ({ children, className }) => {
  return (
    <Swiper
      spaceBetween={12}
      slidesPerView={5}
      autoplay={{
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      }}
      loop={true}
      navigation={false}
      modules={[Autoplay, Navigation]}
      className={className}
    >
      {children}
    </Swiper>
  );
};

export default Slider;
