import Subtitle from "@/components/Common/Subtitle/Subtitle";
import Title from "@/components/Common/Title/Title";

const BlogTitle = () => {
  return (
    <div className="mb-10">
      <Subtitle className="mx-auto mb-4 bg-subtitle_background text-black w-20">
        Our Blog
      </Subtitle>
      <Title className="w-full text-center">Our Latest News</Title>
    </div>
  );
};

export default BlogTitle;
