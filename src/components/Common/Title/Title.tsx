import { FC } from "react";
import { rubik } from "@/app/layout";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Title: FC<Props> = ({ children, className }) => {
  return <h1 className={`${className} ${rubik.className} text-4xl text-primary_2 font-semibold w-[294px]`}>{children}</h1>;
};

export default Title;
