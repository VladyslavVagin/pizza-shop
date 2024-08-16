import Subtitle from "@/components/Common/Subtitle/Subtitle";
import Title from "@/components/Common/Title/Title";
import InfoList from "@/components/Header/InfoList/InfoList";

const TitleGetInTouch = () => {
  return (
    <div className="w-[353px]">
      <Subtitle className="text-white bg-subtitle_back w-[75px] mb-3">
        Contact
      </Subtitle>
      <Title className="text-white w-full mb-1">Get in touch with us</Title>
      <p className="text-white text-base font-medium mb-8">
        Leverage agile frameworks to provide a robust synopsis for strategy
        foster collaborative thinking to further the overall value.
      </p>
      <InfoList />
    </div>
  );
};

export default TitleGetInTouch;
