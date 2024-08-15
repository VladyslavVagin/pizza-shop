import Image from "next/image";
import Subtitle from "@/components/Common/Subtitle/Subtitle";
import Title from "@/components/Common/Title/Title";
import Benefits from "./Benefits/Benefits";

const WeProvide = () => {
  return (
    <div className="w-full min-h-[504px] bg-weprovide-pattern bg-no-repeat bg-cover relative">
      <div className="w-[1200px] p-[85px] bg-white mx-auto absolute bottom-[-360px] left-[10%]">
        <div className="w-[492px] flex flex-col items-start gap-3">
          <Subtitle className="bg-subtitle_background w-[68px]">
            Why us
          </Subtitle>
          <Title className="text-heading_font w-full">
            We provide full range global logistics solution
          </Title>
          <p className="text-base font-medium text-paragraph_font mb-2">
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value
            proposition.
          </p>
          <p className="text-base font-medium text-paragraph_font">
            Organically grow the holistic world view of disruptive innovation
            via workplace diversity and empowerment.
          </p>
          <Benefits />
        </div>
        <Image
          src="/images/weprovide.webp"
          alt="We provide global logistics solution"
          width={518}
          height={462}
          className="absolute right-[85px] top-[85px]"
        />
      </div>
    </div>
  );
};

export default WeProvide;
