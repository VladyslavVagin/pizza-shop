import ImagePlane from "./ImagePlane/ImagePlane";
import TitleOpportunity from "./TitleOpportunity/TitleOpportunity";

const Opportunity = () => {
  return (
    <section className="relative w-full py-36">
      <div className="absolute top-0 left-0 w-1/2 h-full bg-primary_2 py-36"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary py-36"></div>
      <div className="max-w-[1535px] mx-auto relative z-20 flex items-center justify-center gap-[53px]">
        <ImagePlane />
        <TitleOpportunity />
      </div>
    </section>
  );
};

export default Opportunity;
