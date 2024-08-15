import { FC } from "react";
import Image from "next/image";

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
    </div>
  );
};

export default CardService;
