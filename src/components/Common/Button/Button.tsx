import { FC, ReactNode } from "react";
import Link from "next/link";

type Props = {
  children: ReactNode;
  url: string;
};

const Button: FC<Props> = ({ children, url }) => {
  return (
    <Link
      href={url}
      className="group bg-accent-gradient h-[60px] text-base font-semibold text-black py-[19px] px-[48px] mt-6 relative overflow-hidden transition-all duration-1000"
    >
      <p className="relative z-[2]">{children}</p>
      <span className="group-hover:scale-900 absolute bottom-[-70px] right-[-26px] w-[68px] h-[105px] bg-white rounded-full z-[1] transition-transform duration-1000"></span>
    </Link>
  );
};

export default Button;
