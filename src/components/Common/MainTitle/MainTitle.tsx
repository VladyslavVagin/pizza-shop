import { FC, ReactNode } from "react";
import { rubik } from "@/app/layout";

type Props = {
  children: ReactNode;
};

const MainTitle: FC<Props> = ({ children }) => {
  return <h1 className={`${rubik.className} text-white text-titleMain font-bold max-w-[571px]`}>{children}</h1>;
};

export default MainTitle;
