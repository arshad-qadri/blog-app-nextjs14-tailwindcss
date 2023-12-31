import Image from "next/image";
import Link from "next/link";
import React from "react";
import moment from "moment";

const BlogTwo = ({blog}) => {
  return (
    <div className="group grid grid-cols-12 gap-4 items-center text-dark dark:text-light">
      <Link
        href={"/#"}
        className=" col-span-12  lg:col-span-4 h-full rounded-xl overflow-hidden"
      >
        <Image
          src={blog.image}
          //   placeholder="blur"
          //   blurDataURL={blog.image.blurhashDataUrl}
          alt={"blog two"}
          width={384}
          height={75}
          className="aspect-square w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300"
          sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
        />
      </Link>

      <div className="col-span-12  lg:col-span-8 w-full">
        <span className="inline-block w-full uppercase text-accent dark:text-accentDark font-semibold text-xs sm:text-sm">
          {/* {blog.tags[0]} */}
        </span>
        <Link href={`/blog/${blog.slug}`} className="inline-block my-1">
          <h2 className="font-semibold capitalize text-base sm:text-lg">
            <span
              className="pb-1 bg-gradient-to-r from-black  to-black  bg-[length:0px_6px]
                group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
            >
              {blog.title}
            </span>
          </h2>
        </Link>

        <span className="inline-block w-full capitalize text-custome-gray dark:text-light/50 font-semibold  text-xs sm:text-base">
          {moment(blog.date).format("LL")}
        </span>
      </div>
    </div>
  );
};

export default BlogTwo;
