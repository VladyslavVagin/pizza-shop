import Hero from "@/components/HomePage/Hero/Hero";
import WhatWeDo from "@/components/HomePage/WhatWeDo/WhatWeDo";
import WeProvide from "@/components/HomePage/WeProvide/WeProvide";
import TransportingAcross from "@/components/HomePage/TransportingAcross/TransportingAcross";
import Testimonial from "@/components/HomePage/Testimonial/Testimonial";
import Opportunity from "@/components/HomePage/Opportunity/Opportunity";
import OurTeam from "@/components/HomePage/OurTeam/OurTeam";
import GetInTouch from "@/components/HomePage/GetInTouch/GetInTouch";
import Blogs from "@/components/HomePage/Blogs/Blogs";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <WeProvide />
      <TransportingAcross />
      <Testimonial />
      <Opportunity />
      <OurTeam />
      <GetInTouch />
      <Blogs />
    </>
  );
}
