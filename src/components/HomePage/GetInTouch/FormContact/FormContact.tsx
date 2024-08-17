"use client";

import { useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "@/schema/schema";

type dataProps = {
  name: string;
  email: string;
  phone: string;
  city: string;
  message: string;
};

const FormContact = () => {
  const formRef = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema), mode: "onBlur" });

  const onSubmit = (data: dataProps) => {
    console.log(data);
    reset();
  };

  return (
    <form className="w-[758px] mt-8 flex flex-col items-start justify-center gap-[19px]" ref={formRef} onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center justify-between w-full">
        <label className="h-[72px]">
          <input
            type="text"
            {...register("name")}
            placeholder="Your Name*"
            className="w-[365px] h-[60px] bg-transparent outline-none border border-input_border py-[21px] pl-[29px] text-white text-xl placeholder:text-white"
          />
          {errors.name && <p className="text-xs text-red-700">{errors.name.message}</p>}
        </label>
        <label className="h-[72px]">
          <input type="email" {...register("email")} placeholder="Email*" className="w-[365px] h-[60px] bg-transparent outline-none border border-input_border py-[21px] pl-[29px] text-white text-xl placeholder:text-white"/>
          {errors.email && <p className="text-xs text-red-700">{errors.email.message}</p>}
        </label>
      </div>
      <div className="flex items-center justify-between w-full">
        <label className="h-[72px]">
          <input
            type="number"
            {...register("phone")}
            placeholder="Phone Number*"
            className="w-[365px] h-[60px] bg-transparent outline-none border border-input_border py-[21px] pl-[29px] text-white text-xl placeholder:text-white"
          />
          {errors.phone && <p className="text-xs text-red-700">{errors.phone.message}</p>}
        </label>
        <label className="h-[72px]">
          <input type="text" {...register("city")} placeholder="City*" className="w-[365px] h-[60px] bg-transparent outline-none border border-input_border py-[21px] pl-[29px] text-white text-xl placeholder:text-white"/>
          {errors.city && <p className="text-xs text-red-700">{errors.city.message}</p>}
        </label>
      </div>
      <label className="w-full h-[166px]">
        <textarea
          {...register("message")}
          placeholder="Your Message"
          className="w-full h-[154px] resize-none bg-transparent outline-none border border-input_border py-[21px] pl-[29px] text-white text-xl placeholder:text-white"
        ></textarea>   
      </label>
      <button type="submit"  className="group bg-accent-gradient h-[60px] text-base font-semibold text-black py-[19px] px-[48px] relative overflow-hidden transition-all duration-1000">
        <p className="relative z-[2]">Submit Message</p>
        <span className="group-hover:scale-900 absolute bottom-[-70px] right-[-26px] w-[68px] h-[105px] bg-white rounded-full z-[1] transition-transform duration-1000"></span>
        </button>
    </form>
  );
};

export default FormContact;
