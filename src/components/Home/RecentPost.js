import Link from 'next/link';
import React from 'react'
import BlogThree from '../Blog/BlogThree';

const RecentPost = () => {
    const sortedBlogs =[
        {
          "title": "The Art of Effective Time Management",
          "heading": "Mastering the Clock: Strategies for Productive Time Use",
          "description": "Explore proven techniques and tools to boost your productivity by managing your time more effectively. Learn how to prioritize tasks, set realistic goals, and eliminate common time-wasting habits.",
          "date": "January 15, 2023"
        },
        {
          "title": "Discovering Hidden Gems: A Traveler's Guide to Offbeat Destinations",
          "heading": "Off the Beaten Path: Uncovering Unique Travel Experiences",
          "description": "Embark on a journey to lesser-known destinations that offer extraordinary experiences. From secluded beaches to charming villages, this guide will inspire you to step away from tourist hotspots and embrace the undiscovered beauty of the world.",
          "date": "February 02, 2023"
        },
        {
          "title": "The Science Behind Mindfulness Meditation",
          "heading": "Cultivating Calm: Understanding the Science of Mindfulness",
          "description": "Dive into the scientific foundations of mindfulness meditation and its profound impact on mental well-being. Explore studies and practices that highlight the benefits of mindfulness in reducing stress, improving focus, and enhancing overall mental resilience.",
          "date": "March 10, 2023"
        },
        {
          "title": "Crafting a Healthy Lifestyle: A Guide to Mindful Eating",
          "heading": "Nourish Your Body, Nourish Your Mind: The Art of Mindful Eating",
          "description": "Learn how practicing mindful eating can transform your relationship with food. Discover simple yet powerful techniques to savor your meals, make healthier choices, and develop a sustainable approach to nutrition that promotes overall well-being.",
          "date": "April 22, 2023"
        },
        {
          "title": "The Future of Artificial Intelligence: Trends and Implications",
          "heading": "Navigating the AI Landscape: Trends Shaping the Future",
          "description": "Explore the latest trends in artificial intelligence and their potential impact on various industries. From machine learning advancements to ethical considerations, this blog delves into the evolving landscape of AI and what it means for the future.",
          "date": "May 08, 2023"
        },
        {
          "title": "Building Resilience in Times of Uncertainty",
          "heading": "Rising Strong: Strategies for Building Resilience",
          "description": "Discover practical tips and insights on how to cultivate resilience in the face of life's challenges. Explore the mindset and habits that can help you bounce back from adversity, navigate uncertainty, and emerge stronger in both personal and professional aspects of life.",
          "date": "June 17, 2023"
        }
      ]
      
      
      
  return (
    <section className="w-full  mt-16 sm:mt-24  md:mt-32 px-5 sm:px-10 md:px-24  sxl:px-32 flex flex-col items-center justify-center">
      <div className="w-full flex  justify-between">
        <h2 className="w-fit inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
          Recent Posts
        </h2>
        <Link
          href="/categories/all"
          className="inline-block font-medium text-blue underline underline-offset-2      text-base md:text-lg"
        >
          view all
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-16">
        {sortedBlogs.map((blog, index) => {
          return (
            <article key={index} className="col-span-1 row-span-1 relative">
              <BlogThree blog={blog} />
            </article>
          );
        })}
      </div>
    </section>
  )
}

export default RecentPost
