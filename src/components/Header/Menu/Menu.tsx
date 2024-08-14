"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Menu = () => {
 const pathname = usePathname();

  return (
    <ul className="divide-x divide-white divide flex items-center gap-[30px]">
      <li className="text-white mb-6 text-base font-semibold transition-colors duration-500 hover:text-primary_1 relative">
        <Link href="/" aria-label="Go to Home page">
          Home
        </Link>
        <span className={`h-[2px] w-full bg-white absolute bottom-[-24px] left-0 ${pathname === "/" ? "visible" : "hidden"}`}></span>
      </li>
      <li className="text-white mb-6 text-base font-semibold pl-[30px] transition-colors duration-500 hover:text-primary_1 relative">
        <Link href="/about" aria-label="Go to About page">
          About
        </Link>
        <span className={`h-[2px] w-[80%] bg-white absolute bottom-[-24px] left-6 ${pathname === "/about" ? "visible" : "hidden"}`}></span>
      </li>
      <li className="text-white mb-6 text-base font-semibold pl-[30px] transition-colors duration-500 hover:text-primary_1 relative">
        <Link href="/pages" aria-label="Open submenu of pages">
          Pages
        </Link>
        <span className={`h-[2px] w-[80%] bg-white absolute bottom-[-24px] left-6 ${pathname === "/pages" ? "visible" : "hidden"}`}></span>
      </li>
      <li className="text-white mb-6 text-base font-semibold pl-[30px] transition-colors duration-500 hover:text-primary_1 relative">
        <Link href="/project" aria-label="Go to Project page">
          Project
        </Link>
        <span className={`h-[2px] w-[80%] bg-white absolute bottom-[-24px] left-6 ${pathname === "/project" ? "visible" : "hidden"}`}></span>
      </li>
      <li className="text-white mb-6 text-base font-semibold pl-[30px] transition-colors duration-500 hover:text-primary_1 relative">
        <Link href="/contact" aria-label="Go to Contact page">
          Contact
        </Link>
        <span className={`h-[2px] w-[80%] bg-white absolute bottom-[-24px] left-6 ${pathname === "/contact" ? "visible" : "hidden"}`}></span>
      </li>
    </ul>
  );
};

export default Menu;
