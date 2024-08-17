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
    <form className="w-[758px] flex flex-col items-start justify-center" ref={formRef} onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center justify-between">
        <label>
          <input
            type="text"
            {...register("name")}
            placeholder="Your Name*"
            className="w-[365px] h-[60px] bg-transparent outline-none border border-input_border py-[21px] pl-[29px] text-white text-xl placeholder:text-white"
          />
          {errors.name && <p>{errors.name.message}</p>}
        </label>
        <label>
          <input type="email" {...register("email")} placeholder="Email*" className="w-[365px] h-[60px] bg-transparent outline-none border border-input_border py-[21px] pl-[29px] text-white text-xl placeholder:text-white"/>
          {errors.email && <p>{errors.email.message}</p>}
        </label>
      </div>
      <div className="flex items-center justify-between">
        <label>
          <input
            type="number"
            {...register("phone")}
            placeholder="Phone Number*"
            className="w-[365px] h-[60px] bg-transparent outline-none border border-input_border py-[21px] pl-[29px] text-white text-xl placeholder:text-white"
          />
          {errors.phone && <p>{errors.phone.message}</p>}
        </label>
        <label>
          <input type="text" {...register("city")} placeholder="City*" className="w-[365px] h-[60px] bg-transparent outline-none border border-input_border py-[21px] pl-[29px] text-white text-xl placeholder:text-white"/>
          {errors.city && <p>{errors.city.message}</p>}
        </label>
      </div>
      <label>
        <textarea
          {...register("message")}
          placeholder="Your Message"
          className="w-full h-[60px] bg-transparent outline-none border border-input_border py-[21px] pl-[29px] text-white text-xl placeholder:text-white"
        ></textarea>
        {errors.message && <p>{errors.message.message}</p>}
      </label>
      <button type="submit">Submit Message</button>
    </form>
  );
};

export default FormContact;
