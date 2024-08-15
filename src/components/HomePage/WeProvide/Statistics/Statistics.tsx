import { rubik } from "@/app/layout";

const Statistics = () => {
  return (
    <div className="w-full h-[143px] border-y border-y-[#d4d4d4] mt-[112px] flex items-center justify-center">
      <div className="flex items-center justify-center gap-4 h-full w-1/2 border-r border-r-[#d4d4d4]">
        <span
          className={`${rubik.className} text-5xl text-primary_2 font-semibold`}
        >
          1294
        </span>
        <span className="w-[17px] h-[17px] bg-accent-gradient"></span>
        <p className={`${rubik.className} text-xl font-normal text-primary_2`}>
          Delivered Packages
        </p>
      </div>
      <div className="flex items-center justify-center gap-4 h-full w-1/2">
        <span
          className={`${rubik.className} text-5xl text-primary_2 font-semibold`}
        >
          3594
        </span>
        <span className="w-[17px] h-[17px] bg-accent-gradient"></span>
        <p className={`${rubik.className} text-xl font-normal text-primary_2`}>
          Satisfied Clients
        </p>
      </div>
    </div>
  );
};

export default Statistics;
