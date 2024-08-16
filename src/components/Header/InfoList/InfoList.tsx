import Link from "next/link";
import { GoClock } from "react-icons/go";
import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";

const InfoList = () => {
  return (
    <ul className="flex flex-wrap items-center gap-[39px]">
      <li className="flex items-center gap-4">
        <div className="w-[63px] h-[63px] bg-iconBlue rounded-full border border-borderIcon flex items-center justify-center">
          <GoClock className="w-6 h-6 fill-yellow-500" />
        </div>
        <div className="text-white text-sm font-medium">
          <p>Mon - Sat 9:00-18:00</p>
          <p>Sunday closed</p>
        </div>
      </li>

      <li className="flex items-center gap-4">
        <div className="w-[63px] h-[63px] bg-iconBlue rounded-full border border-borderIcon flex items-center justify-center">
          <CiMail className="w-6 h-6 fill-yellow-500" />
        </div>
        <div className="text-white text-sm font-medium">
          <p>Email:</p>
          <Link
            href={"mailto:contact@logistics.com"}
            target="_blank"
            aria-label="Send us email"
          >
            contact@logistics.com
          </Link>
        </div>
      </li>

      <li className="flex items-center gap-4">
        <div className="w-[63px] h-[63px] bg-iconBlue rounded-full border border-borderIcon flex items-center justify-center">
          <BsTelephone className="w-6 h-6 fill-yellow-500" />
        </div>
        <div className="text-white text-sm font-medium">
          <p>Call Us:</p>
          <Link
            href={"tel:00112365489"}
            target="_blank"
            aria-label="Call us"
          >
            (00) 112 365 489
          </Link>
        </div>
      </li>
    </ul>
  );
};

export default InfoList;
