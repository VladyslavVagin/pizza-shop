import TitleGetInTouch from "./TitleGetInTouch/TitleGetInTouch";
import FormContact from "./FormContact/FormContact";
import Fotos from "./Fotos/Fotos";

const GetInTouch = () => {
  return (
    <section className="bg-primary_2 py-[143px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-start justify-center gap-[88px] mb-12">
          <TitleGetInTouch />
          <FormContact />
        </div>
        <Fotos />
      </div>
    </section>
  );
};

export default GetInTouch;
