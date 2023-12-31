import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogThree = ({blog}) => {
  return (
    <div className="group flex flex-col items-center text-dark">
    <Link href={`/blog/${blog.slug}`} className="h-full rounded-xl overflow-hidden">
      <Image
        src={blog.image}
        // placeholder="blur"
        // blurDataURL={blog.image.blurhashDataUrl}
        alt={blog.title}
        width={100}
        height={100}
        className=" aspect-[4/3] w-full h-full object-cover object-center  group-hover:scale-105 transition-all ease duration-300 "
        sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
      />
    </Link>

    <div className="flex flex-col w-full mt-4">
      {/* <span className="uppercase text-accent dark:text-accentDark font-semibold text-xs sm:text-sm">
        {blog.tags[0]}
      </span> */}
      <Link href={`/blog/${blog.slug}`} className="inline-block my-1">
        <h2 className="font-semibold capitalize  text-base sm:text-lg">
          <span
            className="pb-1 bg-gradient-to-r from-black to-black  
            bg-[length:0px_6px]
            group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
          >
            {blog.title}
          </span>
        </h2>
      </Link>

      <span className="capitalize text-custome-gray dark:text-light/50 font-semibold text-sm  sm:text-base">
        {moment(blog.date).format("LL")}
      </span>
    </div>
  </div>
  )
}

export default BlogThree
