import { FC } from "react";
import Image from "next/image";
import { rubik } from "@/app/layout";

type Props = {
  serv: {
    id: number;
    img: string;
    title: string;
    subtitle: string;
  };
};

const CardService: FC<Props> = ({ serv }) => {
  const { img, title, subtitle } = serv;

  return (
    <div className="relative w-[320px] h-[408px]">
      <Image src={img} alt={title} layout="fill" objectFit="cover" />
      <div className="bg-card-gradient absolute top-0 left-0 w-full h-full py-[20px] px-[25px] flex flex-col items-start justify-end">
        <h3 className={`${rubik.className} text-white text-xl font-medium`}>{title}</h3>
        <p className="text-primary_1 text-base font-medium">{subtitle}</p>
      </div>
    </div>
  );
};

export default CardService;
