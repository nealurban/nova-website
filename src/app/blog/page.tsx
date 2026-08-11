import PrimaryNavigation from "@/components/navigation/PrimaryNavigation";
import SiteFooter from "@/components/footer/SiteFooter";
import Hero from "@/sections/blog/Hero/Hero";
import FeaturedStory from "@/sections/blog/FeaturedStory/FeaturedStory";
import FinalCTA from "@/sections/blog/FinalCTA/FinalCTA";
import LatestStories from "@/sections/blog/LatestStories/LatestStories";
import BlogSidebar from "@/sections/blog/BlogSidebar/BlogSidebar";
import styles from "./page.module.css";

export default function BlogPage() {
  return (
    <>
      <PrimaryNavigation />

      <main>
        <Hero />

        <FeaturedStory />

        <div className={styles.contentLayout}>
          <LatestStories />
          <BlogSidebar />
        </div>

        <FinalCTA />
      </main>

      <SiteFooter />
    </>
  );
}