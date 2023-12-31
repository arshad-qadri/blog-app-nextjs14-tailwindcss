import React from "react";
import BlogThree from "./BlogThree";

const AllBlogs = ({ blogs }) => {
  return (
    <section className="w-full  mt-1  px-5 sm:px-10 md:px-24  sxl:px-32 flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-16">
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

export default AllBlogs;
