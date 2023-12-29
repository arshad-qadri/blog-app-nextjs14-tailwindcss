import Header from "@/components/Header";
import CoverSection from "@/components/Home/CoverSection";
import FeaturedPost from "@/components/Home/FeaturedPost";
import RecentPost from "@/components/Home/RecentPost";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center pb-9">
      <CoverSection/>
      <FeaturedPost/>
      <RecentPost/>
    </main>
  );
}
