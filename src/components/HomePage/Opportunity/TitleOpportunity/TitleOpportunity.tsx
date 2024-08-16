import { BsBoxSeam } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { FaRegClock } from "react-icons/fa6";
import { MdOutlineMonetizationOn } from "react-icons/md";
import { LuShip } from "react-icons/lu";
import { TbWorld } from "react-icons/tb";
import { rubik } from "@/app/layout";
import Subtitle from "@/components/Common/Subtitle/Subtitle";
import Title from "@/components/Common/Title/Title";

const TitleOpportunity = () => {
  return (
    <div className="w-[553px]">
      <Subtitle className="text-black bg-subtitle_background mb-3">
        Why Choose
      </Subtitle>
      <Title className="text-primary_2 w-[80%] mb-4">
        We create opportunity to reach potential
      </Title>
      <p className="text-paragraph_font font-medium text-base max-w-[494px]">
        Leverage agile frameworks to provide a robust synopsis for strategy
        foster collaborative thinking to further the overall value proposition.
      </p>
      <ul className="flex flex-wrap items-center justify-start gap-x-[62px] gap-y-5 mt-[61px]">
        <li className="flex items-center justify-start gap-3 w-[223px]">
          <div className="w-[63px] h-[63px] rounded-full bg-accent-gradient flex items-center justify-center">
            <BsBoxSeam className="min-w-[32px] min-h-[32px] max-w-[32px] max-h-[32px] fill-primary_2" />
          </div>
          <p
            className={`${rubik.className} text-xl font-normal text-primary_2`}
          >
            Safe Package
          </p>
        </li>
        <li className="flex items-center justify-center gap-3">
          <div className="w-[63px] h-[63px] rounded-full bg-accent-gradient flex items-center justify-center">
            <LuShip className="min-w-[32px] min-h-[32px] max-w-[32px] max-h-[32px] stroke-primary_2" />
          </div>
          <p
            className={`${rubik.className} text-xl font-normal text-primary_2`}
          >
            Ship Everywhere
          </p>
        </li>
        <li className="flex items-center justify-start gap-3 w-[223px]">
          <div className="w-[63px] h-[63px] rounded-full bg-accent-gradient flex items-center justify-center">
            <TbWorld className="min-w-[32px] min-h-[32px] max-w-[32px] max-h-[32px] stroke-primary_2" />
          </div>
          <p
            className={`${rubik.className} text-xl font-normal text-primary_2`}
          >
            Global Tracking
          </p>
        </li>
        <li className="flex items-center justify-center gap-3">
          <div className="w-[63px] h-[63px] rounded-full bg-accent-gradient flex items-center justify-center">
            <BiSupport className="min-w-[32px] min-h-[32px] max-w-[32px] max-h-[32px] fill-primary_2" />
          </div>
          <p
            className={`${rubik.className} text-xl font-normal text-primary_2`}
          >
            24/7 Support
          </p>
        </li>
        <li className="flex items-center justify-start gap-3 w-[223px]">
          <div className="w-[63px] h-[63px] rounded-full bg-accent-gradient flex items-center justify-center">
            <FaRegClock className="min-w-[32px] min-h-[32px] max-w-[32px] max-h-[32px] fill-primary_2" />
          </div>
          <p
            className={`${rubik.className} text-xl font-normal text-primary_2`}
          >
            In Time Delivery
          </p>
        </li>
        <li className="flex items-center justify-center gap-3">
          <div className="w-[63px] h-[63px] rounded-full bg-accent-gradient flex items-center justify-center">
            <MdOutlineMonetizationOn className="min-w-[32px] min-h-[32px] max-w-[32px] max-h-[32px] fill-primary_2" />
          </div>
          <p
            className={`${rubik.className} text-xl font-normal text-primary_2`}
          >
            Transparant Pricing
          </p>
        </li>
      </ul>
    </div>
  );
};

export default TitleOpportunity;
