import BlogDetails from "@/components/Blog/BlogDetails";
import RelatedPosts from "@/components/Blog/RelatedPosts";
import axios from "axios";
import React from "react";

const getData = async (slug) => {
  let data = null;
  await axios
    .get("https://res.cloudinary.com/dsdcsntrd/raw/upload/v1704028105/json/blog_sgbfyw.json")
    .then((response) => {
      // data = response.data?.blogPosts.filter((item) => item.slug === slug)[0];
      data = response.data
    })
    .catch((error) => {
      console.log(error);
    });
  return data;
};
const page = async ({ params }) => {
 const data =  await getData(params.slug);
 const copyData = [...data.blogPosts]
 const blog = copyData?.filter((item) => item.slug === params.slug)[0]
const blogs = copyData.splice(0,3)
 
  return (
    <div>
      <BlogDetails blog={blog} />
      <RelatedPosts blogs={blogs}/>
    </div>
  );
};

export default page;
