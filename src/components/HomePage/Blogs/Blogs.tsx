import BlogTitle from "./BlogTitle/BlogTitle";
import ListBlogs from "./ListBlogs/ListBlogs";
import BtnBlue from "@/components/Common/BtnBlue/BtnBlue";

const Blogs = () => {
  return (
    <section className="py-24 w-full">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        <BlogTitle />
        <ListBlogs />
        <BtnBlue url="/blog">More Blog</BtnBlue>
      </div>
    </section>
  );
};

export default Blogs;
