import React from "react";
import BlogThree from "./BlogThree";

const RelatedPosts = ({blogs}) => {
  return (
    <section className="w-full mt-16 sm:mt-24  md:mt-32 px-5 sm:px-10 md:px-24  sxl:px-32 flex flex-col items-center justify-center mb-16">
      <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
        Related Posts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-16 mt-16">
        {blogs.map((blog, index) => {
          return (
            <article key={index} className="col-span-1 row-span-1 relative">
              <BlogThree blog={blog} />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default RelatedPosts;
