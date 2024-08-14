import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Link href="/" aria-label="Go to Main page">
        <Image
          src="/images/Logo.webp"
          alt="Logo of Transit Flow company"
          width={210}
          height={36}
        />
      </Link>
    </div>
  );
};

export default Logo;
