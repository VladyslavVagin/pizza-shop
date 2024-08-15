import Subtitle from "@/components/Common/Subtitle/Subtitle";
import Title from "@/components/Common/Title/Title";
import ListJobs from "./ListJobs/ListJobs";

const WhatWeDo = () => {
  return (
    <div className="pt-24 pb-[121px]">
      <div className="max-w-[1200px] mx-auto flex items-start justify-between">
        <div>
          <Subtitle className="text-black mb-4 bg-subtitle_background max-w-24">What We Do</Subtitle>
          <Title>Safe & Reliable Cargo Solutions</Title>
        </div>
        <ListJobs />
      </div>
    </div>
  );
};

export default WhatWeDo;
