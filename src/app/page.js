import CoverSection from "@/components/Home/CoverSection";
import FeaturedPost from "@/components/Home/FeaturedPost";
import RecentPost from "@/components/Home/RecentPost";

const getData = async () => {
  // const res1 = fetch("http://localhost:3000/blog.json");
  const res1 = fetch("https://res.cloudinary.com/dsdcsntrd/raw/upload/v1704028105/json/blog_sgbfyw.json");
  const res2 = (await res1).json();
  return res2;
};

export default async function Home() {
  const data = await getData();
  const copyData = [...data?.blogPosts]
  // const copyData = {...data}
  copyData.splice(0,2)
  return (
    <main className="flex flex-col items-center justify-center pb-9">
      <CoverSection blog={data?.blogPosts[0]} />
      <FeaturedPost
        blogs={[data?.blogPosts[1], data?.blogPosts[2], data?.blogPosts[3]]}
      />
      <RecentPost blogs={copyData} />
    </main>
  );
}
