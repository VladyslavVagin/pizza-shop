import { BsBoxSeam } from "react-icons/bs";
import { PiMoney } from "react-icons/pi";
import { rubik } from "@/app/layout";

const Benefits = () => {
  return (
    <ul className="flex flex-col items-start gap-[22px] mt-6">
      <li className="flex items-center justify-start gap-4">
        <div className="w-[58px] h-[58px] rounded-full bg-accent-gradient flex items-center justify-center">
          <BsBoxSeam className="w-6 h-6 fill-black" />
        </div>
        <p className={`${rubik.className} text-primary_2 text-2xl font-normal`}>
          Delivery on Time
        </p>
      </li>
      <li  className="flex items-center justify-start gap-4">
        <div className="w-[58px] h-[58px] rounded-full bg-accent-gradient flex items-center justify-center">
          <PiMoney className="w-6 h-6 fill-black" />
        </div>
        <p className={`${rubik.className} text-primary_2 text-2xl font-normal`}>
          Optimized Travel Cost
        </p>
      </li>
    </ul>
  );
};

export default Benefits;
