import { FC } from "react";
import Image from "next/image";

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
      <div className="w-full h-[112px] bg-primary_2 text-white py-5 px-8">
        <h3>{name}</h3>
        <p>{position}</p>
      </div>
    </li>
  );
};

export default MemberCard;
