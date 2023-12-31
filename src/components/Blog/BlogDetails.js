import moment from "moment";
import React from "react";

const BlogDetails = ({ blog }) => {
  return (
    <div>
      <div
        className={`h-[70vh]  w-full relative bg-center bg-cover bg-no-repeat`}
        style={{ backgroundImage: `url(${blog.image})` }}
      >
        <div className="absolute w-full h-full bg-dark/70 top-0 left-0" />
        {/* <Image className="w-full h-full object-center object-cover rounded-xl group-hover:scale-105 transition-all ease duration-300" src={blog.image} priority  layout="responsive" width={100} height={100} /> */}
        <h1 className="text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold ">
          {blog.title}
        </h1>
      </div>
      <div className="w-full mt-16 sm:mt-24  md:mt-32 px-5 sm:px-10 md:px-24  sxl:px-32  m-auto my-5 blog-para mb-28">
        <div dangerouslySetInnerHTML={{ __html: blog.description }}></div>

        <div className="text-right w-full mt-5 font-bold"><span className="text-red-600">EZ</span>writer</div>
        <div className="text-right w-full text-custome-gray">{moment(blog.date).format("LL")}</div>
      </div>
    </div>
  );
};

export default BlogDetails;
