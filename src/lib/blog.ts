import firstSoberWedding from "@/content/blog/first-sober-wedding";
import wineIndustryChangingSobriety from "@/content/blog/wine-industry-changing-sobriety";
import whenYouStopDrinkingWhereDoYouGo from "@/content/blog/when-you-stop-drinking-where-do-you-go";
import bradPittDrinkingAgainAfterSevenYearsSober from "@/content/blog/brad-pitt-drinking-again-after-seven-years-sober";
import whySobrietyFeelsBoringAtFirst from "@/content/blog/why-sobriety-feels-boring-at-first";
import sleepAfterQuittingAlcohol from "@/content/blog/sleep-after-quitting-alcohol";
import whyDoIWantToDrinkWhenNothingIsWrong from "@/content/blog/why-do-i-want-to-drink-when-nothing-is-wrong";
import howToHostASummerPartyWhenNotEveryoneDrinks from "@/content/blog/how-to-host-a-summer-party-when-not-everyone-drinks";
import isBeingSoberCoolNow from "@/content/blog/is-being-sober-cool-now";
import youDontHaveToHitRockBottomToStopDrinking from "@/content/blog/you-dont-have-to-hit-rock-bottom-to-stop-drinking";
import whatHappensAfter30DaysWithoutAlcohol from "@/content/blog/what-happens-after-30-days-without-alcohol";
import whatDoesAnAlcoholCravingReallyMean from "@/content/blog/what-does-an-alcohol-craving-really-mean";
import coffeeRavesSoberNightlife from "@/content/blog/coffee-raves-sober-nightlife";
import fridayNightWithoutDrinking from "@/content/blog/friday-night-without-drinking";
import theLastDinnerOfSummer from "@/content/blog/the-last-dinner-of-summer";
import arePeopleDrinkingLessAlcohol from "@/content/blog/are-people-drinking-less-alcohol";
import friendshipsChangeWhenYouStopDrinking from "@/content/blog/friendships-change-when-you-stop-drinking";
import alcoholWellnessTrend from "@/content/blog/alcohol-wellness-trend";

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
  alcoholWellnessTrend,
  friendshipsChangeWhenYouStopDrinking,
  arePeopleDrinkingLessAlcohol,
  theLastDinnerOfSummer,
  fridayNightWithoutDrinking,
  coffeeRavesSoberNightlife,
  whatDoesAnAlcoholCravingReallyMean,
  whatHappensAfter30DaysWithoutAlcohol,
  youDontHaveToHitRockBottomToStopDrinking,
  isBeingSoberCoolNow,
  howToHostASummerPartyWhenNotEveryoneDrinks,
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