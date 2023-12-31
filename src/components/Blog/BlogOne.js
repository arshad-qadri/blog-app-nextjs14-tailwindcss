import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogOne = ({blog}) => {
  return (
    <div className="group inline-block overflow-hidden rounded-xl h-full">
      <div
        className="absolute top-0 left-0 bottom-0 right-0 h-full
            bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-xl z-10"
      />
      <Image
        src={blog.image}
        // placeholder="blur"
        // blurDataURL={blog.image.blurhashDataUrl}
        alt={"One Blog"}
        width={380}
        height={100}
        className="w-full h-[100%] object-center object-cover rounded-xl group-hover:scale-105 transition-all ease duration-300"
        sizes="(max-width: 1180px) 100vw, 50vw"
        priority
      />

      <div className="w-full absolute bottom-0 p-4 xs:p-6 sm:p-10 z-20">
        <Link href={`/blog/${blog.slug}`} className="mt-6">
          <h2 className="font-bold capitalize text-sm xs:text-base sm:text-xl md:text-2xl text-light mt-2 sm:mt-4">
            <span
              className="pb-1 bg-gradient-to-r from-white to-white bg-[length:0px_6px] 
                group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
            >
              {blog.title}
            </span>
          </h2>
        </Link>
      </div>
    </div>
  )
}

export default BlogOne
