import Subtitle from "@/components/Common/Subtitle/Subtitle";
import Title from "@/components/Common/Title/Title";
import ListJobs from "./ListJobs/ListJobs";

const WhatWeDo = () => {
  return (
    <div>
      <div className="max-w-[1200px] mx-auto">
        <div>
          <Subtitle className="text-black">What We Do</Subtitle>
          <Title>Safe & Reliable Cargo Solutions</Title>
        </div>
        <ListJobs />
      </div>
    </div>
  );
};

export default WhatWeDo;
