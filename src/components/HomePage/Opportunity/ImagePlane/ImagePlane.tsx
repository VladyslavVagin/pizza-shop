import Image from "next/image";
import Icon from "@/components/Common/Icon/Icon";
import { rubik } from "@/app/layout";

const ImagePlane = () => {
  return (
    <div className="relative">
      <Image
        src="/images/homepage/plane.webp"
        alt="Boing Dream Lifter"
        width={929}
        height={610}
      />
      <div className="absolute bottom-0 left-[264px] bg-accent-gradient w-[417px] h-[139px] py-[30px] px-[33px] flex items-center justify-center gap-[21px]">
        <Icon
          name="icon-plane-service"
          className="min-w-[65px] min-h-20 max-w-[65px] max-h-20 fill-[#FFE6A5] stroke-black"
        />
        <p className={`${rubik.className} text-2xl text-primary_2 font-normal`}>
          Moving your products across borders
        </p>
      </div>
    </div>
  );
};

export default ImagePlane;
