import firstSoberWedding from "@/content/blog/first-sober-wedding";
import wineIndustryChangingSobriety from "@/content/blog/wine-industry-changing-sobriety";
import whenYouStopDrinkingWhereDoYouGo from "@/content/blog/when-you-stop-drinking-where-do-you-go";
import bradPittDrinkingAgainAfterSevenYearsSober from "@/content/blog/brad-pitt-drinking-again-after-seven-years-sober";
import whySobrietyFeelsBoringAtFirst from "@/content/blog/why-sobriety-feels-boring-at-first";
import sleepAfterQuittingAlcohol from "@/content/blog/sleep-after-quitting-alcohol";
import whyDoIWantToDrinkWhenNothingIsWrong from "@/content/blog/why-do-i-want-to-drink-when-nothing-is-wrong";

export type BlogSection =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "heading";
      text: string;
    }
  | {
      type: "subheading";
      text: string;
    }
  | {
      type: "quote";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    }
  | {
      type: "image";
      src: string;
      alt: string;
      caption: string;
    }
  | {
      type: "faq";
      question: string;
      answer: string;
    }
      | {
    type: "continueReading";
    text: string;
    slug: string;
  }
  | {
      type: "featureCallout";
      title: string;
      text: string;
      feature: string;
    };

export type BlogSource = {
  name: string;
  title: string;
  url: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  shortTitle: string;
  seoTitle?: string;
  seoDescription?: string;
  category: string;
  excerpt: string;
  publishedAt: string;
  publishedDate: string;
  publishedTime: string;
  readTime: string;
  author: string;
  image: string;
  heroAlt: string;
  relatedSlugs: string[];
  sources: BlogSource[];
  body: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  whyDoIWantToDrinkWhenNothingIsWrong,
  sleepAfterQuittingAlcohol,
whySobrietyFeelsBoringAtFirst,
bradPittDrinkingAgainAfterSevenYearsSober,
whenYouStopDrinkingWhereDoYouGo,
wineIndustryChangingSobriety,
firstSoberWedding,
].sort(
  (a, b) =>
    new Date(`${b.publishedDate}T${b.publishedTime}`).getTime() -
    new Date(`${a.publishedDate}T${a.publishedTime}`).getTime()
);

export const featuredPost = blogPosts[0];

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}