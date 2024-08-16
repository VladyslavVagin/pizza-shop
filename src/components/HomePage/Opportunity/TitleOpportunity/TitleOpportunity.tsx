import { BsBoxSeam } from "react-icons/bs";
import { LuShip } from "react-icons/lu";
import { TbWorld } from "react-icons/tb";
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
      <ul>
        <li>
          <BsBoxSeam />
          <p>Safe Package</p>
        </li>
        <li>
          <LuShip />
          <p>Ship Everywhere</p>
        </li>
        <li>
          <TbWorld />
          <p>Global Tracking</p>
        </li>
        <li>
          <p>24/7 Support</p>
        </li>
        <li>
          <p>In Time Delivery</p>
        </li>
        <li>
          <p>Transparant Pricing</p>
        </li>
      </ul>
    </div>
  );
};

export default TitleOpportunity;
