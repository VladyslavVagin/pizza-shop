import { jobs } from "@/data/jobs";
import CardService from "../CardService/CardService";

const ListJobs = () => {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-20 max-w-[880px]">
      {jobs.map((service) => (
        <CardService key={service.id} service={service} />
      ))}
    </ul>
  );
};

export default ListJobs;
