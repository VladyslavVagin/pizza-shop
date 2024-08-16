import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { rubik } from "@/app/layout";

type Props = {
  person: {
    id: number;
    name: string;
    position: string;
    img: string;
    social: string;
  };
  index: number;
};

const MemberCard: FC<Props> = ({ person, index }) => {
  const { name, position, img, social } = person;

  return (
    <li className="w-[364px] h-[538px] mt-[40px] relative overflow-hidden">
      <Image src={img} alt={name} width={364} height={426} />
      <div className="w-full h-[112px] bg-heading_font text-white py-5 px-8 flex flex-col items-start justify-end">
        <h3 className={`${rubik.className} text-xl font-medium mb-[2px]`}>
          {name}
        </h3>
        <p className="text-base font-medium">{position}</p>
      </div>
      <div className="absolute bottom-20 right-0 bg-accent-gradient h-[62px] py-5 px-4 flex items-center justify-center gap-x-4">
        {index === 1 && <Link
          href={social}
          target="_blank"
          aria-label={`Go to LInkedIn profile of ${name}`}
          className="transition-transform duration-500 hover:scale-125"
        >
          <FaLinkedin className="w-5 h-5 fill-heading_font"/>
        </Link>}
        {index !== 2 && <Link
          href={social}
          target="_blank"
          aria-label={`Go to X profile of ${name}`}
          className="transition-transform duration-500 hover:scale-125"
        >
          <FaXTwitter className="w-5 h-5 fill-heading_font"/>
        </Link>}
        <Link
          href={social}
          target="_blank"
          aria-label={`Go to Facebook profile of ${name}`}
          className="transition-transform duration-500 hover:scale-125"
        >
          <FaFacebook className="w-5 h-5 fill-heading_font"/>
        </Link>
        <Link
          href={social}
          target="_blank"
          aria-label={`Go to Instagram profile of ${name}`}
          className="transition-transform duration-500 hover:scale-125"
        >
          <FaInstagram className="w-5 h-5 fill-heading_font"/>
        </Link>
      </div>
    </li>
  );
};

export default MemberCard;
