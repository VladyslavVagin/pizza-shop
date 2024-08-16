import { personalData } from "@/data/personalData";
import MemberCard from "../MemberCard/MemberCard";

const TeamList = () => {
  return (
    <ul className="flex items-center justify-center gap-x-[54px]">
      {personalData.map((person, index) => (
        <MemberCard key={index} person={person} index={index} />
      ))}
    </ul>
  );
};

export default TeamList;
