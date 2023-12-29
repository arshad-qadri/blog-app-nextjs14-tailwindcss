import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CoverSection = () => {
  return (
    <div className='w-full inline-block dark:text-black text-white'>
    <article className='flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]'>
        <div className='absolute top-0 left-0 bottom-0 right-0 h-full
        bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0
        ' />
    <Image src={"/blogs/charlesdeluvio-cZr2sgaxy3Q-unsplash.jpg"}
    placeholder='blur'
    blurDataURL={"https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
    alt={"Building Progressive Web Apps: Bridging The Gap Between Web And Mobile"}
    fill
    className='w-full h-full object-center object-cover rounded-3xl -z-10'
    sizes='100vw'
    priority
    />

    <div className='w-full lg:w-3/4 p-6 sm:p-8 md:p-12  lg:p-16 flex flex-col items-start justify-center z-0 text-light'>
        {/* <Tag link={`/categories/${slug(blog.tags[0])}`} name={blog.tags[0]} /> */}
        <Link href={"/#"} className='mt-6'>
        <h1 className='font-bold capitalize text-lg sm:text-xl md:text-3xl lg:text-4xl'>
            <span className='bg-gradient-to-r from-white to-white dark:from-accentDark/50 
            dark:to-accentDark/50 bg-[length:0px_6px]
            hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 '>
            Building Progressive Web Apps: Bridging The Gap Between Web And Mobile
            </span>
        </h1>
        </Link>
        <p className='hidden  sm:inline-block mt-4 md:text-lg lg:text-xl font-in'>
        Integrating mindfulness practices helps developers cultivate present-moment awareness, fostering focus, problem-solving, and work-life balance.
        </p>
    </div>
</article>
</div>
  )
}

export default CoverSection
