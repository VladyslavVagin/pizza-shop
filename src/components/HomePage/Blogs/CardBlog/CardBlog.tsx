import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { rubik } from "@/app/layout";
import Icon from "@/components/Common/Icon/Icon";

type Props = {
    blog: {
        id: number;
        title: string;
        img: string;
        date: string;
        description: string;
        point_1: string;
        point_2: string;
        point_3: string;
        point_4: string;
    }
};

const CardBlog: FC<Props> = ({blog}) => {
  const { title, img, date, description, point_1, point_2, point_3, point_4 } = blog;

  return (
    <li className="w-full h-[378px] max-h-[378px] pt-[35px] border-t border-t-[#D6D6D6]">
        <Link href={`/blog/${title}`} aria-label="Go to Blog Details page" className="w-full h-full flex items-start justify-start gap-5 group">
          <Image src={img} alt={title} width={453} height={308} />
          <div className="flex flex-col items-center gap-1">
            <Icon name="icon-calendar" className="w-[51.33px] h-[56px]" />
            <span className={`${rubik.className} text-4xl font-semibold text-heading_font text-center transition-colors duration-500 group-hover:text-primary_1`}>{date.split(" ")[0]}</span>
            <p className="text-base font-medium text-center text-paragraph_font mt-[-10px] transition-colors duration-500 group-hover:text-primary_1">{date.split(" ")[1]}</p>
          </div>
          <div className="pl-[29px] border-l border-l-[#D6D6D6] flex flex-col items-start gap-4 justify-center">
            <h3 className={`${rubik.className} text-2xl font-normal text-heading_font transition-colors duration-500 group-hover:text-primary_1`}>{title}</h3>
            <p className="text-base font-medium text-paragraph_font transition-colors duration-500 group-hover:text-primary_1">{description}</p>
            <ul className="list-disc">
                <li><p className="text-base font-medium text-heading_font transition-colors duration-500 group-hover:text-primary_1">{point_1}</p></li>
                <li><p className="text-base font-medium text-heading_font transition-colors duration-500 group-hover:text-primary_1">{point_2}</p></li>
                <li><p className="text-base font-medium text-heading_font transition-colors duration-500 group-hover:text-primary_1">{point_3}</p></li>
                <li><p className="text-base font-medium text-heading_font transition-colors duration-500 group-hover:text-primary_1">{point_4}</p></li>
            </ul>
          </div>
        </Link>
    </li>
  )
}

export default CardBlog;