"use client";

import { FC, useRef } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper } from "swiper/react";
import { IoArrowForwardOutline, IoArrowBackOutline } from "react-icons/io5";
import "swiper/css";
import "swiper/css/navigation";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const ReviewsSlider: FC<Props> = ({ children, className }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={2}
        autoplay={{
          delay: 5000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper: any) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        modules={[Autoplay, Navigation]}
        className={className}
      >
        {children}
      </Swiper>
      <div
        ref={navigationPrevRef}
        className="absolute top-8 right-14 z-30 cursor-pointer w-[44px] h-[44px] bg-accent-gradient rounded-full flex items-center justify-center transition-all duration-500 hover:scale-125"
      >
        <IoArrowBackOutline className="w-6 h-6 stroke-primary_2" />
      </div>
      <div
        ref={navigationNextRef}
        className="absolute top-8 right-0 z-30 cursor-pointer w-[44px] h-[44px] bg-primary_2 rounded-full flex items-center justify-center transition-all duration-500 hover:scale-125"
      >
        <IoArrowForwardOutline className="w-6 h-6 stroke-white" />
      </div>
    </>
  );
};

export default ReviewsSlider;
