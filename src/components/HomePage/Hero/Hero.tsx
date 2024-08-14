import Subtitle from "@/components/Common/Subtitle/Subtitle";
import MainTitle from "@/components/Common/MainTitle/MainTitle";
import Button from "@/components/Common/Button/Button";

const Hero = () => {
  return (
    <section className="bg-hero-pattern bg-no-repeat bg-contain min-h-[875px] mt-[-78px]">
      <div className="max-w-[1200px] mx-auto pt-[173px] flex flex-col items-start gap-2">
        <Subtitle>Logistics & Supply Chain Solutions</Subtitle>
        <MainTitle>Your Gateway to any Destination in the World</MainTitle>
        <p className="text-white max-w-[571px] text-base font-medium">
          In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in
          arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus
          finibus, enim diam interdum nulla, sed laoreet risus lectus.
        </p>
        <Button url="/about">Expore more</Button>
      </div>
    </section>
  );
};

export default Hero;
