"use client";

import { SwiperSlide } from "swiper/react";
import { reviews } from "@/data/reviews";
import Subtitle from "@/components/Common/Subtitle/Subtitle";
import Title from "@/components/Common/Title/Title";
import ReviewsSlider from "./ReviewsSlider/ReviewsSlider";
import Review from "./Review/Review";

const Testimonial = () => {
  return (
    <section className="pt-[400px] pb-[102px]">
      <div className="max-w-[1200px] mx-auto">
        <Subtitle className="text-black mb-4 bg-subtitle_background">
          Testimonial
        </Subtitle>
        <Title className="w-[464px]">What Our Customers Say</Title>
        <ReviewsSlider className="max-w-[1200px] mx-auto relative z-20 mt-[40px]">
          {reviews.map((review, index) => (
            <SwiperSlide key={review.id}>
              <Review review={review} index={index}/>
            </SwiperSlide>
          ))}
        </ReviewsSlider>
      </div>
    </section>
  );
};

export default Testimonial;
