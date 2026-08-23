import PrimaryNavigation from "@/components/navigation/PrimaryNavigation";
import SiteFooter from "@/components/footer/SiteFooter";
import Hero from "@/sections/blog/Hero/Hero";
import FeaturedStory from "@/sections/blog/FeaturedStory/FeaturedStory";
import FinalCTA from "@/sections/blog/FinalCTA/FinalCTA";
import LatestStories from "@/sections/blog/LatestStories/LatestStories";
import BlogSidebar from "@/sections/blog/BlogSidebar/BlogSidebar";
import { blogPosts } from "@/lib/blog";
import styles from "./page.module.css";

type BlogPageProps = {
  searchParams: Promise<{
    category?: string;
  }>;
};

function toCategorySlug(category: string) {
  return category
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default async function BlogPage({
  searchParams,
}: BlogPageProps) {
  const params = await searchParams;
  const requestedCategory = params.category;

  const categories = Array.from(
    new Set(blogPosts.map((post) => post.category))
  );

  const selectedCategory =
    categories.find(
      (category) =>
        toCategorySlug(category) === requestedCategory
    ) ?? null;

  return (
    <>
      <PrimaryNavigation />

      <main>
        <Hero />

        <FeaturedStory />

        <div className={styles.contentLayout}>
          <LatestStories
            selectedCategory={selectedCategory}
          />

          <BlogSidebar
            selectedCategory={selectedCategory}
          />
        </div>

        <FinalCTA />
      </main>

      <SiteFooter />
    </>
  );
}