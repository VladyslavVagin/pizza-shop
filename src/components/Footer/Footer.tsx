import Logo from "../Header/Logo/Logo";
import InfoList from "../Header/InfoList/InfoList";
import MenuFooter from "./MenuFooter/MenuFooter";
import UtilityList from "./UtilityList/UtilityList";
import Subscribe from "./Subscribe/Subscribe";
import { rubik } from "@/app/layout";

const Footer = () => {
  return (
    <footer className="bg-primary_2 min-h-[200px]">
      <div className="bg-footer_bg w-full h-[118px]">
        <div className="max-w-[1200px] mx-auto flex items-center justify-center">
          <div className="w-[430px] h-full bg-primary_2 p-11">
            <Logo />
          </div>
          <ul className="flex items-center justify-start gap-[152px] text-white w-full h-full p-11">
            <li>
              <p className={`${rubik.className} text-2xl font-medium`}>Pages</p>
            </li>
            <li>
              <p className={`${rubik.className} text-2xl font-medium`}>
                Utility
              </p>
            </li>
            <li>
              <p className={`${rubik.className} text-2xl font-medium`}>
                Subscribe
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto py-10">
        <div className="max-w-[1200px] flex items-start pl-8 gap-8">
          <div className="max-w-[310px]">
            <InfoList />
          </div>
          <MenuFooter />
          <UtilityList />
          <Subscribe />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
