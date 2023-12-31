import AllBlogs from "@/components/Blog/AllBlogs";
import React from "react";

const getData = async () => {
  const res1 = fetch("https://res.cloudinary.com/dsdcsntrd/raw/upload/v1704028105/json/blog_sgbfyw.json");
  const res2 = (await res1).json();
  return res2;
};
const page = async () => {
  const data = await getData();
  return (
    <div className="p-10">
      <AllBlogs blogs={data?.blogPosts} />
    </div>
  );
};

export default page;
