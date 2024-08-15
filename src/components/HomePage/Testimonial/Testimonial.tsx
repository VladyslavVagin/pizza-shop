import Subtitle from "@/components/Common/Subtitle/Subtitle";
import Title from "@/components/Common/Title/Title";
import Review from "./Review/Review";

const Testimonial = () => {
  return (
    <section className="pt-[400px] pb-[102px]">
      <div className="max-w-[1200px] mx-auto">
        <Subtitle className="text-black mb-4 bg-subtitle_background">Testimonial</Subtitle>
        <Title className="w-[464px]">What Our Customers Say</Title>
      </div>
    </section>
  );
};

export default Testimonial;
