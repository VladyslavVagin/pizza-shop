import Link from "next/link";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialMedia = () => {
  return (
    <ul className="flex items-center gap-6">
      <li className="text-white">
        <Link
          href="https://portfolio-vladdev.vercel.app"
          aria-label="Go to our profile of Instagram"
        >
          <FaInstagram className="w-5 h-5" />
        </Link>
      </li>
      <li className="text-white">
        <Link
          href="https://portfolio-vladdev.vercel.app"
          aria-label="Go to our profile of Facebook"
        >
          <FaFacebook className="w-5 h-5" />
        </Link>
      </li>
      <li className="text-white">
        <Link
          href="https://portfolio-vladdev.vercel.app"
          aria-label="Go to our profile of XTwitter"
        >
          <FaXTwitter className="w-5 h-5" />
        </Link>
      </li>
      <li className="text-white">
        <Link
          href="https://portfolio-vladdev.vercel.app"
          aria-label="Go to our profile of LinkedIn"
        >
          <FaLinkedin className="w-5 h-5" />
        </Link>
      </li>
    </ul>
  );
};

export default SocialMedia;
