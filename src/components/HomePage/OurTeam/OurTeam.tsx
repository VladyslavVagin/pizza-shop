import Subtitle from "@/components/Common/Subtitle/Subtitle";
import Title from "@/components/Common/Title/Title";
import TeamList from "./TeamList/TeamList";

const OurTeam = () => {
  return (
    <section className="w-full py-[102px]">
      <div className="max-w-[1200px] mx-auto">
        <Subtitle className="mx-auto w-32 mb-4 bg-subtitle_background text-black">The Transporters</Subtitle>
        <Title className="w-full text-center">Meet Expert Team</Title>
        <TeamList />
      </div>
    </section>
  );
};

export default OurTeam;
