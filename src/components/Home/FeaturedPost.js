import React from "react";
import BlogOne from "../Blog/BlogOne";
import BlogTwo from "../Blog/BlogTwo";

const FeaturedPost = ({blogs}) => {
  return (
    <section className="w-full mt-16 sm:mt-24  md:mt-32 px-5 sm:px-10 md:px-24  sxl:px-32 flex flex-col items-center justify-center">
      <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
        Featured Posts
      </h2>

      {/* <div className="grid grid-cols-2 grid-rows-2 gap-6  mt-10 sm:mt-16">
        <article className="md:row-span-2 sm:row-span-1 sm:col-span-2   relative bg-red-500">
          <BlogOne />
        </article>
        <article className=" bg-green-400">
          <BlogTwo />
        </article>
        <article className="bg-blue">
          <BlogTwo />
        </article>
      </div> */}
      <div className="grid grid-cols-2 grid-rows-2 gap-6  mt-10 sm:mt-16">
        <article className=" col-span-2  sxl:col-span-1 row-span-2 relative">
          <BlogOne blog={blogs[0]} />
        </article>
        <article className=" col-span-2 sm:col-span-1 row-span-1 relative">
          <BlogTwo blog={blogs[1]} />
        </article>
        <article className="col-span-2 sm:col-span-1 row-span-1 relative">
          <BlogTwo blog={blogs[2]} />
        </article>
      </div>
    </section>
  );
};

export default FeaturedPost;
