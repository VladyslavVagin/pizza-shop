"use client";

import { SwiperSlide } from "swiper/react";
import { services } from "@/data/services";
import Title from "@/components/Common/Title/Title";
import CardService from "./CardService/CardService";
import Slider from "@/components/Common/Slider/Slider";

const TransportingAcross = () => {
  return (
    <div>
      <div>
        <Title className="w-full text-center mb-[35px]">
          Transporting Across The World
        </Title>
        <Slider className="flex flex-wrap items-center justify-center gap-5 max-w-[1400px] mx-auto">
          {services.map((serv) => (
            <SwiperSlide key={serv.id} className="w-[320px] h-[408px]">
              <CardService serv={serv} />
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TransportingAcross;
