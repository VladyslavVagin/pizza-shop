import { FC } from "react";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import { rubik } from "@/app/layout";

type Props = {
  review: {
    id: number;
    name: string;
    company: string;
    text: string;
    img: string;
  };
  index: number;
};

const Review: FC<Props> = ({ review, index }) => {
  const { name, company, text, img } = review;

  return (
    <div
      className={`w-[600px] h-[425px] ${
        index % 2 === 0 ? "bg-primary_2" : "bg-secondary"
      } px-[72px] py-[62px]`}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-5">
          <Image src={img} alt={name} width={91} height={91} />
          <div>
            <h3
              className={`${rubik.className} text-xl font-medium ${
                index % 2 === 0 ? "text-white" : "text-primary_2"
              }`}
            >
              {name}
            </h3>
            <p
              className={`${
                index % 2 === 0 ? "text-white" : "text-primary_2"
              } text-base font-medium`}
            >
              {company}
            </p>
          </div>
        </div>
        <Image
          src="/images/homepage/reviews/koma.webp"
          alt="Symbol for decoration"
          width={72}
          height={72}
        />
      </div>

      <p
        className={`${
          index % 2 === 0 ? "text-white" : "text-primary_2"
        } italic font-medium text-base`}
      >
        {text}
      </p>
      <div className="flex items-center justify-start gap-[3px] mt-[32px]">
        <IoIosStar className="w-[34px] h-[34px] fill-primary_1" />
        <IoIosStar className="w-[34px] h-[34px] fill-primary_1" />
        <IoIosStar className="w-[34px] h-[34px] fill-primary_1" />
        <IoIosStar className="w-[34px] h-[34px] fill-primary_1" />
        <IoIosStar className="w-[34px] h-[34px] fill-primary_1" />
      </div>
    </div>
  );
};

export default Review;
