import Image from "next/image";

const Fotos = () => {
  return (
    <ul className="flex items-center justify-center w-full">
      <li>
        <Image
          src="/images/homepage/getInTouch/view1.webp"
          alt="View first"
          width={301}
          height={234}
        />
      </li>
      <li>
        <Image
          src="/images/homepage/getInTouch/view2.webp"
          alt="View second"
          width={301}
          height={234}
        />
      </li>
      <li>
        <Image
          src="/images/homepage/getInTouch/view3.webp"
          alt="View third"
          width={301}
          height={234}
        />
      </li>
      <li>
        <Image
          src="/images/homepage/getInTouch/view4.webp"
          alt="View fourth"
          width={301}
          height={234}
        />
      </li>
    </ul>
  );
};

export default Fotos;
