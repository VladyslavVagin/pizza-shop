import Link from "next/link";

const Menu = () => {
  return (
    <ul className="divide-x divide-white divide flex items-center gap-[30px] max-h-[22px] overflow-hidden">
      <li className="text-white text-base font-semibold">
        <Link href="/" aria-label="Go to Home page">
          Home
        </Link>
      </li>
      <li className="text-white text-base font-semibold pl-[30px]">
        <Link href="/about" aria-label="Go to About page">
          About
        </Link>
      </li>
      <li className="text-white text-base font-semibold pl-[30px]">
        <Link href="/pages" aria-label="Open submenu of pages">
          Pages
        </Link>
      </li>
      <li className="text-white text-base font-semibold pl-[30px]">
        <Link href="/project" aria-label="Go to Project page">
          Project
        </Link>
      </li>
      <li className="text-white text-base font-semibold pl-[30px]">
        <Link href="/contact" aria-label="Go to Contact page">
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
