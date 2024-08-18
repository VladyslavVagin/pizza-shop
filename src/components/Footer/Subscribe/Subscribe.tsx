import SocialMedia from "@/components/Header/SocialMedia/SocialMedia";

const Subscribe = () => {
  return (
    <form className="flex flex-col items-start gap-5 pl-24">
      <input
        type="email"
        name="email"
        placeholder="Email here*"
        required
        className="w-[317px] h-[60px] bg-transparent outline-none border border-input_border py-[21px] pl-[29px] text-white text-xl placeholder:text-white placeholder:text-sm"
      />
      <div className="flex items-center justify-start gap-4">
        <button
          type="submit"
          className="group bg-accent-gradient h-[60px] text-base font-semibold text-black py-[19px] px-[48px] relative overflow-hidden transition-all duration-1000"
        >
          <p className="relative z-[2]">Subscribe</p>
          <span className="group-hover:scale-900 absolute bottom-[-70px] right-[-26px] w-[68px] h-[105px] bg-white rounded-full z-[1] transition-transform duration-1000"></span>
        </button>
        <SocialMedia />
      </div>
    </form>
  );
};

export default Subscribe;
