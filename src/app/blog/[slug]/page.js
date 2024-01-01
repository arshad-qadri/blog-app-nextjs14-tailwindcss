import BlogDetails from "@/components/Blog/BlogDetails";
import RelatedPosts from "@/components/Blog/RelatedPosts";
import { siteMetaData } from "@/utils/sitemetadata";
import axios from "axios";
import React from "react";

const getData = async (slug) => {
  let data = null;
  await axios
    .get(
      "https://res.cloudinary.com/dsdcsntrd/raw/upload/v1704028105/json/blog_sgbfyw.json"
    )
    .then((response) => {
      // data = response.data?.blogPosts.filter((item) => item.slug === slug)[0];
      data = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return data;
};

export async function generateMetadata({ params }, parent) {
  const data = await getData(params.slug);
  const copyData = [...data.blogPosts];
  const blog = copyData?.filter((item) => item.slug === params.slug)[0];

  return {
    title: blog.title,
    description: blog.description,

    openGraph: {
      title: blog.title,
      description: blog.description,
      url: siteMetaData.siteUrl+"/blog/"+blog.slug,
      siteName: siteMetaData.title,
      images: [
        blog.image
      ],
      publishedTime:new Date(blog.date),
      modifiededTime:new Date(blog.date),
      locale: "en_US",
      type: "article",
      authors:[siteMetaData.author]
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.description,
      images: [blog.image], // Must be an absolute URL
    },
  };
}

const page = async ({ params }) => {
  const data = await getData(params.slug);
  const copyData = [...data.blogPosts];
  const blog = copyData?.filter((item) => item.slug === params.slug)[0];
  const blogs = copyData.splice(0, 3);

  return (
    <div>
      <BlogDetails blog={blog} />
      <RelatedPosts blogs={blogs} />
    </div>
  );
};

export default page;
