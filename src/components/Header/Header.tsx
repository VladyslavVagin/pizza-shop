import Logo from "./Logo/Logo";
import InfoList from "./InfoList/InfoList";
import Menu from "./Menu/Menu";
import SocialMedia from "./SocialMedia/SocialMedia";
import RequestQuote from "./RequestQuote/RequestQuote";

const Header = () => {
  return (
    <header className="flex flex-col">
      <div className="bg-primary_2 py-[46px]">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <Logo />
          <InfoList />
        </div>
      </div>
      <div className="bg-header_menu h-[78px]">
        <div className="max-w-[1200px] h-full mx-auto flex items-center justify-between">
          <Menu />
          <div className="flex items-center gap-[50px] h-full">
            <SocialMedia />
            <RequestQuote />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
