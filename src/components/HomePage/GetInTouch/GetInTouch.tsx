import TitleGetInTouch from "./TitleGetInTouch/TitleGetInTouch";
import FormContact from "./FormContact/FormContact";

const GetInTouch = () => {
  return (
    <section className="bg-primary_2 py-[143px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-start justify-center gap-[88px]">
          <TitleGetInTouch />
          <FormContact />
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
