import { FC, ReactNode } from "react";
import { rubik } from "@/app/layout";

type Props = {
    children: ReactNode;
};

const Subtitle: FC<Props> = ({children}) => {
  return (
    <div className="text-white bg-subtitle_back w-[244px] h-[23px] flex items-center gap-[9px]">
        <span className="w-1 min-h-[23px] bg-accent-gradient"></span>
        <p className={`${rubik.className} text-sm font-normal`}>{children}</p>
    </div>
  )
}

export default Subtitle