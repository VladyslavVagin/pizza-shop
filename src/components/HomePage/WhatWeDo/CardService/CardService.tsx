import { FC } from "react";
import { rubik } from "@/app/layout";
import Icon from "@/components/Common/Icon/Icon";

type Props = {
  service: {
    id: number;
    name: string;
    title: string;
    description: string;
  };
};

const CardService: FC<Props> = ({ service }) => {
  const { name, title, description } = service;

  return (
    <li className="flex items-start justify-center gap-9 w-[398px]">
      <Icon name={name} className="min-w-[50px] min-h-[54px] max-w-[50px] max-h-[54px] stroke-black fill-white" />
      <div className="flex flex-col items-start gap-[13px] pl-6 border-l border-l-[#d8d8d8]">
        <h3 className={`${rubik.className} text-2xl font-normal`}>{title}</h3>
        <p className="text-base font-medium text-paragraph_font">{description}</p>
      </div>
    </li>
  );
};

export default CardService;
