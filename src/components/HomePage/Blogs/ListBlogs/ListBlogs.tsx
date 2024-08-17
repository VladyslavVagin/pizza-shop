"use client";

import { blogs } from "@/data/blogs";
import CardBlog from "../CardBlog/CardBlog";

const ListBlogs = () => {
  return (
    <ul className="w-[943px] border-b border-b-[#D6D6D6] flex flex-col items-center gap-]">
        {blogs.map(blog => (<CardBlog key={blog.id} blog={blog} />))}
    </ul>
  )
}

export default ListBlogs